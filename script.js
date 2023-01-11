//Função que add Tarefa
function addTarefas(){
// Título da Tarefa
const tarefasTitle = document.querySelector('#tarefas-title').value;
if(tarefasTitle){
//clona template
const template = document.querySelector('.template') ;
const novasTarefas = template.cloneNode(true);
//adiciona título
novasTarefas.querySelector('.tarefas-title').textContent = tarefasTitle;
//remover as classes desnecessárias
novasTarefas.classList.remove('template');
novasTarefas.classList.remove('hide');
//add tarefa na lista
const listas = document.querySelector('#tarefas-lista');
listas.appendChild(novasTarefas);
//evento remover
const removerButton = novasTarefas.querySelector('.remover-button').addEventListener('click', function(){
    removerTarefas(this);
})
//evento completar tarefa
const feitoButton = novasTarefas.querySelector('.feito-button').addEventListener('click', function(){
    completarTarefas(this);
})
//limpar texto
document.querySelector('#tarefas-title').value = "";
}
}
//funcão remover tarefa
function removerTarefas(tarefas){
    tarefas.parentNode.remove(true);
}
//função de completar tarefas
function completarTarefas(tarefas){
    const tarefasCompletas = tarefas.parentNode;
    tarefasCompletas.classList.toggle('done');
}

//Evento que add tarefa
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function(even){
    even.preventDefault();
    addTarefas()
})