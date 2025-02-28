async function sendWarningEmail(email, subjectId) {
    try {
        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, subjectId }),
        });

        const data = await response.json();
        if (data.success) {
            console.log(`Warning email sent to ${email} for subject ${subjectId}`);
        } else {
            console.error("Failed to send email:", data.message);
        }
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
