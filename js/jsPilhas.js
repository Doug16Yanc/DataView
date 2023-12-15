// Configurando varáveis referente ao DOM
const btnVerLivros = document.querySelector('.botaoVerLivros');
const hiddenMenuBooks = document.querySelector('.hiddenMenuBooks');
const closeMenu = document.querySelector('.close');
const contentHiddenMenu = document.querySelector('.contentHiddenMenu');
const bookContent = [...document.querySelectorAll('.bookContent')];
const btnClose = document.querySelector('.btnClose');
const divBooks = document.querySelector('.divBooks');
const btnRemove = document.querySelector('.btnRemove');

// Estrutura da lista de livros disponíveis
const listBooks =  [

    {
        id: 1,
        title: 'Neuromancer',
        completeTitle: 'Neuromancer',
        author : 'William Gibson',
        year: 1984,
        pages: 424,
        desc: `
                No futuro, existe a matrix. Uma espécie de alucinação coletiva digital 
                na qual a humanidade se conecta para, virtualmente, saber de tudo sobre tudo.
                Mas há uma elite que navega por essa grande rede de informação – os cowboys.
                Case era um deles, até o dia em que tentou ser mais esperto do que os seus patrões,
                que fritaram suas conexões com o ciberespaço, tornando-o um pária entre os seus iguais.
                Ele vaga pelos subúrbios de Tóquio, mais envolvido do que nunca em destruir a si próprio,
                até ser contatado por Molly, uma bela e perigosa mulher que, assim como ele, desconfia
                de tudo e de todos. Os dois acabam se envolvendo numa missão cheia de mistérios e perigos.
            `,
        pathFile : '../images/imgPilhas/books/livro1.png'
    },

    {
        id: 2,
        title: 'Periféricos',
        completeTitle: 'Periféricos',
        author : 'William Gibson',
        year: 2020,
        pages: 520,
        desc: `
                O que você faria se fosse testemunha de um assassinato ocorrido em uma realidade
                virtual que parece ser um resquício do futuro? Pois é exatamente diante desta
                situação que Flynne, uma azarada garota se vê ao substituir o irmão como segurança
                virtual em um misterioso jogo; e se tornar da noite pro dia a testemunha de um suposto
                crime. Situada em um mundo em que a impressão de itens em modo 3D são possíveis para
                serem utilizados como objetivos comuns do dia-a-dia, a jovem se vê diante de uma perigosa
                trama de intrigas, mentiras e suposições, onde o passado, o presente, o futuro e um suposto
                futuro, irão se entrelaçar dando vida a uma corrida contra o tempo onde a solução do que
                presenciou não parece ser a única e necessária preocupação de todos.
            `,
        pathFile : '../images/imgPilhas/books/livro2.png'
    },

    {
        id: 3,
        title: 'Ciberpunk',
        completeTitle: 'Cyberpunk — Registros Recuperados de Futuros Proibidos',
        author : 'William Gibson',
        year: 2019,
        pages: 304,
        desc: `
                As grandes corporações racharam o mundo em feudos opressivos e consumistas. Suas guerras
                sujas são travadas nos bastidores, mas seus efeitos ecoam na política, na Rede e nas ruas,
                onde as massas tentam sobreviver a mais um dia. Aqui párias, anarquistas, dândis, caçadores
                de recompensa, detetives, traficantes, gamers, hackers e chefes de família sabem que tecnologia
                e informação podem ser a diferença entre viver e morrer. Nascido na efervescência neon,
                eletrônica e glam dos anos 1980, o cyberpunk surgiu na literatura e expandiu sua influência infectando o cinema,
                a música, os games, as HQs e a moda, um espasmo de vigor e pessimismo que trazia um futuro diferente do prometido
                pela ficção científica em sua era dourada. Como um profeta apocalíptico, anunciava que o high tech, low life
                seria a tônica do nosso tecido social. Em Cyberpunk — Registros Recuperados de Futuros Proibidos, os organizadores
                Cirilo S. Lemos, que também participa com um conto, e Erick Santos Cardoso compilam dados das narrativas de Santiago
                Santos, Ricardo Santos, Daniel Grimoni, Michel Peres, Claudia Dugim, Carlos Contente, Rodrigo Silva do Ó,
                Marcelo A. Galvão, Marcel Breton, Karen Alvares, Alexey Dodsworth e Fábio Fernandes. São doze histórias que
                transitam entre o retrô e o pós-cyber, mostrando que, com transplantes, clonagens e uploads de memórias,
                o gênero pulsa mais vivo do que nunca.
            `,
        pathFile : '../images/imgPilhas/books/livro3.png'
    },

    {
        id: 4,
        title: 'Nenhum Acaso',
        completeTitle: 'Cyberpunk 2077 - Nenhum Acaso',
        author : 'Rafał Kosik',
        year: 2023,
        pages: 368,
        desc: `
                Ambientado no vibrante e perigoso mundo de Night City, Cyberpunk 2077: Nenhum Acaso
                é uma narrativa eletrizante que captura a essência do universo Cyberpunk. A trama é
                centrada em um assalto audacioso, mas, como muitas histórias dentro deste universo,
                é muito mais do que uma simples missão. A equipe, composta por personagens de
                diferentes origens e motivações, é o coração da história. Temos Zor, um mercenário
                enigmático com um passado que ele prefere manter escondido; Aya, uma ripperdoc habilidosa
                que se encontra em uma encruzilhada de dívidas e dilemas morais; Ron, um corpo que busca
                emoções fortes e se coloca constantemente em situações de risco; Milena, uma netrunner
                que aspira superar as limitações do corpo humano e se conectar com a vasta rede digital; e Borg,
                uma stripper que deseja deixar para trás sua vida tumultuada e encontrar um propósito maior.
            `,
        pathFile : '../images/imgPilhas/books/livro4.png'
    },

    {
        id: 5,
        title: 'Encarcerados',
        completeTitle : 'Encarcerados',
        author : 'John Scalzi',
        year: 2018,
        pages: 328,
        desc: `
                Um assassinato ocorre em um quarto de hotel em Washington. Junto à vítima está
                um homem banhado em seu sangue, que alega não ter sido responsável pelo crime.
                O caso logo se torna da alçada do FBI, pois envolve uma nova e especial classe de indivíduos. Os
                hadens são pessoas que, devido a uma síndrome, tiveram sua mente encarcerada em um organismo imóvel.
                Para viver em sociedade, eles transferem sua consciência para estruturas robóticas ou alugam o corpo
                de indivíduos saudáveis. A investigação desse assassinato leva agente Shane e sua parceira Vann não
                apenas a mergulhar no mundo dos hadens, mas a descobrir uma rede de interesses políticos e econômicos
                envolvendo sua cultura e seus veículos robóticos. Em mais um de seus best-sellers, John Scalzi, ganhador
                do prêmio Hugo, constrói um mundo futurista plausível e bem explicado. Encarcerados é uma mistura
                perfeita de ficção científica e romance policial, repleto de intrigas políticas e polêmicas sociais e tecnológicas.
            `,
        pathFile : '../images/imgPilhas/books/livro5.png'
    },

    {
        id: 6,
        title: 'Eu, Robô',
        completeTitle : 'Eu, Robô',
        author : 'Isaac Asimov',
        year: 2014,
        pages: 320,
        desc: `
                Um dos maiores clássicos da literatura de ficção científica, Eu, Robô, escrito pelo Bom Doutor,
                Isaac Asimov foi publicado originalmente em 1950. O livro serviu como base para o roteiro do filme
                homônimo, no qual Will Smith interpreta o protagonista, o detetive Del Spooner. Porém, a obra é
                bastante diferente da história apresentada nas telonas. Eu, Robô é um conjunto de nove contos que
                relatam a evolução dos autômatos através do tempo. É neste livro que são apresentadas as célebres
                Três Leis da Robótica: os princípios que regem o comportamento dos robôs e que mudaram definitivamente
                a percepção que se tem sobre eles na própria ciência. Eu, Robô inicia-se com uma entrevista com a Dra.
                Susan Calvin, uma psicóloga roboticista da U.S Robots & Mechanical. Ela é o fio condutor da obra,
                responsável por contar os relatos de seu trabalho e também da evolução dos autômatos. Algumas histórias
                são mais leves e emocionantes como Robbie, o robô baba, outras, como Razão, levam o leitor a refletir
                sobre religião e até sobre sua condição humana. A edição traz um posfácio escrito pelo
                próprio autor sobre sua história de amor com os robôs, tão comuns em sua obra.
            `,
        pathFile : '../images/imgPilhas/books/livro6.png'
    },

    {
        id: 7,
        title: 'Blade Runner',
        completeTitle : 'Blade Runner: Androides sonham com ovelhas elétricas?',
        author : 'Philip Kindred Dick',
        year: 2019,
        pages: 228,
        desc: `
                Inspiração para um dos maiores clássicos do cinema, dirigido por Ridley Scott, este romance é
                de autoria do prolífico e revolucionário Philip K. Dick, um dos maiores expoentes da contracultura
                na ficção científica durante as décadas de 60 e 70. Rick Deckard é um caçador de recompensas,
                vivendo em uma San Francisco decadente, coberta pela poeira radioativa que dizimou inúmeras
                espécies de animais e plantas. Um novo trabalho pode ser o ponto de virada para melhorar seu
                padrão de vida e realizar seu sonho de consumo: uma ovelha de verdade, para substituir a réplica
                elétrica que ele cria em casa. Para isso, Deckard precisa perseguir e aposentar seis androides
                que estão foragidos, se passando por humanos. Mas as convicções do detetive podem mudar quando
                percebe que a linha que separa o real do fabricado não é mais tão nítida quanto ele acreditava.
                Em Androides sonham com ovelhas elétricas?, título original deste livro, Philip K. Dick cria uma
                atmosfera sombria e perturbadora para contar uma história impressionante, e abordar questões
                filosóficas profundas sobre a natureza da vida, da religião, da tecnologia e da própria condição
                humana. Esta nova edição conta com capa ilustrada por Rafael Coutinho, com design de Giovanna Cianelli.
                A cena imaginada por Coutinho homenageia o filme e retoma o ar policial noir do romance,
                ao mesmo tempo em que explora a atmosfera de dúvida e segredos presente na obra de Dick
            `,
        pathFile : '../images/imgPilhas/books/livro7.png'
    },

    {
        id: 8,
        title: 'Sonhos Elétricos',
        completeTitle : 'Sonhos Elétricos',
        author : 'Philip Kindred Dick',
        year: 2020,
        pages: 248,
        desc: `
                Philip K. Dick publicou seus primeiros contos no início dos anos 1950, e neles já se notava a natureza
                inquietante de toda a sua obra. Ao questionar incessantemente o que está por trás das aparências e o que
                nos define como seres humanos, Dick sobrepôs realidades, subverteu o tempo, vislumbrou autômatos e mundos
                extraterrestres enquanto mergulhava a fundo na mente humana. Dessa perturbadora mistura nasceram
                textos incríveis e cheios complexidade, que há décadas vêm inspirando o universo do cinema e da tevê.
                Esta edição reúne os dez contos adaptados para a série de TV Electric Dreams, apresentados pelo
                roteirista de cada um dos episódios. Os textos abordam realidades paralelas e distópicas, a relação
                entre homens e máquinas além de outras temáticas ao gosto desse mestre da ficção científica.
                Um reflexo de sua maneira muito pessoal e desconfiada de ver o mundo.
            `,
        pathFile : '../images/imgPilhas/books/livro8.png'
    },

    {
        id: 9,
        title: 'Metrópolis',
        completeTitle : 'Metrópolis',
        author : 'Thea von Harbou',
        year: 2019,
        pages: 416,
        desc: `
                Na cidade futurística de Metrópolis, a população divide-se em dois andares. No primeiro,
                uma elite dominante desfruta dos prazeres da vida; no segundo, subterrâneo, os trabalhadores
                lutam para sobreviver. Quando Freder, o filho do Senhor da grande Metrópolis e habitante do
                primeiro andar, se apaixona por Maria, da cidade subterrânea, começa a conhecer melhor as
                condições às quais os trabalhadores são submetidos. Uma revolta começa a surgir entre
                os operários, e só o que faltava para uma revolução era uma líder. Quando ela surge,
                nada pode conter a fúria dos oprimidos. Este romance, criado por Thea von Harbou,
                foi publicado bem próximo a sua adaptação cinematográfica, em 1927. Além de ter escrito
                o romance, Thea também foi uma das roteiristas do filme. Ambos são um marco não só na
                ficção científica, por influenciarem a sua estética para sempre, mas na história do cinema.
                Esta edição, traduzida diretamente do alemão, conta com um posfácio de Marina Person,
                uma análise de Franz Rottensteiner, um texto de Anthony Burgess e uma reprodução do
                programa do filme para a ocasião de seu lançamento.
            `,
        pathFile : '../images/imgPilhas/books/livro9.png'
    },

    {
        id: 10,
        title: 'Snow Cash',
        completeTitle : 'Snow Cash',
        author : 'Neal Stephenson',
        year: 2022,
        pages: 552,
        desc: `
                Em um futuro distópico, os Estados Unidos como o conhecemos não existe mais.
                Após o colapso do governo, o país se dividiu em cidades-estado controladas por
                corporações privadas, mafiosos e mercenários de todo tipo. Para escapar desse mundo
                de caos, as pessoas passam a maior parte do tempo no Metaverso, uma realidade virtual
                onde vivem como avatares. Hiro Protagonist é hacker e trabalha para uma organização
                mafiosa como entregador de pizza, mas, no Metaverso, é um príncipe samurai. Quando
                surge um novo e misterioso vírus chamado Snow Crash, que ameaça tanto o mundo físico
                quanto o cibernético, Hiro parte em uma jornada virtual para encontrá-lo e destruí-lo.
                Publicado pela primeira vez no Brasil em 2008, Snow Crash foi eleito pela revista Time um dos cem melhores
                romances de língua inglesa. Retrato assustador de uma sociedade pós-moderna decadente, este
                livro irônico e ousado combina, a um só tempo, cenários improváveis e totalmente verossímeis.
            `,
        pathFile : '../images/imgPilhas/books/livro10.png'
    },

    {
        id: 11,
        title: 'Carbono alterado',
        completeTitle : 'Carbono alterado (Vol. 1)',
        author : 'Richard Morgan',
        year: 2017,
        pages: 490,
        desc: `
                No século XXV, a humanidade se expandiu por toda a galáxia, monitorada pelos olhos
                vigilantes da Organização das Nações Unidas. Apesar de divisões por etnia, religião
                e classe ainda existirem, os avanços tecnológicos serviram para redefinir o próprio
                conceito de vida. Trata-se de uma época em que a consciência de uma pessoa pode
                ser armazenada em um cartucho na base do cérebro e baixada para um novo corpo quando
                o atual parar de funcionar. A morte, agora, nada mais é que um contratempo inconveniente,
                uma falha no programa. Takeshi Kovacs, um ex-Emissário da ONU que nunca havia posto
                os pés na Terra, já morreu antes. Sua última morte, porém, causada após um serviço
                malsucedido, se revelou particularmente dolorosa. Agora em Bay City, a antiga São
                Francisco, Kovacs é trazido de volta à vida para solucionar o assassinato de um magnata - função
                imposta pela própria vítima. Mal sabe ele, porém, que esse jogo de gato e rato vai lançá-lo
                no centro de uma conspiração perversa até para os padrões de uma sociedade
                que trata a existência humana como um produto a ser comercializado.
                Para Kovacs, o projétil que o atingiu em cheio no peito foi só o começo.
                Carbono alterado é o primeiro volume da série.
            `,
        pathFile : '../images/imgPilhas/books/livro11.png'
    },

    {
        id: 12,
        title: 'Anjos partidos',
        completeTitle : 'Anjos partidos (Vol. 2 Carbono alterado)',
        author : 'Richard Morgan',
        year: 2018,
        pages: 490,
        desc: `
                O segundo livro da eletrizante saga de ficção científica que inspirou a série da
                Netflix Altered Carbon.Bem-vindos de volta ao admirável e brutal mundo novo do século XXV,
                no qual a política global não se limita à Terra e a morte é apenas um contratempo, graças
                ao milagre tecnológico que preserva a consciência humana e a baixa em corpos novos.
                Takeshi Kovacs ― ex-Emissário da ONU, cínico e rápido no gatilho ― trocou de profissões,
                e de corpo, mais uma vez. Agora contratado como mercenário, seu dever é ajudar um governo
                planetário a reprimir uma violenta revolução em uma terra distante.Kovacs, no entanto, não
                está de fato do lado de ninguém além do seu próprio. Então, quando um piloto desertor lhe
                faz uma oferta lucrativa, ele não hesita em abandonar o campo de batalha e embarcar em uma
                traiçoeira caça ao tesouro. Tudo o que o separa de seu objetivo, uma antiga nave alienígena,
                são uma cidade banhada em radiação, nanotecnologia assassina e quaisquer surpresas que a
                avançadíssima civilização marciana possa ter deixado para trás. Mas armado com seus
                instintos geneticamente modificados e suas armas duplas Kalashnikov,
                Kovacs está pronto para qualquer coisa que entrar em seu caminho.
            `,
        pathFile : '../images/imgPilhas/books/livro12.png'
    },

    {
        id: 13,
        title: 'Fúrias despertadas',
        completeTitle : 'Fúrias despertadas (Vol. 3 Carbono alterado)',
        author : 'Richard Morgan',
        year: 2019,
        pages: 588,
        desc: `
                Terceiro livro da série de ficção científica Altered Carbon da Netflix.Takeshi Kovacs
                voltou para casa. Duas vezes.As conquistas da revolução quellista foram perdidas.
                As Primeiras Famílias, as corporações e a Yakuza disputam para explorar até as fronteiras
                do Mundo de Harlan. E Kovacs retornou para obter vingança por seus sonhos assassinados.
                Assim como, dizem os boatos, Quellcrist Falconer...Murmúrios de uma segunda rebelião
                giram em um redemoinho de intriga política e nos recessos tecnológicos de uma Nova Hokkaido
                infestada por máquinas, fomentados por uma ânsia frágil pelo retorno de Quell dos mortos
                e pela liberdade do Mundo de Harlan. Entretanto, quando confrontadas pelo menor dos desafios,
                as Primeiras Famílias entram em ação, retirando do armazenamento um jovem emissário selvagem
                chamado Kovacs para erradicar a rebelião e esmagá-la... junto com outra encarnação dele mesmo,
                criminoso, esgotado e mais velho, que, acidentalmente, está no coração do levante.Apenas uma
                coisa é certa: alguém chamado Takeshi Kovacs vai ter que morrer. De uma vez por todas…
            `,
        pathFile : '../images/imgPilhas/books/livro13.png'
    },

    {
        id: 14,
        title: 'Reconhecimento de Padrões',
        completeTitle : 'Reconhecimento de Padrões (Trilogia Blue Ant Livro 1)',
        author : 'William Gibson',
        year: 2015,
        pages: 444,
        desc: `
                Cayce Pollard é uma coolhunter. Suas habilidades como caçadora de tendências, aliadas a um quê de
                profetisa e a uma inusitada alergia a marcas registradas, faz dela uma profissional disputada por
                corporações do mundo inteiro. Chamada a Londres para uma nova oportunidade de trabalho, Cayce recebe
                uma proposta ambiciosa e obscura: descobrir quem está por trás da criação e disseminação do "filme",
                uma coleção de fragmentos de vídeo postados anonimamente na web e que atraem milhares de seguidores,
                inclusive ela mesma. Pivô de um jogo perigoso, Cayce correrá todos os riscos para atingir seu objetivo,
                lançando-se numa busca frenética que envolve sabotadores industriais, hackers de primeira linha, chefes
                da máfia russa, fanboys da internet e espiões aposentados. Reconhecimento de Padrões é um retrato brilhante
                da cultura de consumo e de esoterismo pós-moderno. Com ele, William Gibson abre a Trilogia Blue Ant,
                um mosaico do século 21 que se desdobra nos livros Território Fantasma e História Zero.
            `,
        pathFile : '../images/imgPilhas/books/livro14.png'
    },

    {
        id: 15,
        title: 'Território fantasma',
        completeTitle : 'Território Fantasma (Trilogia Blue Ant Livro 2)',
        author : 'William Gibson',
        year: 2015,
        pages: 442,
        desc: `
                A trama gira em torno da perspectiva de alguns personagens. Hollis Henry, ex-vocalista de uma banda
                de rock nos anos 1990, tornou-se jornalista especializada em arte e tecnologia e está sempre com um
                olhar voltado para as novidades da cultura pop. Seu interesse pelo novo só é superado pelo de Hubertus Bigend,
                bilionário belga e dono da agência de publicidade Blue Ant, que a contrata para escrever uma matéria para a
                sua recém-criada revista Node. Esse trabalho, porém, levará Hollis do cenário artístico de Los Angeles
                ao submundo das tecnologias geoespaciais e seu uso secreto pelas forças armadas norte-americanas.
                Enquanto isso, em Nova York, Tito, um cubano-chinês pertencente a uma linhagem de "facilitadores ilegais", recebe uma missão de
                seus tios: entregar uma série de iPods a um homem cuja identidade é desconhecida, chamado simplesmente de "velho". Ambos são rastreados
                por Brown, agente de uma organização secreta, para quem Tito e o velho possuem informações que, se reveladas, podem expor o
                verdadeiro papel dos Estados Unidos na Guerra do Iraque. Nas entrelinhas de sua trama ágil, William
                Gibson lida com suas crescentes obsessões: as novas tecnologias e os diferentes usos que as pessoas dão
                a elas e os desejos, ambições e fraquezas da humanidade.
            `,
        pathFile : '../images/imgPilhas/books/livro15.png'
    },

    {
        id: 16,
        title: 'História zero',
        completeTitle : 'História Zero (Trilogia Blue Ant Livro 3)',
        author : 'William Gibson',
        year: 2015,
        pages: 544,
        desc: `
                "História Zero", assim como em "Reconhecimento de Padrões" e "Território Fantasma",
                explora o lado mais sombrio do marketing e o cenário conturbado do pós-11
                de setembro e da crise global de 2008. A nova meta do ambicioso
                Hubertus Bigend é controlar o fornecimento de uniformes militares
                nos Estados Unidos e se valer da crescente influência desse estilo
                no mercado mainstream. Para tanto, ele busca aliciar o criador anônimo de uma
                    obscura e desejada marca de roupas que virou febre entre consumidores do mundo inteiro.
                A ex-roqueira e jornalista Hollis Henry está praticamente falida. A contragosto, ela
                aceita a proposta do bilionário belga para rastrear e identificar o misterioso designer.
                Nessa missão, Hollis contará com a ajuda de Milgrim, um tradutor ex-viciado em drogas
                cuja drástica reabilitação fora bancada pelo próprio Bigend. Mas o trabalho de ambos
                chama a atenção de concorrentes indesejados, dando início a uma delirante perseguição
                que acaba envolvendo um agente do governo norte-americano, o intrépido
                namorado de Hollis e até mesmo o ex-baterista de sua antiga banda.
            `,
        pathFile : '../images/imgPilhas/books/livro16.png'
    },
]
// Declaração de uma array vazia chamada userStack
const userStack = [];

// Função para criar um item na lista de livros disponíveis
const createAvailableList = (bookSrc, bookName) => {
    // Cria um elemento <div> para representar o conteúdo do livro
    const divBookContent = document.createElement('div');
    divBookContent.classList.add('bookContent');

    // Cria uma imagem representando o menu do livro
    const imgBookMenu = document.createElement('img');
    imgBookMenu.classList.add('bookMenu', 'bookMenuHover');
    imgBookMenu.src = bookSrc;

    // Cria um parágrafo para exibir o título do livro (inicialmente oculto)
    const pTitleBook = document.createElement('p');
    pTitleBook.classList.add('titleBookHidden');
    pTitleBook.textContent = bookName;

    // Cria um botão "Adicionar" para o livro
    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('btnAdd');
    buttonAdd.textContent = 'Adicionar';

    // Adiciona os elementos criados à divBookContent
    divBookContent.appendChild(imgBookMenu);
    divBookContent.appendChild(pTitleBook);
    divBookContent.appendChild(buttonAdd);

    // Adiciona divBookContent ao elemento com ID contentHiddenMenu
    contentHiddenMenu.appendChild(divBookContent);
};

// Itera sobre a lista de livros (listBooks) e chama a função createAvailableList para cada livro
listBooks.forEach((book) => {
    createAvailableList(book.pathFile, book.title);
});

// Função para criar um elemento que representa um livro na prateleira do usuário
const createUserShelf = (srcBook, completeTitle, info, zIndex, id, authorName, yearBook, bookPages) => {
    // Cria um elemento <div> para representar o livro na prateleira do usuário
    const divBookUser = document.createElement('div');
    divBookUser.classList.add('bookUser');

    // Cria uma imagem do "olho" para visualizar informações do livro
    const imgEye = document.createElement('img');
    imgEye.classList.add('eye');
    imgEye.src = '../images/imgPilhas/eye1.png';
    imgEye.id = id;

    // Cria um contêiner para a imagem do livro
    const divImgBook = document.createElement('div');
    divImgBook.classList.add('imgBook', 'books');
    divImgBook.id = id;

    // Cria a imagem real do livro
    const imgBooks = document.createElement('img');
    imgBooks.classList.add('books', 'booksHover');
    imgBooks.src = srcBook;
    imgBooks.style.zIndex = zIndex;
    imgBooks.id = id;

    // Cria uma lista não ordenada para exibir informações do livro (inicialmente oculta)
    const ulInfo = document.createElement('ul');
    ulInfo.classList.add('ulListInfo', 'hiddenInfo');

    // Cria item da lista para exibir o autor do livro
    const liAutor = document.createElement('li');
    liAutor.classList.add('liAutor');
    liAutor.textContent = 'Autor:';

    // Cria um contêiner para o conteúdo do autor
    const divAutorContent = document.createElement('div');
    divAutorContent.classList.add('autorContent');
    divAutorContent.textContent = authorName;

    // Cria item da lista para exibir o ano do livro
    const liAno = document.createElement('li');
    liAno.classList.add('liAno');
    liAno.textContent = 'Ano:';

    // Cria um contêiner para o conteúdo do ano do livro
    const divAnoContent = document.createElement('div');
    divAnoContent.classList.add('anoContent');
    divAnoContent.textContent = yearBook;

    // Cria item da lista para exibir o número de páginas do livro
    const liPag = document.createElement('li');
    liPag.classList.add('liPag');
    liPag.textContent = 'Páginas:';

    // Cria um contêiner para o conteúdo do número de páginas do livro
    const divPageContent = document.createElement('div');
    divPageContent.classList.add('pageContent');
    divPageContent.textContent = bookPages;

    // Cria um título (<h2>) para o livro (inicialmente oculto)
    const h2Title = document.createElement('h2');
    h2Title.classList.add('titleBook', 'hiddenInfo');
    h2Title.textContent = completeTitle;
    h2Title.id = id;

    // Cria um parágrafo para exibir informações do livro (inicialmente oculto)
    const pTxtInfo = document.createElement('p');
    pTxtInfo.classList.add('txtInfo', 'hiddenInfo');
    pTxtInfo.textContent = info;
    pTxtInfo.id = id;

    // Cria um botão "Close" para fechar as informações do livro (inicialmente oculto)
    const btnClose = document.createElement('button');
    btnClose.classList.add('btnClose', 'hiddenInfo');
    btnClose.textContent = 'Close';
    btnClose.id = id;

    // Adiciona conteúdo aos elementos criados
    liAutor.appendChild(divAutorContent);
    liAno.appendChild(divAnoContent);
    liPag.appendChild(divPageContent);
    ulInfo.appendChild(liAutor);
    ulInfo.appendChild(liAno);
    ulInfo.appendChild(liPag);
    divImgBook.appendChild(imgBooks);
    divImgBook.appendChild(imgEye);
    divImgBook.appendChild(ulInfo);
    divBookUser.appendChild(divImgBook);
    divBookUser.appendChild(h2Title);
    divBookUser.appendChild(pTxtInfo);
    divBookUser.appendChild(btnClose);

    // Retorna o elemento criado
    return divBookUser;
}

// Configura a sobreposição (z-index) dos elementos na pilha do usuário
const configureOverlay = (element) => {
    // Atualiza o z-index de todos os elementos na pilha do usuário
    userStack.forEach((el, index) => {
        el.style.zIndex = index;
    });

    // Define o z-index do elemento fornecido para estar no topo da pilha
    element.style.zIndex = userStack.length - 1;
}

// Adiciona um elemento à pilha do usuário
const addBook = (stack, element) => {
    // Adiciona o elemento à parte superior da pilha
    stack.unshift(element);
}

// Remove o elemento no topo da pilha do usuário
const removeBook = (stack) => {
    // Remove o elemento no topo da pilha
    stack.shift();

    // Remove o primeiro filho do elemento contêiner (divBooks) se existir
    if (divBooks.firstChild) {
        divBooks.removeChild(divBooks.firstChild);
    }
};

// Define a visibilidade do botão de remoção com base na pilha do usuário
const visibilityBtnRemove = () => {
    // Verifica se há elementos na pilha do usuário
    if (userStack.length > 0) {
        // Remove a classe 'hiddenInfo' do botão de remoção se houver elementos na pilha
        btnRemove.classList.remove('hiddenInfo');
    } else {
        // Adiciona a classe 'hiddenInfo' ao botão de remoção se a pilha estiver vazia
        btnRemove.classList.add('hiddenInfo');
    }

    // Exibe a quantidade de elementos na pilha no console
    console.log(`userStack.length: ${userStack.length}`);
}
// Variável para controlar o zIndex
let zIndexCounter = 0;

// Seleciona todos os elementos com a classe 'bookMenu' e 'btnAdd'
const bookMenu = [...document.querySelectorAll('.bookMenu')];
const bntAdd = [...document.querySelectorAll('.btnAdd')];

// Conjunto para rastrear livros adicionados
const addedBooks = new Set();

// Array para controle adicional
let arrayControl = [];

// Adiciona um ouvinte de evento de clique para cada botão de adição
bntAdd.forEach((e, i) => {
    e.addEventListener('click', () => {
        // Verifica se o livro já foi adicionado
        const title = listBooks[i].title;
        if (addedBooks.has(title)) {
            console.log('Livro já adicionado.');
            addedBooks.forEach((e) => {
                console.log(`addedBooks: ${e}`);
            });
            return;
        }

        // Adiciona o livro à prateleira
        const element = createUserShelf(listBooks[i].pathFile, listBooks[i].completeTitle, listBooks[i].desc, zIndexCounter, zIndexCounter, listBooks[i].author, listBooks[i].year, listBooks[i].pages);
        addBook(userStack, element);
        divBooks.insertBefore(element, divBooks.firstChild);

        // Adiciona o título à lista de livros adicionados
        addedBooks.add(title);
        arrayControl.push(title);
        zIndexCounter++;

        // Seleciona os elementos recém-criados
        const bookUser = [...document.querySelectorAll('.bookUser')];
        const txtDesc = [...document.querySelectorAll('.txtInfo')];
        const titleBook = [...document.querySelectorAll('.bookUser .titleBook')];
        const btnCloseBook = [...document.querySelectorAll('.btnClose')];
        const imgBook = [...document.querySelectorAll('.imgBook')];
        const books = [...document.querySelectorAll('.books.booksHover')];
        const getUlInfo = [...document.querySelectorAll('.ulListInfo')];
        const eyeBook = [...document.querySelectorAll('.eye')];

        // Adiciona um ouvinte de evento de clique para cada ícone de olho
        eyeBook.forEach((e, i) => {
            e.addEventListener('click', () => {
                console.log(bookUser[i]);
                console.log(`Número do livro: ${i}`);
                for (let j = 0; j < books.length; j++) {
                    if (books[j].id === e.id) {
                        bookUser[j].classList.add('info');
                        titleBook[j].classList.remove('hiddenInfo');
                        txtDesc[j].classList.remove('hiddenInfo');
                        imgBook[j].classList.add('zoom');
                        books[j].classList.remove('booksHover');
                        btnCloseBook[j].classList.remove('hiddenInfo');
                        eyeBook[j].classList.add('hiddenInfo');
                        getUlInfo[j].classList.remove('hiddenInfo');
                        getUlInfo[j].classList.add('ulInfo');
                    }
                }
            });
        });

        // Atualiza a visibilidade do botão de remoção
        visibilityBtnRemove();

        // Adiciona um ouvinte de evento de clique para cada botão de fechar
        btnCloseBook.forEach((e, j) => {
            e.addEventListener('click', () => {
                bookUser[j].classList.remove('info');
                titleBook[j].classList.add('hiddenInfo');
                txtDesc[j].classList.add('hiddenInfo');
                imgBook[j].classList.remove('zoom');
                books[j].classList.add('booksHover');
                btnCloseBook[j].classList.add('hiddenInfo');
                eyeBook[j].classList.remove('hiddenInfo');
                getUlInfo[j].classList.add('hiddenInfo');
                getUlInfo[j].classList.remove('ulInfo');
            });
        });
    });
});
// Função para remover o último livro da prateleira
const removeLastBook = (stack) => {
    if (arrayControl.length > 0) {
        // Remove o último título do arrayControl
        const lastAddedTitle = arrayControl.pop();
        console.log(`lastAddedTitle: ${lastAddedTitle}`);

        // Remove o último livro da prateleira (DOM) e do conjunto addedBooks
        stack.pop();
        addedBooks.delete(lastAddedTitle);

        // Remove apenas o último livro do DOM, se necessário
        const lastAddedBookElement = divBooks.firstChild;
        if (lastAddedBookElement) {
            divBooks.removeChild(lastAddedBookElement);
        }

        // Atualiza a visibilidade do botão de remoção
        visibilityBtnRemove();
    }
};

// Adiciona um ouvinte de evento de clique para o botão de remoção
btnRemove.addEventListener('click', () => {
    removeLastBook(userStack);
});

// Adiciona um ouvinte de evento de clique para o botão 'Ver Livros'
btnVerLivros.addEventListener('click', () => { 
    hiddenMenuBooks.classList.toggle('hidden');
});

// Adiciona um ouvinte de evento de clique para o botão de fechar o menu
closeMenu.addEventListener('click', () => { 
    hiddenMenuBooks.classList.toggle('hidden');
});