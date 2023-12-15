const removerBtn = document.querySelector('.removerBtn');
const adicionarBtn = document.querySelector('.adicionarBtn');

// Definição da classe Fila
class Fila {
    constructor(){
        this.items = [];
    }

    // Método para enfileirar um elemento
    enqueue(element){
        this.items.push(element);
        this.atualizarFila();
    }

    // Método para desenfileirar um elemento
    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        const elementoRemovido = this.items.shift();
        this.atualizarFila();
        return elementoRemovido;
    }

    // Método para verificar se a fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para obter o tamanho da fila
    size() {
        return this.items.length;
    }

    // Método para obter o elemento da frente da fila
    front() {
        if (this.isEmpty()) {
            return "Sem elementos na fila";
        }
        return this.items[0];
    }

    // Método para atualizar a exibição da fila na interface
    atualizarFila() {
        const filaElement = document.getElementById("fila");
        filaElement.innerHTML = this.items.map(item => `<div class="itemBox"><span class="name">${item.ano}</span><img src="${item.imagem}" alt="img_queue" class="img_queue"><h2>${item.nome}</h2></div>`).join("");
    }

    // Método para remover um elemento da fila
    removerElemento() {
        const elementoRemovido = this.dequeue();
        console.log("Elemento removido:", elementoRemovido);
    }

    // Método para adicionar um elemento à fila
    adicionarElemento(ano, nome, imagem) {
        const novoElemento = { ano, nome, imagem };
        this.enqueue(novoElemento);
    }
}

// Instância da fila de história do computador
const filaHistoriaComputador = new Fila();

// Enfileiramento inicial de alguns elementos
filaHistoriaComputador.enqueue({ ano: "5500\n a.C.", nome: "Ábaco", imagem: "../images/imgFilas/abaco-ruso.jpg" });
filaHistoriaComputador.enqueue({ ano: "1642", nome: "Máquina de Pascal", imagem: "../images/imgFilas/pascal.jpg" });
filaHistoriaComputador.enqueue({ano: "1837", nome: "Engenho analítico", imagem: "../images/imgFilas/engenho.jpg" });

// Adiciona um ouvinte de evento ao botão de remover
removerBtn.addEventListener("click", (event) => {
    filaHistoriaComputador.removerElemento();
});

// Inicializa o índice de adição e adiciona um ouvinte de evento ao botão de adicionar
let indiceAdicao = 0;
adicionarBtn.addEventListener("click", (event) => {
    const elementosParaAdicionar = [
        {ano: "1943", nome: "Colossus I", imagem: "../images/imgFilas/Colossus.jpg"},
        { ano: "1946", nome: "ENIAC", imagem: "../images/imgFilas/eniac.jpg" },
        { ano: "1959", nome: "IBM 7030", imagem: "../images/imgFilas/stretch.jpg" },
        { ano: "1967", nome: "IBM 360/91", imagem: "../images/imgFilas/ibm360.jpg" },
        { ano: "1975", nome: "Altair 8080", imagem: "../images/imgFilas/altair8800.jpg" },
        { ano: "1984", nome: "Macintosh", imagem: "../images/imgFilas/macintosh.jpg" },
        { ano: "1986", nome: "Deskpro 386", imagem: "../images/imgFilas/deskpro.jpg" },
        { ano: "2006", nome: "MacBook Pro", imagem: "../images/imgFilas/macbook.jpg" },
        { ano: "2011", nome: "ChromeBook", imagem: "../images/imgFilas/chrome.jpg" },
        { ano: "2016", nome: "Computador quântico", imagem: "../images/imgFilas/quantico.jpg" },
        { ano: "2017", nome: "Bio computador", imagem: "../images/imgFilas/bioinformatica.jpg" }
    ];

    // Adiciona elementos à fila de história do computador
    if (indiceAdicao < elementosParaAdicionar.length) {
        const elementoAtual = elementosParaAdicionar[indiceAdicao];
        filaHistoriaComputador.adicionarElemento(elementoAtual.ano, elementoAtual.nome, elementoAtual.imagem);
        indiceAdicao++;
    }
});