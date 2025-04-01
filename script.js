document.getElementById("mapa").addEventListener("click", (e) => {
    const tesouro = document.getElementById("tesouro");
    const distancia = Math.sqrt(
    Math.pow(e.clientX- tesouro.offsetLeft, 2) + Math.pow(e.clientY- tesouro.offsetTop, 2));
    
    if (distancia < 20) {
            alert("Voc achou o tesouro!");
        } else if (distancia < 50) {
            alert("Est muito quente!");
        } else {
            alert("Est frio... continue procurando!");
        }
});

const a = 'teste'