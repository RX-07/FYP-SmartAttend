import{t as n,l as C,o as D,d,b as s,g as M,f}from"./toastr.min-BC1oLms4.js";import"./Header-D2DHqaX2.js";n.options.positionClass="toast-bottom-right";function h(){const o=C(s,"MC");D(o,async e=>{const c=document.querySelector(".approval-table tbody");c.innerHTML="";for(const t of e.docs){const a=t.data(),i=t.id;if(a.submittedMC){const p=a.submittedMC;for(const[u,r]of Object.entries(p))if(r.status==="Pending"){const g=d(s,"Students",i),l=await M(g);let m="";l.exists()&&(m=l.data().studentID);const y=r.file,b=document.createElement("tr");b.innerHTML=`
                            <td>${m}</td>
                            <td>${r.reason}</td>
                            <td><a href="${y}" target="_blank">View File</a></td>
                            <td>${r.submittedDate}</td>
                            <td>
                                <div class="button-container">
                                    <button class="approve-button" data-mc-id="${i}" data-mc-key="${u}">Approve</button>
                                    <button class="reject-button" data-mc-id="${i}" data-mc-key="${u}">Reject</button>
                                </div>
                            </td>
                        `,c.appendChild(b)}}}document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",v)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",$)})},e=>{console.error("Error listening to changes:",e)})}async function v(o){const e=o.target.getAttribute("data-mc-id"),c=o.target.getAttribute("data-mc-key");if(e&&c){const t=d(s,"MC",e);try{await f(t,{[`submittedMC.${c}.status`]:"Approved"}),n.success("Medical Certificate approved!")}catch(a){console.error("Error updating document: ",a),n.warning("Failed to approve Medical Certificate. Please try again.")}}}async function $(o){const e=o.target.getAttribute("data-mc-id"),c=o.target.getAttribute("data-mc-key");if(e&&c){const t=d(s,"MC",e);try{await f(t,{[`submittedMC.${c}.status`]:"Rejected"}),n.success("Medical Certificate rejected!")}catch(a){console.error("Error updating document: ",a),n.warning("Failed to reject Medical Certificate. Please try again.")}}}h();
