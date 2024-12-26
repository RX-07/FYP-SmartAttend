import{n as c,l as s,o as i}from"./FirebaseConfig-Cm1xbBeR.js";/* empty css               */import"./Header-BdWc7Izg.js";import{t as l}from"./toastr.min-DBfZ4jHI.js";l.options.positionClass="toast-bottom-right";const u=c();function p(){const a=s(u,"MC");i(a,e=>{const n=document.querySelector(".approval-table tbody");n.innerHTML="",e.forEach(t=>{const o=t.data(),d=t.id;if(o.status==="pending"){const r=document.createElement("tr");r.innerHTML=`
                    <td>${o.studentID}</td> <!-- Display Student ID -->
                    <td>${o.uid}</td>
                    <td>${o.reason}</td>
                    <td>${o.note||"N/A"}</td>
                    <td>${o.submitted_date.toDate().toLocaleString()}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button" data-mc-id="${d}">Approve</button>
                            <button class="reject-button" data-mc-id="${d}">Reject</button>
                        </div>
                    </td>
                `,n.appendChild(r)}}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",handleApprove)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",handleReject)})},e=>{console.error("Error listening to changes:",e)})}p();
