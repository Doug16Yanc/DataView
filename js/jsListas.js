// Selecionando elementos do DOM
const imgsContainer = document.querySelector('.container');
const btnAddInicio = document.querySelector('.addInicio');
const btnAddFim = document.querySelector('.addFim');
const btnAddMeio = document.querySelector('.addMeio');
const input = document.querySelector('.sectionSearch');
const valueInput = document.querySelector('.searchMovie')
const hiddenOpcoes = document.querySelector('.hiddenOpcoes');
const btnCancelAddMeio = document.querySelector('.cancelAddMeio');
const btnConfirmAddMeio = document.querySelector('.confirmAddMeio');
const description = document.querySelector('.desc');
const titleSelected = document.querySelector('.titleSelected');
const yearSelected = document.querySelector('.year');
const bgList = document.querySelector('.bgList');
const boxDesc = document.querySelector('.boxDesc');
const listBox = document.querySelector('.listBox');
const btnFechar = document.querySelector('.btnFechar');
const menuTitulos = document.querySelector('.menuTitulos');
const titleOpc = document.querySelector('.titleOpc')

// Definindo uma classe chamada AddImagesSlider
class AddImagesSlider
{
    // Construtor da classe com parâmetros imgList e imgName
    constructor(imgList, imgName)
    {
        this.imgName = imgName; // Atribuindo o nome da imagem
        this.imgList = imgList; // Atribuindo a lista de imagens
    }

    // Método para adicionar o caminho da imagem na lista
    addInList()
    {
        const pathFileImg = `../images/imgListas/${this.imgName}`; // Criando o caminho do arquivo da imagem
        this.imgList.push(pathFileImg); // Adicionando o caminho na lista
    }

    // Método para criar elementos de imagem no DOM
    createImageElement()
    {
        this.imgList.forEach(imgSrc =>
        {
            const img = document.createElement('img'); // Criando um elemento de imagem
            img.src = imgSrc; // Atribuindo o caminho da imagem ao atributo src
            img.classList.add('maxWidthSliders'); // Adicionando classe de estilo
            img.classList.add('slider'); // Adicionando classe de estilo
            imgsContainer.appendChild(img); // Adicionando a imagem ao contêiner no DOM
        });
    }
}

// Criando uma lista vazia chamada images
const images = [];

// Loop para criar instâncias da classe AddImagesSlider e adicionar à lista
for (let j = 0; j < 5; j++)
{
    const addImg = new AddImagesSlider(images, `icon-slide${j + 1}.png`);
    addImg.addInList();
}

// Criando uma instância final da classe AddImagesSlider sem nome de imagem e chamando o método para criar elementos no DOM
const final = new AddImagesSlider(images, '');
final.createImageElement();

// Função para animação de lista de imagens iniciais
const startSliderAnimation = () =>
{
    const images = document.querySelectorAll('.slider'); // Selecionando elementos do DOM com a classe 'slider'
    let currentIndex = 0;

    // Função para animar o slider de imagens de forma recursiva
    function animateSlider()
    {
        const currentImage = images[currentIndex]; // Obtendo a imagem atual

        setTimeout(() =>
        {
            currentImage.classList.add('focus'); // Adicionando classe de foco à imagem
            currentImage.classList.remove('maxWidthSliders'); // Removendo classe de estilo

            setTimeout(() =>
            {
                currentImage.classList.remove('focus'); // Removendo classe de foco
                currentImage.classList.add('maxWidthSliders'); // Adicionando classe de estilo de largura máxima

                currentIndex = (currentIndex + 1) % images.length; // Avançando para a próxima imagem ou reiniciando se atingir o final

                animateSlider(); // Chamando recursivamente para a próxima imagem
            }, 1500); // Tempo de espera antes da próxima animação
        }, 0); // Tempo de espera antes da primeira animação
    }

    animateSlider(); // Iniciando a animação do slider
}

startSliderAnimation(); // Chamando a função para iniciar a animação do slider

// Definindo uma lista de objetos chamada movies, onde cada objeto representa um filme com várias propriedades
const movies = [
        {
        id : 1,
        bg : '../images/imgListas/list/astra-bg.png',
        completeTitle: 'Ad Astra: Rumo às Estrelas',
        year : '(2019)',
        name : 'Ad Astra',
        pathFile: '../images/imgListas/list/Ad-Astra.png',
        desc : `
                    Este é outro título que você precisa assistir se é grande fã de ficção científica.
                    Ad Astra coloca Roy McBride(Brad Pitt) em uma viagem ao espaço para encontrar seu pai,
                    também astronauta.Os problemas começam a surgir quando ele descobre uma ameaça que pode
                    destruir a Terra e precisa correr contra o tempo para avisar todos em nosso planeta.
                `
    },
    {
        id: 2, bg: '../images/imgListas/list/akira-bg.png',
        completeTitle: 'Akira',
        year : '(1988)',
        name: 'Akira',
        pathFile: '../images/imgListas/list/Akira.png',
        desc : `
                    Akira é uma animação que engloba ficção científica, ação e drama com direção
                    e roteiro de Katsuhiro Ôtomo. Uma grande explosão fez com que Tóquio fosse destruída
                    em 1988. Em seu lugar foi construída Neo Tóquio, que, em 2019, sofre com atentados
                    terroristas por toda a cidade. Kaneda (Mitsuo Iwata) e Tetsuo (Nozomu Sasaki) são amigos
                    que integram uma gangue de motoqueiros. Eles disputam rachas violentos com uma gangue
                    rival, os Palhaços, até que um dia Tetsuo encontra Takashi (Tatsuhiko Nakamura),
                    uma estranha criança com poderes que fugiu do hospital onde era mantido como cobaia.
                    Tetsuo é ferido no encontro e antes de receber a ajuda dos amigos é levado por integrantes
                    do exército, liderados pelo coronel Shikishima (Tarô Ishida). A partir de então Tetsuo
                    passa a desenvolver poderes inimagináveis, o que faz com que seja comparado ao lendário
                    Akira, responsável pela explosão de 1988. Paralelamente, Kaneda se interessa por Kei
                    (Mami Koyama), uma garota envolvida com espiões que tenta decifrar o enigma por
                    trás das cobaias controladas pelo exército.
                `
    },
    {
        id : 3,
        bg : '../images/imgListas/list/alien-bg.png',
        completeTitle: 'Alien - O Oitavo Passageiro',
        year : '(1979)',
        name : 'Alien',
        pathFile: '../images/imgListas/list/Alien.png',
        desc : `
                    Uma nave espacial, ao retornar para Terra, recebe estranhos
                    sinais vindos de um asteróide. Ao investigarem o local, um
                    dos tripulantes é atacado por um estranho ser. O que parecia
                    ser um ataque isolado se transforma em um terror constante, pois
                    o tripulante atacado levou para dentro da nave o embrião de um
                    alienígena, que não para de crescer e tem como meta matar toda a tripulação.
                    Alien é um clássico da ficção científica dirigido por Ridley Scott
                    que ganhou sequências, crossovers e prequels. Sua cronologia é um
                    tanto confusa, mas pode ser organizada dessa forma:

                    Prometheus (2012), dirigido por Ridley Scott;
                    Alien: Covenant (2017), dirigido por Ridley Scott;
                    Alien, o Oitavo Passageiro (Alien, 1979), dirigido por Ridley Scott;
                    Aliens, O Resgate (Aliens, 1986), dirigido por James Cameron;
                    Alien 3 (1992), dirigido por David Fincher;
                    Alien – A Ressurreição (Alien: Resurrection, 1997), dirigido por Jean-Pierre Jeunet.
                    Fora dessa linha temporal estão os crossovers com o universo de O Predador.
                `
    },
    {
        id : 4,
        bg : '../images/imgListas/list/aniquilacao-bg.png',
        completeTitle: 'Aniquilação',
        year : '(2019)',
        name : 'Aniquilação',
        pathFile: '../images/imgListas/list/Aniquilacao.png',
        desc : `
                    Uma bióloga (Natalie Portman) se junta a uma expedição
                    secreta com outras três mulheres em uma região conhecida
                    como Área X, um local isolado da civilização onde as leis
                    da natureza não se aplicam. Lá, ela precisa lidar com uma
                    misteriosa contaminação, um animal mortal e ainda procurar
                    por pistas de colegas que desaparecem, incluindo seu marido
                    (Oscar Isaac). O longa conta ainda com Jennifer Jason Leigh,
                    Gina Rodriguez e Tessa Thompson no elenco, com direção de Alex Garland.
                `
    },
    {
        id : 5,
        bg : '../images/imgListas/list/arrival-bg.png',
        completeTitle: 'A chegada',
        year : '(2016)',
        name : 'Arrival',
        pathFile: '../images/imgListas/list/Arrival.png',
        desc : `
                    Quando seres interplanetários deixam marcas na Terra,
                    a Dra. Louise Banks (Amy Adams), uma linguista especialista
                    no assunto, é procurada por militares para traduzir os sinais
                    e desvendar se os alienígenas representam uma ameaça ou não.
                    No entanto, a resposta para todas as perguntas e mistérios
                    pode ameaçar a vida de Louise e a existência de toda a humanidade.
                    O elenco do longa conta ainda com nomes como Jeremy Renner e Forest
                    Whitaker, e a direção fica por conta de Denis Villeneuve.
                `
    },
    {
        id : 6,
        bg : '../images/imgListas/list/ASO-bg.png',
        completeTitle : '2001: Uma Odisséia no Espaço',
        year : '(1968)',
        name : '2001: UOE',
        pathFile: '../images/imgListas/list/ASO.png',
        desc : `
                    "2001" é uma história de evolução. Em algum momento no passado distante,
                    alguém ou algo incentivou a evolução ao colocar um monólito na Terra
                    (presumivelmente também em outro lugar do universo). A evolução permitiu
                    então que a humanidade alcançasse a superfície da Lua, onde foi encontrado
                    outro monólito, um que sinaliza aos placers de monólitos que a humanidade
                    evoluiu até aqui. Agora a humanidade, auxiliada pela inteligência artificial
                    (como HAL), deve ousar encontrar os colocadores de monólitos. Se for bem sucedido,
                    o próximo passo na evolução – seja ele qual for – será alcançado.—Larry Cousins
                `
    },
    {
        id : 7,
        bg : '../images/imgListas/list/AI-bg.png',
        completeTitle : 'A.I.: Inteligência Artificial',
        year : '(2001)',
        name: 'A.I',
        pathFile: '../images/imgListas/list/IA.png',
        desc: `
                Na metade do século XXI, o efeito estufa derreteu uma grande parte das calotas
                polares da Terra, fazendo com que boa parte das cidades litorâneas do planeta
                fiquem parcialmente submersas. Para controlar este desastre ambiental a humanidade
                conta com o auxílio de uma nova forma de computador independente, com inteligência
                artificial, conhecido como A.I. É neste contexto que vive o garoto David Swinton
                (Haley Joel Osment), que irá passar por uma jornada emocional inesquecível.
                O longa dramático tem direção de Steven Spielberg e roteiro assinado por Spielberg
                e Ian Watson. O elenco composto ainda por Jude Law, Frances O'Connor e Sam Robards.
            `
    },
    {
        id : 8,
        bg : '../images/imgListas/list/inception-bg.png',
        completeTitle : 'A Origem - Inception',
        year : '(2010)',
        name: 'Inception',
        pathFile: '../images/imgListas/list/Inception.png',
        desc : `
                    Com direção e roteiro de Christopher Nolan, A Origem mistura
                    suspense e ficção científica com uma pitada de ação em um longa
                    que não é para qualquer um. Em um mundo onde é possível entrar na
                    mente humana, Cobb (Leonardo DiCaprio) está entre os melhores na
                    arte de roubar segredos valiosos do inconsciente, durante o estado
                    de sono. Além disto ele é um fugitivo, pois está impedido de retornar
                    aos Estados Unidos devido à morte de Mal (Marion Cotillard). Desesperado
                    para rever seus filhos, Cobb aceita a ousada missão proposta por Saito
                    (Ken Watanabe), um empresário japonês: entrar na mente de Richard Fischer
                    (Cillian Murphy), o herdeiro de um império econômico, e plantar a ideia
                    de desmembrá-lo. Para realizar este feito ele conta com a ajuda do parceiro
                    Arthur (Joseph Gordon-Levitt), a inexperiente arquiteta de sonhos Ariadne
                    (Elliot Page) e Eames (Tom Hardy), que consegue se disfarçar de forma
                    precisa no mundo dos sonhos.
                `
    },
    {
        id : 9,
        bg : '../images/imgListas/list/TTT-bg.png',
        completeTitle : '13° Andar',
        year : '(1999)',
        name: '13° Andar',
        pathFile: '../images/imgListas/list/TTT.png',
        desc: `
                    O cientista da computação Hannon Fuller descobriu algo extremamente
                    importante. Ele está prestes a contar a descoberta ao seu colega
                    Douglas Hall, mas sabendo que alguém está atrás dele, o velho deixa
                    uma carta no mundo paralelo gerado por computador que sua empresa criou
                    (que parece os anos 30 com pessoas aparentemente reais com emoções reais).
                    Fuller é assassinado em nosso mundo real na mesma noite, e seu colega é suspeito.
                    Douglas descobre uma camisa ensanguentada em seu banheiro e não consegue se
                    lembrar do que estava fazendo na noite em que Fuller foi assassinado. Ele faz
                    login no sistema para encontrar a carta, mas precisa enfrentar o inesperado.
                    A verdade é mais dura do que ele jamais poderia imaginar...—Danny Rosenbluth
                `
    },
    {
        id : 10,
        bg : '../images/imgListas/list/blade-bg.png',
        completeTitle : 'Blade Runner - O caçador de androides',
        year : '(1982)',
        name : 'Blade Runner',
        pathFile : '../images/imgListas/list/blade.png',
        desc : `
                No início do século XXI, uma grande corporação desenvolve um robô que é mais 
                forte que o ser humano e se equiparando em inteligência. São conhecidos como
                replicantes e utilizados como escravos na colonização e exploração de outros 
                planetas. Mas, quando um grupo dos robôs mais evoluídos provoca um motim, 
                em uma colônia fora da Terra, este incidente faz os replicantes serem considerados 
                ilegais na Terra, sob pena de morte. Para tanto, policiais de um esquadrão de elite
                conhecido como Blade Runner, têm ordens para exterminar replicantes encontrados 
                dentro do planeta. O longa de ficção científica é dirigido por Ridley Scott e conta 
                com Rutger Hauer e Sean Young no elenco.
            `
    },
    {
        id : 11,
        bg : '../images/imgListas/list/robocop-bg.png',
        completeTitle : 'Robocop - O Policial do Futuro',
        year : '(1987)',
        name : 'Robocop',
        pathFile : '../images/imgListas/list/robocop.png',
        desc : `
                Depois de ter sido mortalmente ferido em cerco a marginais, 
                policial (Peter Weller) transformado num misto de máquina e 
                homem a serviço da justiça, quando tem que enfrentar uma gangue 
                disposta a dominar a cidade, sob a custódia legal de poderoso executivo.
                Robocop inclui temáticas como corrupção, ganância, privatização,
                distopia e gentrificação.
        
            `
    },
    {
        id : 12,
        bg : '../images/imgListas/list/machina-bg.png',
        completeTitle : 'Ex Machina - Instinto Artificial',
        year : '(2015)',
        name : 'Ex Machina',
        pathFile : '../images/imgListas/list/machina.png',
        desc : `
            Dirigido por Alex Garland, o suspense apresenta Caleb (Domhnall Gleeson), um jovem desenvolvedor
            de software que ganha um concurso na empresa onde trabalha para passar um final de semana na 
            casa de Nathan Bateman (Oscar Isaac), o recluso e extraordinário presidente da empresa, contudo, 
            tudo não passa de um teste que Caleb deve ser submetido com a última criação de Nathan, 
            Ava(Alicia Vikander), um robô com inteligência artificial.

            `
    },
    {
        id : 13,
        bg : '../images/imgListas/list/interestellar-bg.png',
        completeTitle : 'Interestelar',
        year : '(2013)',
        name : 'Interestelar',
        pathFile : '../images/imgListas/list/interestellar.png',
        desc : `
                O longa de Christopher Nolan apresenta uma terra inóspita onde todos os recursos 
                se esgotaram, desse modo, um grupo de astronautas recebe a missão de verificar 
                possíveis planetas para receberem a população mundial, perpetuando assim a espécie, 
                há diversas referências à teoria da relatividade de Einstein e os fenômenos dos 
                buracos negros. O filme conta com Matthew McConaughey, Anne Hathaway, Marlon Sanders, 
                Wes Bentley e Jessica Chastain. 

            `
    },
    {
        id : 14,
        bg : '../images/imgListas/list/wall-bg.png',
        completeTitle : 'Wall-e',
        year : '(2008)',
        name : 'Wall-e',
        pathFile : '../images/imgListas/list/wall.png',
        desc : `
                Wall-e (2008) é uma animação da Disney e da Pixar, de 97 minutos. Esse filme, cujo roteiro e direção 
                foram feitos por Andrew Stanton. O filme se inicia no ano de 2700, tendo como cenário principal o nosso 
                planeta, basicamente desabitado. Ele se apresenta como um grande depósito de lixo, no qual o personagem 
                principal do filme, Wall-e (Waste Allocation Load Lifters - Earth – Levantador de Carga para Alocação de 
                Lixo – Classe 'Terra'), trabalha para compactar e organizar todo esse entulho, sozinho, uma vez que 
                seus companheiros de profissão já se encontram estragados. Assim, ele e sua barata de estimação são 
                os únicos habitantes daquele planeta cinzento.Wall-e, assim como outros robôs, foram enviados para a 
                Terra pela empresa BNL para executar esse serviço. Enquanto isso, os seres humanos se protegem de toda 
                a toxidez de nosso planeta na estação espacial Axiom. O plano era que ficassem somente por cinco anos ali,
                esperando a conclusão de tal trabalho para retornarem ao nosso planeta; mas acabam ficando aproximadamente
                700 anos. Para verificar se a Terra já está habitável, a empresa envia robôs para lá, sendo um deles a Eva
                (Examinadora de Vegetação Alienígena), que se apaixonará pelo personagem principal (e vice-versa).
            `
    },
    {
        id : 15,
        bg : '../images/imgListas/list/elysium-bg.png',
        completeTitle : 'Elysium',
        year : '(2013)',
        name : 'Elysium',
        pathFile : '../images/imgListas/list/ely.png',
        desc : `
                No ano de 2159, existem duas classes de pessoas: os ricos e abastados, 
                que vivem numa estação espacial chamada Elysium, e o resto, que vive numa 
                Terra arruinada e superpopulosa. A Secretária Rhodes (Jodie Foster), uma 
                oficial durona do governo, fará de tudo para garantir que as leis anti-imigração 
                sejam obedecidas à risca, para preservar o luxuoso estilo de vida dos cidadãos de Elysium. 
                Isso não impedirá o povo da Terra de tentar entrar, de qualquer forma possível. 
                Quando o azarado Max (Matt Damon) é colocado contra a parede, ele concorda em participar
                numa assustadora missão que, se bem sucedida, não só salvará sua vida, mas pode trazer
                igualidade nestes mundos polarizados. O elenco conta com Matt Damon, Wagner Moura,
                Jodie Foster e Alice Braga.
            `
    },
    
    {
        id : 16,
        bg : '../images/imgListas/list/matrix-bg.png',
        completeTitle : 'The Matrix',
        year : '(1999)',
        name : 'The Matrix',
        pathFile : '../images/imgListas/list/matrix.png',
        desc : `
                Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador que 
                mora em um cubículo escuro é atormentado por sonhos estranhos nos quais encontra-se
                conectado por cabos contra sua própria vontade em um sistema composto por computadores
                futuristas. Por meio do encontro com os misteriosos Morpheus (Laurence Fishburne) e Trinity 
                (Carrie-Anne Moss), Thomas descobre que é, assim como outras pessoas, vítima da Matrix, um 
                super sistema inteligente e artificial que manipula a mente dos indivíduos e cria a ilusão de
                um mundo real enquanto usa os cérebros e corpos das pessoas para produzir energia. Morpheus, 
                entretanto, acredita que Thomas é Neo, o aguardado messias que será capaz de enfrentar a Matrix
                e conduzir de volta as pessoas à realidade e à liberdade. 
            `
    },
    {
        id : 17,
        bg : '../images/imgListas/list/gravity-bg.png',
        completeTitle : 'Gravidade',
        year : '(2013)',
        name : 'Gravidade',
        pathFile : '../images/imgListas/list/gravity.png',
        desc : `
                Matt Kowalski (George Clooney) é um astronauta experiente que está em missão de conserto 
                ao telescópio Hubble juntamente com a doutora Ryan Stone (Sandra Bullock). Ambos são 
                surpreendidos por uma chuva de destroços decorrente da destruição de um satélite por um 
                míssil russo, que faz com que sejam jogados no espaço sideral. Sem qualquer apoio da base 
                terrestre da NASA, eles precisam encontrar um meio de sobreviver em meio a um ambiente
                completamente inóspito para a vida humana.
            `
    },
    {
        id : 18,
        bg : '../images/imgListas/list/exterminator-bg.png',
        completeTitle : 'Schwarzenegger - O Exterminador do Futuro',
        year : '(1984)',
        name : 'O Exterminador',
        pathFile : '../images/imgListas/list/exterminator.png',
        desc : `
                Num futuro próximo, a guerra entre humanos e máquinas foi deflagrada. 
                Com a tecnologia a seu dispor, um plano inusitado é arquitetado pelas
                máquinas ao enviar para o passado um andróide (Arnold Schwarzenegger) 
                com a missão de matar a mãe (Linda Hamilton) daquele que viria a se 
                transformar num líder e seu pior inimigo. Contudo, os humanos também 
                conseguem enviar um representante (Michael Biehn) para proteger a mulher 
                e tentar garantir o futuro da humanidade.
            `
    },

    {
        id : 19,
        bg : '../images/imgListas/list/future-bg.png',
        completeTitle : 'De Volta para o Futuro',
        year : '(1985)',
        name : 'De Volta para o Futuro',
        pathFile : '../images/imgListas/list/future.png',
        desc : `
                Dirigida por  Robert Zemeckis e estrelada por Michael J. Fox e Christopher Lloyd. 
                O protagonista Marty McFly (Michael J. Fox) aciona acidentalmente uma máquina do
                tempo construída pelo cientista Doc Brown (Christopher Lloyd) em um Delorean,
                retornando aos anos 1950, onde conhece sua mãe antes do casamento com seu pai,
                que se apaixona por ele. Tal eventualidade colocaria em risco sua própria
                existência, pois seria pelos paradoxos de causalidade, isso o força a servir
                    de cupido entre seus pais.
            `
    }
]

// Seleciona o elemento HTML com a classe 'containerAvailable' usando o método querySelector
const containerAvailable = document.querySelector('.containerAvailable');

// Itera sobre cada filme na lista 'movies'
movies.forEach((movie) => {
    // Cria um novo elemento div para representar cada item do filme
    const itemBox = document.createElement('div');
    itemBox.classList.add('itemBox'); // Adiciona a classe 'itemBox' ao elemento div

    // Cria um elemento de imagem para exibir a capa do filme
    const img = document.createElement('img');
    img.classList.add('itemList', 'listAvailable'); // Adiciona classes 'itemList' e 'listAvailable' à imagem
    img.src = movie.pathFile; // Define o caminho da imagem com base na propriedade 'pathFile' do filme
    img.alt = 'img list'; // Define um texto alternativo para a imagem

    // Cria um elemento span para exibir o nome do filme
    const span = document.createElement('span');
    span.classList.add('name'); // Adiciona a classe 'name' ao elemento span
    span.textContent = movie.name; // Define o texto do span com base na propriedade 'name' do filme

    // Adiciona a imagem e o span ao elemento div 'itemBox'
    itemBox.appendChild(img);
    itemBox.appendChild(span);

    // Adiciona o elemento 'itemBox' ao elemento com a classe 'containerAvailable'
    containerAvailable.appendChild(itemBox);
});
// Classe Node representa um nó da lista encadeada
class Node
{
    constructor(data)
    {
        this.data = data; // Dados armazenados no nó
        this.next = null; // Referência para o próximo nó na lista
    }
}

// Classe LinkedList representa a lista encadeada
class LinkedList
{
    constructor() {
        this.head = null; // Referência para o primeiro nó na lista
        this.length = 0; // Contador para o tamanho da lista
    }

    // Método para inserir um novo nó no final da lista
    insertEnd(data)
    {
        const newNode = new Node(data);

        if (!this.head)
        {
            this.head = newNode;
        }
        else
        {
            let current = this.head;
            while (current.next)
            {
                current = current.next;
            }

            current.next = newNode;
        }

        this.length++; // Incrementa o tamanho da lista
    }

    // Método para inserir um novo nó no início da lista
    insertStart(data)
    {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Método para inserir um novo nó após um índice específico na lista
    insertAfter(index, newData)
    {
        const newNode = new Node(newData);

        let current = this.head;
        let currentIndex = 0;

        while (current)
        {
            if (currentIndex === index)
            {
                newNode.next = current.next;
                current.next = newNode;
                this.length++;
                return;
            }

            current = current.next;
            currentIndex++;
        }

        console.log(`Índice ${index} fora do intervalo.`);
    }

    // Método para imprimir os dados da lista encadeada
    print()
    {
        let current = this.head;
        while (current)
        {
            console.log(current.data);
            current = current.next;
        }
    }

    // Método para obter o tamanho da lista
    size()
    {
        return this.length;
    }

    // Método que executa uma função de callback para cada nó na lista
    forEach(callback)
    {
        let current = this.head;
        while (current)
        {
            callback(current);
            current = current.next;
        }
    }

    // Método para obter o dado em uma posição específica na lista
    getElementAt(position)
    {
        if (position < 0 || position >= this.length)
        {
            console.log("Posição inválida.");
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position)
        {
            current = current.next;
            index++;
        }

        return current.data;
    }
}

// Criando uma instância da classe LinkedList para representar a lista de usuários
const userList = new LinkedList();

// Função que cria dinamicamente elementos HTML para representar um usuário
const createDynamicElement = (imagePath) =>
{
    // Criando elementos HTML
    const spanElement = document.createElement('span');
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    spanElement.className = 'numb';

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    // Adicionando os elementos criados ao elemento div 'itemBox'
    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    // Adicionando o elemento div 'itemBox' a algum elemento com o ID 'listBox' no DOM
    listBox.appendChild(divElement);

    return divElement; // Retornando o elemento div criado para possível manipulação posterior
}

// Seleciona o primeiro elemento com a classe 'itemBox' no DOM
const itemBox = document.querySelector('.itemBox');

// Cria elementos HTML dinamicamente
const imgItemBoxElement = document.createElement('img');
const spanItemBoxElement = document.createElement('span');

let index; // Variável para armazenar um índice
const imgAddedName = []; // Lista para armazenar nomes de imagens adicionados
let tempImgAddedName; // Variável temporária para armazenar um nome de imagem

// Função para atualizar a lista no DOM com base nos dados da lista encadeada
const updateListBox = () =>
{
    listBox.innerHTML = '';
    userList.forEach((node) =>
    {
        listBox.appendChild(node.data);
    });
}

// Função para adicionar um elemento no início da lista
const AddInicioFunc = () =>
{
    const element = createDynamicElement(movies[index].pathFile);
    userList.insertStart(element);
    updateListBox();
}

// Função para adicionar um elemento no final da lista
const AddFimFunc = () =>
{
    const element = createDynamicElement(movies[index].pathFile);
    userList.insertEnd(element);
    updateListBox();
}

// Função para confirmar adição no meio da lista
const confirmAddMeio = () =>
{
    console.log(`Input: ${valueInput.value}`);

    btnConfirmAddMeio.addEventListener('click', () =>
    {
        if (valueInput.value !== '')
        {
            // Validar se valueInput.value é um número
            const indexToAdd = parseInt(valueInput.value);

            // Validar se o índice está dentro dos limites da lista
            if (!isNaN(indexToAdd) && indexToAdd >= 0 && indexToAdd <= userList.size())
            {
                const element = createDynamicElement(movies[index].pathFile);
                
                console.log(`Element: ${element.innerHTML}`);

                userList.insertAfter(indexToAdd, element);
                updateListBox();
                resetInputVisibility();

                valueInput.value = '';

                // Atualizar os índices após a adição
                updateIndices();
            } else {
                console.log('Índice inválido ou fora dos limites da lista.');
            }
        }
    });
}

// Função para adicionar um elemento no meio da lista (interação com usuário)
const AddMeioFunc = () =>
{
    if (!imgAddedName.includes(tempImgAddedName))
    {
        input.classList.toggle('hiddenInput');
        btnAddInicio.classList.toggle('hiddenInput');
        btnAddFim.classList.toggle('hiddenInput');
        btnAddMeio.classList.toggle('hiddenInput');
    }
    // Cancela a adição no meio da lista
    btnCancelAddMeio.addEventListener('click', () =>
    {
        resetInputVisibility();
        return;
    });

    updateListBox();
}

// Cria listener para adicionar no meio
btnAddMeio.addEventListener('click', () => AddMeioFunc());

// Função para atualizar os índices exibidos no DOM
const updateIndices = () =>
{
    document.querySelectorAll('.numb').forEach((el, idx) =>
    {
        el.textContent = idx;
    });
}

// Função para redefinir a visibilidade dos elementos de entrada
const resetInputVisibility = () =>
{
    input.classList.add('hiddenInput');
    btnAddInicio.classList.remove('hiddenInput');
    btnAddFim.classList.remove('hiddenInput');
    btnAddMeio.classList.remove('hiddenInput');
}

// Função para lidar com o clique em botões
const handleButtonClick = (actionType) =>
{
    // Verifica se a lista de filmes está definida e se o índice é válido
    if (movies && movies.length > index && movies[index])
    {
        // Verifica se o nome temporário já está na lista de nomes adicionados
        if (imgAddedName.includes(tempImgAddedName))
        {
            // console.log('Elemento já presente na lista!');
            // Mensagem para o usuário informando que o filme já está na lista
            titleOpc.textContent = 'Elemento já presente na lista!';
        }
        else
        {
            // Executa ação com base no tipo de ação passado como parâmetro
            switch (actionType)
            {
                case 'addInicio':
                    AddInicioFunc();
                    break;
                case 'addFim':
                    AddFimFunc();
                    break;
                case 'addMeio':
                    confirmAddMeio();
                    break;
                default:
                    console.error('Ação não reconhecida.');
                    return;
            }

            // Adiciona o nome do filme à lista de nomes adicionados
            imgAddedName.includes(movies[index].name) ? '' : imgAddedName.push(movies[index].name);

            // console.log('imgAddedName: ' + imgAddedName);
            // console.log('tempImgAddedName: ' + tempImgAddedName);
        }
    }
    else
    {
        console.error('Movies está indefinido ou movies[index] é undefined.');
    }

    // Imprime a lista encadeada no console
    console.log('Linked list: ');
    userList.print();

    // Imprime o tamanho da lista encadeada no console
    console.log("Size List: " + userList.size());

    // Ajusta os IDs dos elementos no DOM
    document.querySelectorAll('.itemBox').forEach((el, idx) =>
    {
        el.id = idx - 10;
    });

    // Atualiza os índices exibidos no DOM
    document.querySelectorAll('.numb').forEach((el, idx) =>
    {
        el.textContent = idx;
    });
}

// Adiciona um ouvinte de evento de clique ao botão 'Adicionar no Início'
btnAddInicio.addEventListener('click', () => handleButtonClick('addInicio'));
// Adiciona um ouvinte de evento de clique ao botão 'Adicionar no Fim'
btnAddFim.addEventListener('click', () => handleButtonClick('addFim'));
// Adiciona um ouvinte de evento de clique ao botão 'Confirmar'
btnConfirmAddMeio.addEventListener('click', () => handleButtonClick('addMeio'));

// Função para remover um filme da lista
const removeMovie = () =>
{
    // Adiciona um ouvinte de eventos de clique ao elemento com o ID 'listBox'
    listBox.addEventListener('click', (event) =>
    {
        // Verifica se o elemento clicado possui a classe 'btnRemove'
        if (event.target.classList.contains('btnRemove'))
        {
            // Encontra o elemento pai mais próximo com a classe 'itemBox'
            const itemBox = event.target.closest('.itemBox');

            // Inicializa variáveis para percorrer a lista encadeada
            let current = userList.head;
            let previous = null;
            let found = false;

            // Percorre a lista encadeada até encontrar o elemento correspondente ao itemBox
            while (current)
            {
                if (current.data === itemBox)
                {
                    found = true;
                    break;
                }

                previous = current;
                current = current.next;
            }

            // Se o elemento foi encontrado
            if (found)
            {
                // Obtém o nome do item a ser removido da lista de nomes adicionados
                const removedItemName = imgAddedName[index];

                // Encontra o índice do nome na lista de nomes adicionados e remove-o
                const indexToRemove = imgAddedName.indexOf(removedItemName);
                if (indexToRemove !== -1)
                {
                    imgAddedName.splice(indexToRemove, 1);
                    console.log('Elemento removido de imgAddedName:', removedItemName);
                }

                // Remove o elemento da lista encadeada
                if (previous)
                {
                    previous.next = current.next;
                }
                else
                {
                    userList.head = current.next;
                }

                // Remove o elemento do DOM
                itemBox.remove();
                console.log('Elemento removido:', itemBox);

                // Atualiza o tamanho da lista encadeada
                userList.length--;
            }
        }
    });
}
// Chama a função para remover filmes
removeMovie();


// Função para lidar com o submenu de opções para filmes disponíveis
const subMenu = () =>
{
    // Itera sobre todos os elementos com a classe 'listAvailable' no DOM
    document.querySelectorAll('.listAvailable').forEach((item, i) =>
    {
        // Adiciona um ouvinte de eventos de clique a cada elemento
        item.addEventListener('click', () =>
        {
            // Reinicia o texto padrão
            titleOpc.textContent = 'Onde deseja adicionar?';

            // Adiciona classes CSS para esconder opções e entrada de texto
            hiddenOpcoes.classList.add('translateHiddenOpcoes');
            input.classList.add('hiddenInput');

            // Remove classes CSS de ocultação dos botões de adição
            if (hiddenOpcoes.classList.contains('translateHiddenOpcoes'))
            {
                btnAddInicio.classList.remove('hiddenInput');
                btnAddFim.classList.remove('hiddenInput');
                btnAddMeio.classList.remove('hiddenInput');
            }

            // Obtém o índice do filme selecionado
            index = i;

            // Obtém os detalhes do filme
            const movie = movies[index];
            movie.id = index;

            tempImgAddedName = movie.name;

            // Exibe informações no console
            console.log('Nome do filme: ' + movie.name);
            console.log('ID: ' + movie.id);

            // Configura a imagem e o título do filme no submenu
            imgItemBoxElement.classList.add('itemList', 'listAvailable', 'imgAdd');
            imgItemBoxElement.src = movie.pathFile;

            spanItemBoxElement.classList.add('name');
            spanItemBoxElement.textContent = movie.completeTitle;

            // Adiciona elementos ao DOM
            itemBox.appendChild(imgItemBoxElement);
            itemBox.appendChild(spanItemBoxElement);
        });

        // Adiciona um ouvinte de eventos de clique ao botão de fechar
        btnFechar.addEventListener('click', () =>
        {
            // Alterna a classe CSS para ocultar o submenu
            hiddenOpcoes.classList.toggle('translateHiddenOpcoes');
            input.classList.add('hiddenInput');

            // Remove classes CSS de ocultação dos botões de adição
            btnAddInicio.classList.remove('hiddenInput');
            btnAddFim.classList.remove('hiddenInput');
            btnAddMeio.classList.remove('hiddenInput');

            // Reinicializa o índice
            index = 0;
        });
    });
}
// Chama a função para configurar o submenu
subMenu();

// Variável para armazenar o elemento selecionado
let selectedElement = null;

// Adiciona um ouvinte de evento de clique à listBox
listBox.addEventListener('click', (event) =>
{ 
    const subdomain = window.location.hostname.split('.')[0]; // Obtem a primeira parte do dominio da página
    const pathArray = window.location.pathname.split('/'); // Obtem o caminho da URL atual da página da web em que o script está sendo executado. 
    const repository = pathArray[1]; // Armazena o nome do repositório, que estar na segunda posição do array
    console.log(`pathArray: ${pathArray}`);
    console.log(`repository: ${repository}`);
    console.log(`subdomain: ${subdomain}`);

    // Verifica se o clique ocorreu em um elemento com a classe 'classUserList'
    if (event.target.classList.contains('classUserList'))
    {
        // Obtém o elemento pai mais próximo com a classe 'classUserList'
        const itemBox = event.target.closest('.classUserList');

        // Verifica se o item clicado é o mesmo que já estava selecionado
        if (itemBox === selectedElement)
        {
            // Remove a classe 'imgSelected' e redefine selectedElement como nulo
            itemBox.classList.remove('imgSelected');
            selectedElement = null;
        }
        else
        {
            // Remove a classe 'imgSelected' do elemento previamente selecionado (se houver)
            if (selectedElement)
            {
                selectedElement.classList.remove('imgSelected');
            }

            // Adiciona a classe 'imgSelected' ao elemento clicado e atualiza selectedElement
            itemBox.classList.add('imgSelected');
            selectedElement = itemBox;
        }

        if (subdomain === '127') // Caso esteja rodando localmente a primeira parte do dominio da página retornará 127
        {
            // Itera sobre os filmes para encontrar o correspondente ao item clicado                
            for (let i = 0; i < movies.length; i++)
            {
                let url = movies[i].pathFile;
                let itemBoxSrc = itemBox.src;
                let relativeItemBox = new URL(itemBoxSrc, window.location.origin).pathname;
                let relativeUrl = new URL(url, window.location.origin).pathname;
    
                // Verifica se a URL do filme corresponde à URL do item clicado
                if (relativeUrl === relativeItemBox) {
                    console.log(`itemBox.src: ${itemBoxSrc}`);
                    console.log(`url: ${url}`);
                    console.log(`RelativeItemBox: ${relativeItemBox}`)
                    console.log(`Relative url: ${relativeUrl}`);
                    // Atualiza os elementos na página com informações do filme
                    titleSelected.innerHTML = movies[i].completeTitle;
                    description.innerHTML = movies[i].desc;
                    yearSelected.innerHTML = movies[i].year;
                    bgList.src = movies[i].bg;
    
                    // Adiciona ou remove classes para animações
                    bgList.classList.toggle('bgListAnimation');
                    boxDesc.classList.toggle('animationBoxDesc');
    
                    console.log("Elemento clicado!");
                }
            }
        }
        else // Case o retorno seja diferente de 127 significa que o site estar rodando no GitHub pages
        {
            // Mesma função do trecho acima
            for (let i = 0; i < movies.length; i++)
            {
                let url = movies[i].pathFile;
                let itemBoxSrc = itemBox.src
                let relativeItemBox = new URL(itemBoxSrc, window.location.origin).pathname
                let relativeUrl = new URL(url, window.location.origin).pathname
    
                let convertURL = `/${repository + relativeUrl.toString()}`; // Obtem o nome do repositório para fazer o caminho correto dos arquivos
                let convertItemBox = relativeItemBox.toString();
    
                if (convertURL == convertItemBox)
                {
                    console.log(`convertURL: ${convertURL}`);
                    console.log(`convertItemBox: ${convertItemBox}`);
    
                    console.log(`itemBox.src: ${itemBoxSrc}`);
                    console.log(`url: ${url}`);
                    console.log(`RelativeItemBox: ${relativeItemBox}`)
                    console.log(`Relative url: ${relativeUrl}`);
                    console.log(`convertURL: ${convertURL}`);
                    console.log(`convertItemBox ${convertItemBox}`);

                    titleSelected.innerHTML = '';
                    description.innerHTML = '';
                    src = movies[i].bg;
    
                    titleSelected.innerHTML = movies[i].completeTitle;
                    
                    description.innerHTML = movies[i].desc
                    yearSelected.innerHTML = movies[i].year;
                    // console.log(bgList);
                    bgList.src = src;  
                    console.log("Elemento clicado!");
                    bgList.classList.toggle('bgListAnimation');
                    boxDesc.classList.toggle('animationBoxDesc');
                }
            }
        }
    }
});

// Função para manipular o clique no botão 'Ver Títulos' e na seta de navegação
const handleClick = () =>
{
    // Alterna entre as classes 'hiddenSideAvailable' e 'visibleSideAvailable' no menu de títulos
    menuTitulos.classList.toggle('hiddenSideAvailable');
    menuTitulos.classList.toggle('visibleSideAvailable');

    // Adiciona ou remove a classe 'backAllTranslateHiddenOpcoes' no menu de opções escondido
    if (menuTitulos.classList.contains('hiddenSideAvailable')) {
        hiddenOpcoes.classList.add('backAllTranslateHiddenOpcoes');
    } else {
        hiddenOpcoes.classList.remove('backAllTranslateHiddenOpcoes');
    }

    // Alterna entre as classes 'translateHiddenOpcoes1' e 'translateHiddenOpcoes2' no menu de opções escondido
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes1');
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes2');
};

// Adiciona um ouvinte de evento de clique ao botão 'Ver Títulos'
document.querySelector('.botaoVerTitulos').addEventListener('click', handleClick);
// Adiciona um ouvinte de evento de clique à seta de navegação
document.querySelector('.arrowImg').addEventListener('click', handleClick);