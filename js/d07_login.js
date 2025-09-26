function validateAccount(ev) {
    // ev.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "123456") {
        alert("Login successful!");
        // window.location.href = "d03_table.html"; // Redirect to home page
    } else {
        alert("Invalid username or password. Please try again !");
        document.getElementById("password").focus();
    }
}


function validateForm(ev) {
    ev.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById("country").value;
    var dob = document.getElementById("dob").value;
    var h_game = document.getElementById("h_game").checked;
    var h_travel = document.getElementById("h_travel").checked;
    var h_music = document.getElementById("h_music").checked;

    // Check for empty fields
    if (username === "" || password === "" || email === "" || country === "" || dob === "") {
        alert("Please fill in all required fields.");
        return;
    }


    // Check if passwords match
    if (password !== password2) {
        alert("Passwords do not match. Please re-enter.");
        document.getElementById("password2").focus();
        return;
    }

    // Check if at least one hobby is selected
    if (!h_game && !h_travel && !h_music) {
        alert("Please select at least one hobby.");
        return;
    }

    // Simple email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return;
    }


    alert("Form submitted successfully!");
    // You can proceed with form submission or further processing here


    // If all validations pass, you can summarize the information

    // let s1 = `Username: ${username}\nPassword: ${password}\nEmail: ${email}\nGender: ${gender.value}\nCountry: ${country}\nDate of Birth: ${dob}\nHobbies: ${h_game ? "Game" : ""} ${h_travel ? "Travel" : ""} ${h_music ? "Music" : ""}`;
    // alert(s1);

    let s = `Summary of your information:\n;`
    s += `Username: ${username}\n`;
    s += `Password: ${password}\n`;
    s += `Email: ${email}\n`;
    s += `Gender: ${gender.value}\n`;
    s += `Country: ${country}\n`;
    s += `Date of Birth: ${dob}\n`;
    s += `Hobbies: ${h_game ? "Game" : ""} ${h_travel ? "Travel" : ""} ${h_music ? "Music" : ""}`;
    alert(s);


    // If all validations pass, you can submit the form
    // ev.target.submit();

}