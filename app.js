const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;
const getRandomNumber = (max = 4) => {
    return Math.floor(Math.random() * max);
}
btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});
