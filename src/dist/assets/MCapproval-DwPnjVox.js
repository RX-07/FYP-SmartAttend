import{n as d,l as s,o as i}from"./FirebaseConfig-Cm1xbBeR.js";/* empty css               */import"./Header-BdWc7Izg.js";import{t as l}from"./toastr.min-DBfZ4jHI.js";l.options.positionClass="toast-bottom-right";const u=d();function p(){const c=s(u,"MC");i(c,e=>{const n=document.querySelector(".approval-table tbody");n.innerHTML="",e.forEach(t=>{const o=t.data(),r=t.id;if(o.status==="pending"){const a=document.createElement("tr");a.innerHTML=`
                    <td>${o.studentID}</td> <!-- Display Student ID -->
                    <td>${o.reason}</td>
                    <td>${o.note||"N/A"}</td>
                    <td>${o.submitted_date.toDate().toLocaleString()}</td>
                    <td>
                        <div class="button-container">
                            <button class="approve-button" data-mc-id="${r}">Approve</button>
                            <button class="reject-button" data-mc-id="${r}">Reject</button>
                        </div>
                    </td>
                `,n.appendChild(a)}}),document.querySelectorAll(".approve-button").forEach(t=>{t.addEventListener("click",handleApprove)}),document.querySelectorAll(".reject-button").forEach(t=>{t.addEventListener("click",handleReject)})},e=>{console.error("Error listening to changes:",e)})}p();
