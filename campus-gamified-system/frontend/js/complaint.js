const complaintForm = document.querySelector(".complaint-form");

complaintForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Complaint Submitted Successfully 🚀");

    complaintForm.reset();

});