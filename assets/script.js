const nomeInput = document.getElementById('nome');
const xpInput = document.getElementById('xp');
const botao = document.getElementById('btnEnviar');
const heroName = document.getElementById('heroName');
const xpLevel = document.getElementById('xp-level');

botao.addEventListener('click', function() {
    const nome = nomeInput.value; 
    const xp = parseInt(xpInput.value); 
    let level;

    if (isNaN(xp)) {
        alert("Por favor, insira um número válido para XP.");
        return; 
    }

    if (xp < 1000) {
        level = 'Ferro';
    } else if (xp <= 2000) {
        level = 'Bronze';
    } else if (xp <= 5000) {
        level = 'Prata';
    } else if (xp <= 7000) {
        level = 'Ouro';
    } else if (xp <= 8000) {
        level = 'Platina';
    } else if (xp <= 9000) {
        level = 'Ascendente';
    } else if (xp <= 10000) {
        level = 'Imortal';
    } else {
        level = 'Radiante';
    }

    heroName.textContent = nome;
    xpLevel.textContent = level;
});
