import{a}from"./FirebaseConfig-Cm1xbBeR.js";let e="student-logged-out";a.onAuthStateChanged(t=>{if(t){const n=t.email;n?d(n):console.log("Email is not available for this user.")}else console.log("No user is currently logged in"),l("student-logged-out")});function u(t){t==="admin@help.edu.my"?e="admin-logged-in":e="student-logged-in",l(e)}function d(t){u(t)}function g(){(e==="student-logged-in"||e==="lecturer-logged-in"||e==="admin-logged-in")&&(e=e.includes("student")?"student-logged-out":"admin-logged-out",console.log("Role after logout:",e),window.location.href="index.html",l(e))}function l(t){const n=document.getElementById("nav-links");if(!n){console.error("nav-links element not found in the HTML");return}let o="";t==="student-logged-in"?o=`
            <a href="studentHome.html">Home</a>
            <a href="submitMC.html">Submit MC</a>
            <a href="subjectEnrol.html">Subject Enrolment</a>
            <a href="Profile.html">Profile</a>
            <button class="btn logout">Log Out</button>
        `:t==="admin-logged-in"?o=`
            <a href="subjectApprove.html">Subject Enrolment Review</a>
            <a href="timetable.html">Class Schedule Management</a>
            <a href="MCapproval.html">MC Review</a>
            <button class="btn logout">Log Out</button>
        `:(t==="student-logged-out"||t==="admin-logged-out")&&(o=`
            <a href="#">Home</a>
            <button class="btn login-btn" onclick="window.location.href='index.html'">Login</button>
            <button class="btn signup-btn" onclick="window.location.href='Signup.html'">Sign Up</button>
        `),n.innerHTML=o;const i=n.querySelector(".logout");i&&i.addEventListener("click",g)}document.addEventListener("DOMContentLoaded",()=>{l(e)});
