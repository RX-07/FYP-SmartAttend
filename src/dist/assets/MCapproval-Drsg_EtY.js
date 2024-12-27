import{n as u,l as p,o as m,d as s,f as l}from"./FirebaseConfig-Cm1xbBeR.js";/* empty css               */import"./Header-BdWc7Izg.js";import{t as c}from"./toastr.min-DBfZ4jHI.js";c.options.positionClass="toast-bottom-right";const i=u();function f(){const a=p(i,"MC");m(a,e=>{const o=document.querySelector(".approval-table tbody");o.innerHTML="",e.forEach(t=>{const r=t.data(),n=t.id;if(r.status==="pending"){const d=document.createElement("tr");d.innerHTML=`
                    <td>${n}</td>
                    <td>${r.reason}</td>
                    <td>${r.note||"N/A"}</td>
                    <td>${r.submitted_date.toDate().toLocaleString()}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button" data-mc-id="${n}">Approve</button>
                            <button class="reject-button" data-mc-id="${n}">Reject</button>
                        </div>
                    </td>
                `,o.appendChild(d)}}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",b)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",g)})},e=>{console.error("Error listening to changes:",e)})}async function b(a){const e=a.target.getAttribute("data-mc-id");if(e){const o=s(i,"MC",e);try{await l(o,{status:"approved"}),c.success("Medical Certificate approved!")}catch(t){console.error("Error updating document: ",t),c.warning("Failed to approve Medical Certificate. Please try again.")}}}async function g(a){const e=a.target.getAttribute("data-mc-id");if(e){const o=s(i,"MC",e);try{await l(o,{status:"rejected"}),c.success("Medical Certificate rejected!")}catch(t){console.error("Error updating document: ",t),c.warning("Failed to reject Medical Certificate. Please try again.")}}}f();
