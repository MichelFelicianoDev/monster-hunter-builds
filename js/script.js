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

builds.forEach(function(build) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h2>${build.nome}</h2>
        <p><strong>Arma:</strong> ${build.arma}</p>
        <p><strong>Rank:</strong> ${build.rank}</p>
        <p>${build.descricao}</p>
        `;

        listaBuilds.appendChild(card);
});