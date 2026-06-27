const builds = [{
    nome: "Build Endgame Fatalis",
    arma: "Espadão",
    rank: "Mestre",
    descricao: "Build de altíssimo dano, ideal para endgame."
}, 
{
    nome: "Build Iniciante",
    arma: "Arco",
    rank: "Baixo",
    descricao: "Build simples para começar a jogar com Arco."
},
{
    nome: "Build Endgame Dano Bruto",
    arma: "Lâmina Dínamo",
    rank: "Mestre",
    armadura: "Conjunto focado em Affinity e Sharpness",
    habilidades: ["Ataque Atribuído", "Olho Crítico", "Tampões de Ouvido"],
    descricao: "Build ofensiva priorizando dano por fiola e ataques carregados (SAED)",
}
];

const listaBuilds = document.querySelector('#lista-builds');
const campoBusca = document.querySelector('#busca');
const botoesRank = document.querySelectorAll('.btn-rank');

// Função que remove os acentos e deixa tudo el letras minúsculas
function normalizarTexto(texto) {
    return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"");
}

// Função tipo uma receita, ele recebe a lista e mostra os cards na tela
function mostrarBuilds(lista) {
    listaBuilds.innerHTML = ''; // limpa o que tava na tela

    // Se a lista estiver sem nada digitado vai mostrar um aviso aqui!
    if (lista.length === 0) {
        listaBuilds.innerHTML = '<p class="sem-resultados">Nenhuma build encontrada.</p>';
        return;
    }

    lista.forEach(function(build) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('rank-' + normalizarTexto(build.rank));

        card.innerHTML = `
            <h2>${build.nome}</h2>
            <p><strong>Arma:</strong> ${build.arma}</p>
            <span class="badge-rank">${build.rank}</span>
            <p>${build.descricao}</p>
            `;

            listaBuilds.appendChild(card);
    });
}

//... função mostrarBuilds termina aqui linha 59

// Lê o parâmetro "arma" da URL
const params = new URLSearchParams(window.location.search);
const armaSelecionada = params.get("arma");

if (armaSelecionada) {
    const armaEncontrada = armas.find(arma => arma.slug === armaSelecionada);
    const nomeDaArma = armaEncontrada.nome_pt;

    const buildsFiltradas = builds.filter(build => build.arma === nomeDaArma);
    mostrarBuilds(buildsFiltradas);
} else {
    mostrarBuilds(builds);
}

// É "visto" o que e digitado no campo de busca
campoBusca.addEventListener('input', function() {
    const textoDigitado = normalizarTexto(campoBusca.value);

    const buildsFiltradas = builds.filter(function(build) {
        const nomeArma = normalizarTexto(build.arma);
        return nomeArma.startsWith(textoDigitado);
    });

    mostrarBuilds(buildsFiltradas);
});

botoesRank.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const rankEscolhido = botao.dataset.rank;

        const buildsFiltradas = builds.filter(function(build) {
            if (rankEscolhido === 'todos') {
                return true;
            }
            return build.rank === rankEscolhido;
        });

        mostrarBuilds(buildsFiltradas);
    });
});