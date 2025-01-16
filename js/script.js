document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    document.getElementById("userName").textContent = name;

    alert(`Name: ${name}\nDate of Birth: ${dob}\nGender: ${gender}\nMessage: ${message}`);
});
