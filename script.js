const h1 = document.querySelector('h1');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    console.log(nome)
    if (!nome) return;
    h1.innerText = nome;
})