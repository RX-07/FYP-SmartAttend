import { db, doc, getDocs, collection } from "./FirebaseConfig.js";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right';

export async function generateExcelReport(subjectId) {
    const subjectRef = doc(db, "Subjects", subjectId);
    const classesSnapshot = await getDocs(collection(subjectRef, "Classes"));

    // Create an Excel workbook
    const workbook = XLSX.utils.book_new();

    for (const classDoc of classesSnapshot.docs) {
        const classData = classDoc.data();

        if (!classData.attendance || Object.keys(classData.attendance).length === 0) {
            continue;
        }

        // Extract student data
        const studentData = await Promise.all(
            Object.entries(classData.attendance).map(async ([uid, student]) => {
                let address = "N/A";
                if (student.location?.latitude && student.location?.longitude) {
                    address = await getAddressFromCoordinates(student.location.latitude, student.location.longitude);
                }

                return {
                    Name: student.name,
                    Email: student.email,
                    Status: student.status,
                    CheckInTime: student.checkInTime,
                    Location: address || "N/A"
                };
            })
        );

        // Create a worksheet
        let worksheet = XLSX.utils.json_to_sheet(studentData);
        
        // Apply styling
        formatWorksheet(worksheet, studentData);

        // Sheet name format
        const sheetName = `${classData.classDate}_${classData.timeSlot}`.substring(0, 31);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    // Generate the Excel file as a Blob
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const fileBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

    // Save the file using FileSaver.js
    const fileName = `${subjectId}-Attendance-Report.xlsx`;
    saveAs(fileBlob, fileName);
    toastr.success(`Excel report downloaded: ${fileName}`);
}

function formatWorksheet(worksheet, data) {
    const range = XLSX.utils.decode_range(worksheet["!ref"]); // Get range of data

    // Bold headers
    const headers = Object.keys(data[0]); // Get column headers
    headers.forEach((header, colIndex) => {
        const cellAddress = XLSX.utils.encode_cell({ r: 0, c: colIndex });
        if (worksheet[cellAddress]) {
            worksheet[cellAddress].s = {
                font: { bold: true, color: { rgb: "FFFFFF" } },
                fill: { fgColor: { rgb: "0070C0" } }, 
                alignment: { horizontal: "center", vertical: "center" }
            };
        }
    });

    // Apply borders & alternating row colors
    for (let row = 1; row <= range.e.r; row++) {
        for (let col = 0; col <= range.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
            if (worksheet[cellAddress]) {
                worksheet[cellAddress].s = {
                    border: {
                        top: { style: "thin", color: { rgb: "000000" } },
                        bottom: { style: "thin", color: { rgb: "000000" } },
                        left: { style: "thin", color: { rgb: "000000" } },
                        right: { style: "thin", color: { rgb: "000000" } }
                    },
                    fill: row % 2 === 0 ? { fgColor: { rgb: "F2F2F2" } } : {} 
                };
            }
        }
    }

    // Auto-adjust column widths
    worksheet["!cols"] = headers.map(() => ({ wch: 20 }));

    // Freeze header row
    worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };
}

async function getAddressFromCoordinates(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.display_name || "Unknown Location"; // Get a human-readable address
    } catch (error) {
        console.error("Error fetching location:", error);
        return "Unknown Location";
    }
}
