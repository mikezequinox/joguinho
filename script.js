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

function gerarMatriz(m){
    var matriz = []

    for(let i=0;i<m;i++)
    {
        matriz[i] = [0,0,0]
    }

    return matriz
}

function geraPosicaoAleatoria(min, max)
{
    var numero = 0

    do{
        numero = Math.floor(((Date.now() * Math.random() % (max + 1))))
    }while((numero < min) || (numero > max))
    
    return numero
}

console.log(geraPosicaoAleatoria(0,2) + 'linha')

console.log(geraPosicaoAleatoria(0,2) + 'coluna')