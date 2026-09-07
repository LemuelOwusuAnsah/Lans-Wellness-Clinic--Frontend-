(function() {
    function handleBookingSubmit(event) {
        event.preventDefault();
        var modalElement = document.getElementById('appointmentModal');
        var modal = bootstrap.Modal.getInstance(modalElement);

        alert('Your consultation request has been lodged with Lans Wellness Clinic. An intake advisor will reach out via email from admissions@lanswellness.com within 3 hours.');
        modal.hide();
        event.target.reset();
    }

    window.handleBookingSubmit = handleBookingSubmit;
    window.LansBooking = {
        handleSubmit: handleBookingSubmit
    };
})();