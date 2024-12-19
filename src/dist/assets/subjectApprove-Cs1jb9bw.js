import{n as p,l as g,o as f,d as l,f as b}from"./FirebaseConfig-Cm1xbBeR.js";/* empty css               */import"./Header-DJ8cievG.js";/* empty css                   */toastr.options.positionClass="toast-bottom-right";const d=p();function m(){const n=g(d,"Students");f(n,e=>{const o=document.querySelector(".approval-table tbody");o.innerHTML="",e.forEach(t=>{const r=t.data(),u=t.id,a=r.enrolledSubjects;a&&typeof a=="object"?Object.entries(a).forEach(([s,c])=>{if(c&&c.status==="Submitted for approval"){const i=document.createElement("tr");i.innerHTML=`
                            <td>${r.studentID}</td>
                            <td>${s}</td>
                            <td>${c.name}</td>
                            <td>
                                <div class="button-container">
                                    <button class="approve-button" data-student-id="${u}" data-subject-code="${s}">Approve</button>
                                    <button class="reject-button" data-student-id="${u}" data-subject-code="${s}">Reject</button>
                                </div>
                            </td>
                        `,o.appendChild(i)}}):console.log(`Enrolled subjects missing or not an object for Student ID: ${r.studentID}`)}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",j)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",S)})},e=>{console.error("Error listening to changes:",e)})}async function j(n){const e=n.target.getAttribute("data-student-id"),o=n.target.getAttribute("data-subject-code");if(e&&o){const t=l(d,"Students",e);try{await b(t,{[`enrolledSubjects.${o}.status`]:"Enrolled"})}catch(r){console.error("Error updating document: ",r),toastr.warning("Failed to approve enrollment. Please try again.")}}}async function S(n){const e=n.target.getAttribute("data-student-id"),o=n.target.getAttribute("data-subject-code");if(e&&o){const t=l(d,"Students",e);try{await b(t,{[`enrolledSubjects.${o}.status`]:"Rejected"})}catch(r){console.error("Error updating document: ",r),toastr.warning("Failed to reject enrollment. Please try again.")}}}m();
