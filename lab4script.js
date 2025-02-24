
document.getElementById("alertButton").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Please enter a name.");
    }
});


let isBlue = true;
document.getElementById("colorButton").addEventListener("click", function() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
    isBlue = !isBlue;
});


document.getElementById("validateButton").addEventListener("click", function() {
    let text = document.getElementById("textTester").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Valid input.");
    }
});


document.getElementById("addTextButton").addEventListener("click", function() {
    let header = document.getElementById("header");
    header.textContent += " Add Text";
});
