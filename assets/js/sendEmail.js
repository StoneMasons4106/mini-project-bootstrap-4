function sendEmail(contactForm) {
    emailjs.send("service_48yh5zj", "template_hqru9fr", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )
    return false;
}