// Pega os dois containers vazios do armas.html
const containerCorpoACorpo = document.getElementById("lista-corpo-a-corpo");
const containerDistancia = document.getElementById("lista-distancia");

function mostrarArmas() {
    const armasCorpoACorpo = armas.filter(arma => arma.categoria === "corpo-a-corpo");
    const armasDistancia = armas.filter(arma => arma.categoria === "distancia");

    armasCorpoACorpo.forEach(arma => {
        const link = document.createElement("a");
        link.href = `builds.html?arma=${arma.slug}`;
        link.classList.add("card-arma");
        link.textContent = `${arma.nome_pt} (${arma.nome_en})`;
        containerCorpoACorpo.appendChild(link);
    });

    armasDistancia.forEach(arma => {
        const link = document.createElement("a");
        link.href = `builds.html?arma=${arma.slug}`;
        link.classList.add("card-arma");
        link.textContent = `${arma.nome_pt} (${arma.nome_en})`;
        containerDistancia.appendChild(link);
    });
}

mostrarArmas();
