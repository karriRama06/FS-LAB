const heading = document.getElementById("heading");

const message = document.getElementById("message");

const contentButton =
    document.getElementById("contentButton");

const styleButton =
    document.getElementById("styleButton");

const attributeButton =
    document.getElementById("attributeButton");


contentButton.addEventListener("click", function() {

    heading.textContent = "Welcome to DOM";

    message.textContent =
        "JavaScript has changed the content dynamically.";

});


styleButton.addEventListener("click", function() {

    message.style.color = "blue";

    message.style.fontSize = "24px";

    message.style.fontWeight = "bold";

    message.style.backgroundColor = "lightyellow";

});


attributeButton.addEventListener("click", function() {

    message.setAttribute(
        "title",
        "This paragraph was modified!"
    );

    message.setAttribute(
        "class",
        "updated"
    );

    message.textContent =
        "The attributes of this paragraph have been changed.";

});