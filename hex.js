const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

const getRandomNumber = (max = 16) => {
    return Math.floor(Math.random() * max);
}

const getHexColor = () => {
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += hex[getRandomNumber()];
    }
    return result;
}

btn.addEventListener('click', () => {
    body.style.backgroundColor = getHexColor();
    color.innerHTML = getHexColor();
});
