import{a}from"./toastr.min-MdK85Wuf.js";let t="student-logged-out";a.onAuthStateChanged(e=>{if(e){const n=e.email;n?d(n):console.log("Email is not available for this user.")}else console.log("No user is currently logged in"),l("student-logged-out")});function u(e){e==="admin@help.edu.my"?t="admin-logged-in":t="student-logged-in",l(t)}function d(e){u(e)}function g(){(t==="student-logged-in"||t==="lecturer-logged-in"||t==="admin-logged-in")&&(t=t.includes("student")?"student-logged-out":"admin-logged-out",console.log("Role after logout:",t),window.location.href="index.html",l(t))}function l(e){const n=document.getElementById("nav-links");if(!n){console.error("nav-links element not found in the HTML");return}let o="";e==="student-logged-in"?o=`
            <a href="studentHome.html">Home</a>
            <a href="#">Submit MC</a>
            <a href="subjectEnrol.html">Subject Enrolment</a>
            <a href="Profile.html">Profile</a>
            <button class="btn logout">Log Out</button>
        `:e==="admin-logged-in"?o=`
            <a href="subjectApprove.html">Subject Enrolment Review</a>
            <a href="timetable.html">Class Schedule Management</a>
            <a href="#">MC Review</a>
            <button class="btn logout">Log Out</button>
        `:(e==="student-logged-out"||e==="admin-logged-out")&&(o=`
            <a href="#">Home</a>
            <button class="btn login-btn" onclick="window.location.href='index.html'">Login</button>
            <button class="btn signup-btn" onclick="window.location.href='Signup.html'">Sign Up</button>
        `),n.innerHTML=o;const i=n.querySelector(".logout");i&&i.addEventListener("click",g)}document.addEventListener("DOMContentLoaded",()=>{l(t)});
