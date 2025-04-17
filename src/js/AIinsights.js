import { auth, db, doc, getDoc, setDoc } from "./FirebaseConfig.js";
import { HfInference } from "@huggingface/inference";

const client = new HfInference(import.meta.env.VITE_HUGGING_FACE_API_KEY); 

export async function generateInsights(attendanceData) {
    try {
        const chatCompletion = await client.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                {
                    role: "user",
                    content: `Analyze the following student attendance data and generate **short, concise, and informative bullet-point insights**. Keep it **brief yet useful**.

                    **Attendance Data:**
                    ${JSON.stringify(attendanceData)}

                    **Expected Output Format (max 5 points):**
                    📌 [Insight 1]
                    📌 [Insight 2]
                    📌 [Insight 3]
                    📌 [Insight 4]
                    📌 [Insight 5]

                    Focus on **patterns, punctuality trends, and improvement suggestions**.`
                }
            ],
            provider: "hf-inference",
            max_tokens: 300,
        });

        return chatCompletion.choices[0].message.content; 
    } catch (error) {
        console.error("Error generating insights:", error.response?.data || error.message);
        return null;
    }
}

async function fetchInsightsFromFirestore() {
    const user = auth.currentUser;

    if (!user) {
        console.log("User not signed in. Insights cannot be fetched.");
        return;
    }

    const uid = user.uid;
    const punctualityRef = doc(db, "Attendance_punctuality", uid);
    const punctualitySnapshot = await getDoc(punctualityRef);

    if (!punctualitySnapshot.exists()) {
        console.log("No attendance records found.");
        displayInsights("No attendance insights available yet. Click the button to generate.");
        return;
    }

    const attendanceData = punctualitySnapshot.data();
    
    if (attendanceData.aiInsights) {
        displayInsights(attendanceData.aiInsights);  // Display stored insights
    } else {
        displayInsights("No insights available yet. Click the button to generate.");
    }
}

async function generateAndSaveInsights() {
    const user = auth.currentUser;

    if (!user) {
        console.log("User not signed in.");
        return;
    }

    const uid = user.uid;
    const punctualityRef = doc(db, "Attendance_punctuality", uid);
    const punctualitySnapshot = await getDoc(punctualityRef);

    if (!punctualitySnapshot.exists()) {
        console.log("No attendance records found.");
        return;
    }

    const attendanceData = punctualitySnapshot.data();
    const insights = await generateInsights(attendanceData);

    if (insights) {
        await setDoc(punctualityRef, { ...attendanceData, aiInsights: insights }, { merge: true });

        displayInsights(insights);
    }
}

async function init() {
    const chartContainer = document.querySelector(".chart-container");

    const insightsContainer = document.createElement("div");
    insightsContainer.classList.add("insights-container");

    const generateBtn = document.createElement("button");
    generateBtn.id = "generate-insights-btn";
    generateBtn.textContent = "Generate Insights";
    generateBtn.addEventListener("click", generateAndSaveInsights);

    const insightsContent = document.createElement("div");
    insightsContent.classList.add("insights-content");

    insightsContainer.appendChild(insightsContent);
    insightsContainer.appendChild(generateBtn);
    chartContainer.appendChild(insightsContainer);

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            await fetchInsightsFromFirestore();  
        } else {
            console.log("User not signed in.");
        }
    });
}

function displayInsights(insights) {
    const insightsContent = document.querySelector(".insights-content");
    insightsContent.innerHTML = ""; 

    const title = document.createElement("h3");
    title.classList.add("insights-title");
    title.textContent = "📊 AI-Generated Attendance Insights";

    const listContainer = document.createElement("ul"); 
    listContainer.classList.add("insights-list");

    const insightsArray = insights.split("📌").filter(item => item.trim() !== "");
    insightsArray.forEach(insight => {
        const listItem = document.createElement("li");
        listItem.classList.add("insight-item");
        listItem.textContent = `📌 ${insight.trim()}`;
        listContainer.appendChild(listItem);
    });

    insightsContent.appendChild(title);
    insightsContent.appendChild(listContainer);
}

init();