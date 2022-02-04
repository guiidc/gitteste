const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const p = document.querySelector('p')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    if (!nome) return;
    h1.innerText = nome;
})

const redButton = document.querySelector('#red').addEventListener('click', () => {
    p.style.color = 'red';
});
const greenButton = document.querySelector('#green').addEventListener('click', () => {
    p.style.color = 'green';
});
const blueButton = document.querySelector('#blue').addEventListener('click', () => {
    p.style.color = 'blue';
});