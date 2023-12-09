class Fila {
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
        this.atualizarFila();
    }

    dequeue(element){
        if(this.isEmpty()){
            return "Underflow";
        }  const elementoRemovido = this.items.shift();
        this.atualizarFila();
        return elementoRemovido;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    front() {
        if (this.isEmpty()) {
            return "Sem elementos na fila";
        }
        return this.items[0];
    }

    atualizarFila() {
        const filaElement = document.getElementById("fila");
        filaElement.innerHTML = this.items.map(item => `<div class="itemBox"><span class="name">${item.ano}</span><img src="${item.imagem}" alt="img_queue" class="img_queue"><h2>${item.nome}</h2></div>`).join("");
    }
}
const filaHistoriaComputador = new Fila();
filaHistoriaComputador.enqueue({ ano: "5500\n a.C.", nome: "Ábaco", imagem: "../images/imgFilas/abaco-ruso.jpg" });
filaHistoriaComputador.enqueue({ ano: "1642", nome: "Máquina de Pascal", imagem: "../images/imgFilas/pascal.jpg" });
filaHistoriaComputador.enqueue({ano: "1837", nome: "Engenho analítico", imagem: "../images/imgFilas/engenho.jpg" });
filaHistoriaComputador.enqueue({ano: "1946", nome: "Colossus I", imagem: "../images/imgFilas/Colossus.jpg"});
filaHistoriaComputador.enqueue({ano: "1959", nome: "IBM 7030", imagem: "../images/imgFilas/stretch.jpg"});
filaHistoriaComputador.enqueue({ano: "1967", nome: "IBM 360/91", imagem: "../images/imgFilas/ibm360.jpg"});
/*filaHistoriaComputador.enqueue({ano: "1975", nome: "Altair 8080", imagem: "../images/imgFilas/altair8800.jpg"});
*/


const removerBtn = document.getElementById("removerBtn");
const adicionarBtn = document.getElementById("adicionarBtn");

removerBtn.addEventListener("click", function(){
    filaHistoriaComputador.removerElemento();
});

adicionarBtn.addEventListener("click", function(){
    filaHistoriaComputador.adicionarElemento();
});



function removerElemento() {
    const elementoRemovido = filaHistoriaComputador.dequeue();
    console.log("Elemento removido:", elementoRemovido);
}


function adicionarElemento() {
    const novoElemento = { ano: "Novo Ano", nome: "Novo Elemento", imagem: "URL da Imagem" };
    filaHistoriaComputador.enqueue(novoElemento);
}
