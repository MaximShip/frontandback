function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    }
}

function handleUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h2Element = document.querySelector("h2");
    if (h2Element) {
        h2Element.textContent = utmTerm ? utmTerm : h2Element.textContent;
    }
}

function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("ru-RU", { hour12: false });
    console.log(`Текущее время: ${timeString}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    resetBackgroundColor();
    changeBackgroundColor("red");
    toggleVisibility(".video backend-video");

    handleUtmTerm();
});
