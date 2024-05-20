function showToast() {
    // Show the toast
    $('.toast').toast('show');

    // Redirect to the quotation form page after 2 seconds
    setTimeout(function() {
        window.location.href = "./quotation_form.html";
    }, 2000);
}