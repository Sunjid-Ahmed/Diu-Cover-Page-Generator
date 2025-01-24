let close = document.querySelector(".close");
let popup = document.querySelector(".popup-img");

document.querySelectorAll('.preview').forEach(previewBtn => {
    previewBtn.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.display = "block";
        let parentCard = this.closest('.image'); // Find the parent element with class 'image'
        let imgSrc = parentCard.querySelector("img").getAttribute("src"); // Get the src attribute of the image within the parent card
        popup.querySelector("img").src = imgSrc;
        console.log(imgSrc);
    });
});

close.addEventListener("click", close_func);

function close_func() {
    popup.style.display = "none";
}
