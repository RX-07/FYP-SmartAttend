import{n as m,l as b,o as f,d as s,f as l}from"./FirebaseConfig-Cm1xbBeR.js";/* empty css               */import"./Header-BdWc7Izg.js";import{t as r}from"./toastr.min-DBfZ4jHI.js";r.options.positionClass="toast-bottom-right";const n=m();function g(){const a=b(n,"MC");f(a,e=>{const o=document.querySelector(".approval-table tbody");o.innerHTML="",e.forEach(t=>{const c=t.data(),i=t.id,u=t.id,p=c.studentID||"Not available";if(c.status==="pending"){const d=document.createElement("tr");d.innerHTML=`
                    <td>${p}</td>
                    <td>${u}</td>
                    <td>${c.reason}</td>
                    <td>${c.note||"N/A"}</td>
                    <td>${c.submitted_date.toDate().toLocaleString()}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button" data-mc-id="${i}">Approve</button>
                            <button class="reject-button" data-mc-id="${i}">Reject</button>
                        </div>
                    </td>
                `,o.appendChild(d)}}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",v)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",h)})},e=>{console.error("Error listening to changes:",e)})}async function v(a){const e=a.target.getAttribute("data-mc-id");if(e){const o=s(n,"MC",e);try{await l(o,{status:"approved"}),r.success("Medical Certificate approved!")}catch(t){console.error("Error updating document: ",t),r.warning("Failed to approve Medical Certificate. Please try again.")}}}async function h(a){const e=a.target.getAttribute("data-mc-id");if(e){const o=s(n,"MC",e);try{await l(o,{status:"rejected"}),r.success("Medical Certificate rejected!")}catch(t){console.error("Error updating document: ",t),r.warning("Failed to reject Medical Certificate. Please try again.")}}}g();
