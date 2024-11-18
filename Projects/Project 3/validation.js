// Function to print error messages
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Function to validate sign-up input credentials
function validateSignupInputCredentials() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email_address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    
    // Initialize error flags
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // Validate name
    if (username == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[A-Za-z ]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    // Validate confirm password
    if (confirmPassword == "") {
        printError("confirmPasswordErr", "Please confirm your password");
    } else if (confirmPassword !== password) {
        printError("confirmPasswordErr", "Passwords do not match");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    // Return validation status
    if (nameErr || emailErr || passwordErr || confirmPasswordErr) {
        return false;
    } else {
        return true;
    }
}

// Function to validate login input credentials
function validateLoginInputCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Initialize error flags
    var emailErr = passwordErr = true;

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    // Return validation status
    if (emailErr || passwordErr) {
        return false;
    } else {
        return true;
    }
}
