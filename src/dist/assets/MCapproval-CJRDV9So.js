import{n as m,l as i,o as f,d as u,f as l,q as b,w as g,m as D}from"./FirebaseConfig-Cm1xbBeR.js";/* empty css               */import"./Header-BdWc7Izg.js";import{t as r}from"./toastr.min-DBfZ4jHI.js";r.options.positionClass="toast-bottom-right";const a=m(),y=async c=>{try{const t=i(a,"students"),o=b(t,g("uid","==",c)),e=await D(o);if(e.empty)throw new Error("Student not found.");return e.docs[0].data().studentID}catch(t){return console.error("Error fetching student ID:",t),null}};function h(){const c=i(a,"MC");f(c,async t=>{const o=document.querySelector(".approval-table tbody");o.innerHTML="";for(const e of t.docs){const n=e.data(),s=e.id;if(n.status==="pending"){const p=await y(n.userUID),d=document.createElement("tr");d.innerHTML=`
                    <td>${p||"Not Available"}</td>  <!-- Display the Student ID -->
                    <td>${n.reason}</td>
                    <td>${n.note||"N/A"}</td>
                    <td>${n.submitted_date.toDate().toLocaleString()}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button" data-mc-id="${s}">Approve</button>
                            <button class="reject-button" data-mc-id="${s}">Reject</button>
                        </div>
                    </td>
                `,o.appendChild(d)}}document.querySelectorAll(".approve-button").forEach(e=>{e.addEventListener("click",v)}),document.querySelectorAll(".reject-button").forEach(e=>{e.addEventListener("click",C)})},t=>{console.error("Error listening to changes:",t)})}async function v(c){const t=c.target.getAttribute("data-mc-id");if(t){const o=u(a,"MC",t);try{await l(o,{status:"approved"}),r.success("Medical Certificate approved!")}catch(e){console.error("Error updating document: ",e),r.warning("Failed to approve Medical Certificate. Please try again.")}}}async function C(c){const t=c.target.getAttribute("data-mc-id");if(t){const o=u(a,"MC",t);try{await l(o,{status:"rejected"}),r.success("Medical Certificate rejected!")}catch(e){console.error("Error updating document: ",e),r.warning("Failed to reject Medical Certificate. Please try again.")}}}h();
