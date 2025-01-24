let button = document.getElementById("btn");
let water = document.querySelector(".watermark");
let footer = document.querySelector("#footer");

button.addEventListener("click", function () {
    // Hide the print button

    button.style.display = "none";
    footer.style.display = "none";

    // Print the page
    window.print();

    // Show the print button
    button.style.display = "block";
    footer.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    var textareas = document.querySelectorAll("#experiment-name-field");

    textareas.forEach(function (textarea) {
        textarea.addEventListener("input", function () {
            autoExpand(this);
        });
    });

    function autoExpand(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }
});
