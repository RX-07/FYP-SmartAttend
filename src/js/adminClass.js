import { db, collectionGroup, getDocs } from "./FirebaseConfig.js";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right';

const subjectCodesMap = {
    "BIT101": "Computer Architecture and Organisation",
    "BIT102": "Web Design and Development",
    "BIT103": "Introduction to Database Systems",
    "BIT104": "Applied Mathematics Studies",
    "BIT106": "Object Oriented Programming",
    "BIT107": "Data Communications and Networking",
    "BIT108": "Discrete Mathematics",
    "BIT110": "Introduction to Operating Systems",
    "BIT200": "Technopreneurship and Innovation",
    "BIT201": "Systems Architecture and Design",
    "BIT206": "User Experience Design",
    "BIT210": "Advanced Web Development",
    "BIT212": "Cloud Computing",
    "BIT216": "Software Engineering Principles",
    "BIT217": "Internet of Things",
    "BIT219": "Introduction to Mobile Apps",
    "BIT301": "IT Project Management",
    "BIT303": "Data Analytics",
    "BIT304": "Final Year Project I",
    "BIT305": "Final Year Project II",
    "BIT306": "Enterprise Application Development",
    "BIT310": "Startup Ideation",
    "BIT311": "Mobile Applications Development",
    "BIT312": "Cloud Solutions Development",
    "BDA100": "Programming Fundamentals",
    "BDA101": "Analytics for Decision Making",
    "BDA203": "Advanced Database Systems",
    "BDA205": "Data Mining and Visualization",
    "BDA206": "Enterprise Data Infrastructure",
    "BDA306": "Machine Learning and AI",
    "BDA307": "Big Data Technologies",
    "BCS102": "Fundamentals of AI",
    "BCS105": "Multimedia Systems",
    "BCS201": "Data Structures and Algorithms",
    "BCS202": "Computer Systems Engineering",
    "BCS302": "Cyber-defense and Ethical Hacking"
};

let allSubjects = [];

async function fetchSubjects() {
    const subjectContainer = document.getElementById("adminSubjects");
    subjectContainer.innerHTML = `<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p>Loading subjects...</p></div>`;

    try {
        const classesQuery = collectionGroup(db, "Classes");
        const querySnapshot = await getDocs(classesQuery);

        const subjectSet = new Set();

        querySnapshot.forEach((docSnapshot) => {
            const subjectPath = docSnapshot.ref.path;
            const subjectId = subjectPath.split("/")[1];
            subjectSet.add(subjectId);
        });

        if (subjectSet.size === 0) {
            subjectContainer.innerHTML = `<p class="text-center text-muted">No subjects found.</p>`;
            return;
        }

        allSubjects = Array.from(subjectSet).map(subjectId => ({
            id: subjectId,
            name: subjectCodesMap[subjectId] || "Unknown Subject",
            category: subjectId.substring(0, 3)
        }));

        displaySubjects(allSubjects); 

    } catch (error) {
        console.error("Error fetching subjects:", error);
        subjectContainer.innerHTML = `<p class="text-danger text-center">Error loading subjects.</p>`;
    }
}

function displaySubjects(subjects) {
    const subjectContainer = document.getElementById("adminSubjects");
    subjectContainer.innerHTML = ""; 

    if (subjects.length === 0) {
        subjectContainer.innerHTML = `<p class="text-center text-muted">No subjects match your filter.</p>`;
        return;
    }

    subjects.forEach(({ id, name }) => {
        const subjectCard = document.createElement("div");
        subjectCard.className = "col-lg-4 col-md-6 col-sm-12";
        subjectCard.innerHTML = `
            <div class="card shadow-sm p-3">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${id}</h5>
                    <p class="card-text text-muted">${name}</p>
                    <div class="btn-group d-flex justify-content-center gap-2">
                        <button class="btn btn-outline-primary btn-sm report-btn" data-subject="${id}">
                            <i class="fas fa-file-alt"></i> Generate Report
                        </button>
                        <button class="btn btn-outline-success btn-sm quiz-btn" data-subject="${id}">
                            <i class="fas fa-book"></i> Manage Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;

        subjectContainer.appendChild(subjectCard);
    });

    attachEventListeners();
}

function filterSubjects() {
    const category = document.getElementById("categoryFilter").value;
    const searchText = document.getElementById("searchInput").value.toLowerCase();

    const filteredSubjects = allSubjects.filter(({ id, name, category: subjectCategory }) => {
        const matchesCategory = category === "all" || subjectCategory === category;
        const matchesSearch = id.toLowerCase().includes(searchText) || name.toLowerCase().includes(searchText);
        return matchesCategory && matchesSearch;
    });

    displaySubjects(filteredSubjects);
}

document.getElementById("categoryFilter").addEventListener("change", filterSubjects);
document.getElementById("searchInput").addEventListener("input", filterSubjects);

function attachEventListeners() {
    document.querySelectorAll(".report-btn").forEach(button => {
        button.addEventListener("click", event => {
            generateReport(event.target.getAttribute("data-subject"));
        });
    });

    document.querySelectorAll(".quiz-btn").forEach(button => {
        button.addEventListener("click", event => {
            manageQuizTopics(event.target.getAttribute("data-subject"));
        });
    });
}

function generateReport(subjectId) {
    console.log("Generating report for:", subjectId);
}

function manageQuizTopics(subjectId) {
    console.log("Managing quiz topics for:", subjectId);
}

fetchSubjects();
