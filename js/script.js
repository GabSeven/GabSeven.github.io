async function getRepo(){
    try {
        const resposta = await fetch("https://api.github.com/repos/gabseven/gabseven.github.io");
        if (!resposta.ok) throw new Error("Erro: " +resposta.status);

        const repo = await resposta.json();

        const data = new Date(repo.pushed_at);
        const formatada = data.toLocaleDateString("pt-BR");

        document.querySelector("#repo-data").textContent = "Última atualização do Repositório: " + formatada;

    } catch (erro) {
        console.error("Falha ao buscar repo:", erro);
    }
    }

getRepo()

