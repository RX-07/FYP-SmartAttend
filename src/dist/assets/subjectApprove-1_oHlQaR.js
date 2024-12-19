import{t as s,n as g,l as m,o as f,d as b,f as p}from"./toastr.min-BQ9iNoKe.js";/* empty css               */import"./Header-DVeN77zU.js";s.options.positionClass="toast-bottom-right";const u=g();function j(){const n=m(u,"Students");f(n,e=>{const o=document.querySelector(".approval-table tbody");o.innerHTML="",e.forEach(t=>{const r=t.data(),l=t.id,a=r.enrolledSubjects;a&&typeof a=="object"?Object.entries(a).forEach(([c,d])=>{if(d&&d.status==="Submitted for approval"){const i=document.createElement("tr");i.innerHTML=`
                            <td>${r.studentID}</td>
                            <td>${c}</td>
                            <td>${d.name}</td>
                            <td>
                                <div class="button-container">
                                    <button class="approve-button" data-student-id="${l}" data-subject-code="${c}">Approve</button>
                                    <button class="reject-button" data-student-id="${l}" data-subject-code="${c}">Reject</button>
                                </div>
                            </td>
                        `,o.appendChild(i)}}):console.log(`Enrolled subjects missing or not an object for Student ID: ${r.studentID}`)}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",S)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",E)})},e=>{console.error("Error listening to changes:",e)})}async function S(n){const e=n.target.getAttribute("data-student-id"),o=n.target.getAttribute("data-subject-code");if(e&&o){const t=b(u,"Students",e);try{await p(t,{[`enrolledSubjects.${o}.status`]:"Enrolled"}),s.success("Enrollment approved!")}catch(r){console.error("Error updating document: ",r),s.warning("Failed to approve enrollment. Please try again.")}}}async function E(n){const e=n.target.getAttribute("data-student-id"),o=n.target.getAttribute("data-subject-code");if(e&&o){const t=b(u,"Students",e);try{await p(t,{[`enrolledSubjects.${o}.status`]:"Rejected"}),s.success("Enrollment rejected!")}catch(r){console.error("Error updating document: ",r),s.warning("Failed to reject enrollment. Please try again.")}}}j();
