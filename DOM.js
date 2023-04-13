const heading = document.getElementById("heading");
// IN YOUR JS FILE select the button and addEventListener that is 'click'

const hideButton = document.getElementById("hideButton");
hideButton.addEventListener("click", () => {
    // IN THIS CLICK FUNCTION select the h1 element again (or use the select from number 11) and set the style.display = "none"; to hide the h1
    heading.style.display = "none";
    // IN YOUR JS FILE select the H1 element and set the textContent = some text
});

const unhideButton = document.getElementById("unhideButton");
unhideButton.addEventListener("click", () => {
    // IN THIS CLICK FUNCTION select the h1 element again (or use the select from number 11) and set the style.display = "block"; to show the h1
    heading.style.display = "block";
    // IN YOUR JS FILE select the H1 element and set the textContent = some text
    heading.textContent = "SOME TEXT";
});

//////////////////////////////////////////////////////////////////////////

const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", () => {
    heading.style.color = '';
    heading.classList.toggle('change')
    heading.textContent = "POLITICS";
});

//////////////////////////////////////////////////////////////////////////

const freeButton = document.getElementById("freeButton");
const getRandomNumber = () => {
    return Math.floor(Math.random() * 255);
}
const getRandomColor = () => {
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}
freeButton.addEventListener('click', () => {
    heading.style.color = getRandomColor();
    heading.textContent = "FREEDOM";
})