document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("eventForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get values
        const studentName = document.getElementById("studentName").value.trim();
        const rollNo = document.getElementById("rollNo").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const eventName = document.getElementById("eventName").value;
        const department = document.getElementById("department").value;
        const year = document.getElementById("year").value;

        // Basic validation
        if (
            studentName === "" ||
            rollNo === "" ||
            email === "" ||
            phone === "" ||
            eventName === "" ||
            department === "" ||
            year === ""
        ) {
            alert("Please fill all the fields.");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // Registration object
        const registrationData = {
            studentName,
            rollNo,
            email,
            phone,
            eventName,
            department,
            year,
            registeredAt: new Date().toLocaleString()
        };

        // Get stored registrations
        let registrations = JSON.parse(localStorage.getItem("eventRegistrations")) || [];

        // Prevent duplicate registration
        const duplicate = registrations.some(
            r => r.rollNo === rollNo && r.eventName === eventName
        );

        if (duplicate) {
            alert("You have already registered for this event.");
            return;
        }

        // Save registration
        registrations.push(registrationData);
        localStorage.setItem("eventRegistrations", JSON.stringify(registrations));

        alert("🎉 Event Registered Successfully!");

        form.reset();
    });

});