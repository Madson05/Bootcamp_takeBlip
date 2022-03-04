const ENTRADA = document.getElementById("myform");
const MINHA_CHECK = document.getElementById("lista");

function getTexto(){
    let texto = document.getElementById("texto");
    addBox(texto.value);
    ENTRADA.reset();
    
};

function addBox(tarefa){
    let novaDiv = document.createElement("div");
    let novaTarefa = document.createElement("input");
    let novaLabel = document.createElement("label");
    let descricaoTarefa = document.createTextNode(tarefa);

    novaTarefa.setAttribute("type", "checkbox");
    novaTarefa.setAttribute("name", tarefa);
    novaTarefa.setAttribute("id", tarefa);


    novaLabel.setAttribute("for", tarefa);
    novaLabel.appendChild(descricaoTarefa)


    novaDiv.classList.add("task-item");
    novaDiv.appendChild(novaTarefa);
    novaDiv.appendChild(descricaoTarefa);


    MINHA_CHECK.appendChild(novaDiv);


    
}
