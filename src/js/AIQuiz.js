import { HfInference } from "@huggingface/inference";
import { db, doc, setDoc } from "./FirebaseConfig.js";

const client = new HfInference(import.meta.env.VITE_HUGGING_FACE_API_KEY); 

export async function generateQuiz(topic) {
    try {
        const chatCompletion = await client.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                {
                    role: "user",
                    content: `Generate exactly three multiple-choice quiz questions on the topic of "${topic}" in **valid JSON format**.
                    Follow this format strictly:
                    [
                        {
                            "question": "What is AI?",
                            "options": ["Artificial Intelligence", "Automatic Input", "Automated Index", "Analog Information"],
                            "answer": "Artificial Intelligence"
                        },
                        {
                            "question": "Who is known as the father of AI?",
                            "options": ["Alan Turing", "Isaac Newton", "Albert Einstein", "Nikola Tesla"],
                            "answer": "Alan Turing"
                        }
                    ]
                    ONLY return valid JSON. Do NOT add explanations or extra text.`
                }
            ],
            provider: "hf-inference",
            max_tokens: 500,
        });

        // Extract response text
        let text = chatCompletion.choices[0].message.content.trim();

        // Remove non-JSON text before parsing
        const jsonMatch = text.match(/\[.*\]/s);
        if (!jsonMatch) throw new Error("Invalid JSON format received");

        const cleanedJSON = jsonMatch[0]; // Extract only the JSON part

        return JSON.parse(cleanedJSON); // Convert to JavaScript object
    } catch (error) {
        console.error("Error generating quiz:", error.response?.data || error.message);
        return null;
    }
}

export async function storeQuiz(subjectId, week, quizData) {
    try {
        const quizRef = doc(db, "Quiz", subjectId);
        await setDoc(quizRef, { [week]: { questions: quizData } }, { merge: true });

        console.log(`Quiz stored successfully for ${subjectId} - Week ${week}`);
    } catch (error) {
        console.error("Error storing quiz:", error);
    }
}

export async function generateAndStoreQuiz(subjectId, week, topic) {
    const quizData = await generateQuiz(topic);
    if (!quizData) return;

    await storeQuiz(subjectId, week, quizData);
}