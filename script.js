const mapa = document.getElementById("mapa");
const dicas = document.getElementById("dicas");
let tesouroX = Math.floor(Math.random() * 12);
let tesouroY = Math.floor(Math.random() * 12);

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        let celula = document.createElement("div");
        celula.classList.add("celula");
        celula.dataset.x = i;
        celula.dataset.y = j;
        celula.addEventListener("click", function () {
            let distancia = Math.abs(i - tesouroX) + Math.abs(j - tesouroY);
            if (distancia === 0) {
                this.style.background = "gold";
                dicas.innerText = "🏆 Você achou o tesouro! Parabéns!";
            } else if (distancia <= 2) {
                dicas.innerText = "🔥 Está muito quente! O tesouro está por perto!";
            } else if (distancia <= 4) {
                dicas.innerText = "🌡️ Está morno! Continue procurando!";
            } else {
                dicas.innerText = "❄️ Está frio... O tesouro está longe!";
            }
        });
        mapa.appendChild(celula);
    }
}
