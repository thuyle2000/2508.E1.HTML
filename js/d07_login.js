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