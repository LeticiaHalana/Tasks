const input = document.getElementById("input");
const add = document.getElementById("add");
const ul = document.getElementById("itens");
const lista_render = ["Fazer as compras no supermercado", "Meditar durante 30 minutos"];


//função para renderizar sem valores

function semTarefasRender() {
    ul.innerHTML = `
       <h3 class="title_sem_item">Without any task registered...</h3>
        
    `
}

///função para renderizar valores existentes

function tarefasExistentesRender(lista) {
    lista.forEach((e) => {
        ul.insertAdjacentHTML("afterbegin",
            `
           <li class="item">
                <h2 class="title_item">${e}</h2> <button class="excluir">Excluir</button>
            </li> 
        `);
    });
}

//função condicional para renderizar

function renderizaTarefas(lista) {
    ul.innerHTML = "";
    if (lista.length == 0) {
        semTarefasRender();
    } else {
        tarefasExistentesRender(lista);
    }
}
renderizaTarefas(lista_render);
