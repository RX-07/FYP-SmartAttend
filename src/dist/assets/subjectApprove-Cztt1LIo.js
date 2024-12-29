import{t as a,l as f,o as g,d as b,b as u,f as p}from"./toastr.min-BC1oLms4.js";import"./Header-D2DHqaX2.js";a.options.positionClass="toast-bottom-right";function m(){const n=f(u,"Students");g(n,e=>{const o=document.querySelector(".approval-table tbody");o.innerHTML="",e.forEach(t=>{const r=t.data(),l=t.id,s=r.enrolledSubjects;s&&typeof s=="object"?Object.entries(s).forEach(([c,d])=>{if(d&&d.status==="Submitted for approval"){const i=document.createElement("tr");i.innerHTML=`
                            <td>${r.studentID}</td>
                            <td>${c}</td>
                            <td>${d.name}</td>
                            <td>
                                <div class="button-container">
                                    <button class="approve-button" data-student-id="${l}" data-subject-code="${c}">Approve</button>
                                    <button class="reject-button" data-student-id="${l}" data-subject-code="${c}">Reject</button>
                                </div>
                            </td>
                        `,o.appendChild(i)}}):console.log(`Enrolled subjects missing or not an object for Student ID: ${r.studentID}`)}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",j)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",S)})},e=>{console.error("Error listening to changes:",e)})}async function j(n){const e=n.target.getAttribute("data-student-id"),o=n.target.getAttribute("data-subject-code");if(e&&o){const t=b(u,"Students",e);try{await p(t,{[`enrolledSubjects.${o}.status`]:"Enrolled"}),a.success("Enrollment approved!")}catch(r){console.error("Error updating document: ",r),a.warning("Failed to approve enrollment. Please try again.")}}}async function S(n){const e=n.target.getAttribute("data-student-id"),o=n.target.getAttribute("data-subject-code");if(e&&o){const t=b(u,"Students",e);try{await p(t,{[`enrolledSubjects.${o}.status`]:"Rejected"}),a.success("Enrollment rejected!")}catch(r){console.error("Error updating document: ",r),a.warning("Failed to reject enrollment. Please try again.")}}}m();
