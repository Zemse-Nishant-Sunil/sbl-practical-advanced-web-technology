$(document).ready(function() {

    $("#password").keyup(function() {

        let password = $(this).val();
        let strength = "";

        if (password.length === 0) {
            strength = "";
        }
        else if (password.length < 6) {
            strength = "Weak";
        }
        else if (password.length < 10) {
            strength = "Medium";
        }
        else {
            strength = "Strong";
        }

        $("#strength").text(strength);

    });

});