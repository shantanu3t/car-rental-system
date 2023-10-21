document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("booking-modal");
    const bookButtons = document.querySelectorAll(".book-button");
    const closeButton = document.querySelector(".close-button");
    const daysInput = document.getElementById("days");
    const carDescription = document.getElementById("car-description");
    const rentalChargesInput = document.getElementById("rental-charges");
    const gstInput = document.getElementById("gst");
    const refundableDepositInput = document.getElementById("refundable-deposit");
    const totalInput = document.getElementById("total");
    const calculateButton = document.getElementById("calculate-button");
    const bookNowButton = document.getElementById("book-button");

    // Event listener for the "Book" buttons
    bookButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block";

            // Get car information using dataset attributes
            const carInfo = button.parentElement.querySelector(".car-info");
            carDescription.textContent = carInfo.querySelector("h2").textContent;
            daysInput.value = ""; // Clear days input
            rentalChargesInput.value = "";
            gstInput.value = "";
            refundableDepositInput.value = "";
            totalInput.value = "";

            // Store the current book button in a variable for later use
            calculateButton.dataset.bookButton = button;

            // Hide the "Book Now" button and show the "Calculate" button
            calculateButton.style.display = "block";
            bookNowButton.style.display = "none";
        });
    });

    // Event listener for the close button
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Calculate charges and total when the "Calculate" button is clicked
    calculateButton.addEventListener("click", function () {
        const days = parseFloat(daysInput.value);

        // Example calculation logic (you can customize this as needed)
        const rentalCharges = days * 6500; // Update this with your rates
        const gst = rentalCharges * 0.18; // 18% GST
        const refundableDeposit = 10000; // Example deposit amount
        const total = rentalCharges + gst + refundableDeposit;

        rentalChargesInput.value = rentalCharges.toFixed(2);
        gstInput.value = gst.toFixed(2);
        refundableDepositInput.value = refundableDeposit.toFixed(2);
        totalInput.value = total.toFixed(2);

        // Show the "Book Now" button and hide the "Calculate" button
        bookNowButton.style.display = "block";
        calculateButton.style.display = "none";
    });

    // Event listener for the "Book Now" button
    bookNowButton.addEventListener("click", function () {
        // Retrieve the originally clicked "Book" button
        const originalBookButton = calculateButton.dataset.bookButton;

        // You can trigger your booking process here using originalBookButton
        // For example, you can redirect to a booking page or handle the booking in this function.

        // For demonstration, we'll show an alert
        alert(`Booking the car: ${carDescription.textContent} for ${daysInput.value} days.`);
    });

    // Close the modal when the user clicks outside of it
    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
