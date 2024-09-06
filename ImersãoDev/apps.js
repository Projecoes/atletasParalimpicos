// Função que será chamada ao realizar a pesquisa
function pesquisar() {
    // Seleciona o elemento da página onde os resultados da pesquisa serão inseridos
    let section = document.getElementById("resultados-pesquisa");
    
    // Captura o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Formata o texto da pesquisa: primeira letra maiúscula, restante minúsculo
    campoPesquisa = campoPesquisa.charAt(0).toUpperCase() + campoPesquisa.slice(1).toLowerCase();
    
    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Sem informações</p>";
        return;
    }
    
    // Variável para armazenar os resultados em formato de string HTML
    let resultados = "";

    // Loop que percorre cada item da lista de dados (supondo que a variável 'dados' seja uma lista de objetos)
    for (let dado of dados) {
        
        // Verifica se o título do dado contém o termo de pesquisa (campoPesquisa)
        if(dado.titulo.includes(campoPesquisa) || dado.esporte.includes(campoPesquisa)){
            // Para cada item que corresponde à pesquisa, gera um bloco de HTML com o título, descrição e link
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo} 
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais informações</a> 
            </div>
            `;
        }

    }
    if(!resultados){
        resultados= "<p>Resultado não encontrado</p>"
    }

    // Insere os resultados gerados dentro da seção na página, substituindo qualquer conteúdo existente
    section.innerHTML = resultados;
}
