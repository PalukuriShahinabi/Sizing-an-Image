let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let originalImageWidth = 200;

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function decrementButton() {
    if (originalImageWidth <= 100) {
        warningMessageElement.textContent = "Too Low!!!";
        warningMessageElement.style.fontWeight = "bold";
        warningMessageElement.style.color = "red";
    } else {
        warningMessageElement.textContent = "";
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function incrementButton() {
    if (originalImageWidth >= 300) {
        warningMessageElement.textContent = "Too High!!!";
        warningMessageElement.style.color = "red";
        warningMessageElement.style.fontWeight = "bold";
    } else {
        warningMessageElement.textContent = ""
        originalImageWidth = originalImageWidth + 5;
        let updatedImageWidth = originalImageWidth + "px";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function toResetButton() {
    warningMessageElement.textContent = "";
    originalImageWidth = 200;
    let updatedImageWidth = originalImageWidth + "px";
    imageWidthElement.textContent = updatedImageWidth;
    imageElement.style.width = updatedImageWidth;
}