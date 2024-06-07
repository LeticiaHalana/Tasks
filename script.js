const input = document.getElementById("input");
const add = document.getElementById("add");
const ul = document.getElementById("itens");
const lista_render = JSON.parse(localStorage.getItem("lista_salva")) ? JSON.parse(localStorage.getItem("lista_salva")) : ["Fazer as compras no supermercado", "Meditar durante 30 minutos"];

//função para adicionar 
function adicionarTarefas() {
    add.addEventListener("click", () => {
        lista_render.push(input.value);
        console.log(lista_render);
        renderizaTarefas(lista_render);
        localStorage.setItem("lista_salva", JSON.stringify(lista_render));
    })

}
adicionarTarefas();

///função para excluir 
function removeTarefas(id) {
    const h2 = document.querySelectorAll(".title_item");
    h2.forEach((e) => {
        if (e.id == id) {
            lista_render.splice(id, 1);
        }
    })
    renderizaTarefas(lista_render);
    localStorage.setItem("lista_salva", JSON.stringify(lista_render));
}

//função para renderizar sem valores
function semTarefasRender(lista) {
    ul.innerHTML = "";
    if (lista.length === 0) {
        ul.innerHTML = `
       <h3 class="title_sem_item">Without any task registered...</h3>
        
    `
    }
}

//função para renderizar valores existentes
function tarefasExistentesRender(lista) {
    ul.innerHTML = "";
    lista.forEach((e) => {

        ul.insertAdjacentHTML("afterbegin",
            `
           <li class="item">
                <h2 id="${lista.indexOf(e)}" class="title_item">${e}</h2> <button id="${lista.indexOf(e)}" class="excluir"></button>
            </li> 
            
        `);

    });
    adicionaClick();
}

//função condicional para renderizar
function renderizaTarefas(lista) {
    ul.innerHTML = "";

    if (lista.length == 0) {
        semTarefasRender(lista);
    } else {
        tarefasExistentesRender(lista);
    }
    adicionaClick();
}
renderizaTarefas(lista_render);


///Função para adicionar click em excluir
function adicionaClick() {
    const excluir = document.querySelectorAll(".excluir");
    excluir.forEach((e) => {
        return e.onclick = function () { removeTarefas(e.id) };
    })
}

///     MODO ESCURO         ///

const theme = document.querySelector(".theme");
const body = document.querySelector('body');
const title = document.querySelector(".title_logo")
let darkMode;


theme.addEventListener("click", themeChange);

function themeChange() {
    darkMode = !darkMode;
    body.classList.toggle("dark-mode-body");
    title.classList.toggle("dark-mode-title");
    theme.classList.toggle("dark-mode");
    localStorage.setItem("theme", darkMode);
}

function themePreferenceAnalysis() {
    darkMode = JSON.parse(localStorage.getItem("theme"));
    if (darkMode) {
        body.classList.add("dark-mode-body");
        title.classList.add("dark-mode-title");
        theme.classList.add("dark-mode");
    }
}
themePreferenceAnalysis();