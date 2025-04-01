const mapa = document.getElementById("mapa")
const linhaTesouro = geraPosicaoAleatoria(0,8)
const colunaTesouro = geraPosicaoAleatoria(0,8)

console.log(linhaTesouro, colunaTesouro)
for (let i = 0; i < 9; i++)
{
    for (let j = 0; j < 9; j++)
    {
        let celula = document.createElement("div")
        celula.classList.add("celula")
        celula.dataset.x = i
        celula.dataset.y = j
       
        mapa.appendChild(celula)
        
        celula.addEventListener('click', function() {
            if((celula.dataset.x == linhaTesouro) && (celula.dataset.y == colunaTesouro))
            {
                celula.style.background = "url('tesouro.jpg')";
                celula.style.backgroundSize = 'cover';
            }
            else
                celula.style.background = 'rgba(255, 0, 0, 0.7)'
        })
    }
}


function geraPosicaoAleatoria(min, max)
{
    var numero = 0

    do{
        numero = Math.floor(((Date.now() * Math.random() % (max + 1))))
    }while((numero < min) || (numero > max))
    
    return numero
}

