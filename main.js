const ulAFazer = document.querySelector('.container_ul')
const ulTerminadas = document.querySelector('.container__terminadas')
const liTodas = document.querySelectorAll('li')
const inputs = document.querySelectorAll('.tarefas')
const selecionarSala = document.querySelector('button')
const ulSalas = document.querySelector('.salas')
const salaJones = document.querySelector('.salaJones')
const tituloSala = document.querySelector('#selecionar_salas')
const btnCanibal = document.querySelector('.canibal')
const todosOsBotoes = document.querySelectorAll('button')
const btnSamhain = document.querySelector('.samhain')
const btnFim = document.querySelector('.fim')
const starWars = document.querySelector('.Star_wars')
const tituloDaSalaAtual = document.querySelector('.titulo_atual')


selecionarSala.addEventListener('click', () => {
    ulSalas.classList.toggle('salas')
    if(selecionarSala.textContent == "Selecione a sala⭣"){
        selecionarSala.textContent = "Salas⭣ "
        tituloSala.classList.remove('activee')
        return
    }
    selecionarSala.textContent = "Selecione a sala⭣"
    tituloSala.classList.add('activee')
})


mostrarSalas(salaJones, "Jones", salaJones, "Conferir mural", "Cadeados fechados e resetados (0000)", "Porta trancada", "Cofre trancado", "Código morse escondido", "1 Papel e 1 caneta", '', '')
mostrarSalas(btnCanibal, "Canibal", btnCanibal,  "Resetar telefone", "Conferir três seringas", "DVD na maleta, conferir se a maleta está fechada corretamente", "Conferir chave da algema junto ao Kevin", "Cadeados fechados e resetados (0000)", "Conferir bubona", "1 Papel e 1 caneta", "Cortina fechada")
mostrarSalas(btnSamhain, "Samhain", btnSamhain, "Papéis guardados (corpo, osso, alçapão)", "Arame dentro do rato", "Rato no buraco do chão", "Chave no buraco lateral, com uma aranha na frente", "Cadeados fechados e resetados (0000)", "3 Papéis e 2 canetas", '','')
mostrarSalas(btnFim, "Fim", btnFim, "Verificar itens adicionais no Vazio", "Conferir quadros tortos", "Cadeados fechados e resetados (0000)", "Lanterna no chão da câmara secreta", "3 Papéis e 2 canetas", "Cortina fechada", '','')
mostrarSalas(starWars, "Star wars", starWars, "Retirar os tablets e carregar", "Desligar a tomada da nave", "Abrir todas as portas da cabine", "Cadeados fechados e resetados", "3 Papéis e 2 canetas", '', '','')

removerEadicionarTarefas(inputs)


function mostrarSalas(nomeDaSala, titulo, butaoDaTarefa, primeiraTarefa, segundaTarefa, terceiraTarefa, quartaTarefa, quintaTarefa, sextaTarefa, setimaTarefa, oitavaTarefa) {
    nomeDaSala.addEventListener('click', () => {
        tituloDaSalaAtual.innerHTML = `${titulo}`
        ulSalas.classList.add('salas')
        retirarBorda()
        butaoDaTarefa.classList.add('active')
        ulTerminadas.innerHTML = ""
        ulAFazer.innerHTML = ""
        listaTarefas =  ""
        if (primeiraTarefa !== '') {
            listaTarefas += `<label for="1"><li class="li_tarefas"> <input id="1" class="tarefasTerror" type="checkbox">${primeiraTarefa}</li></label>`;
        }
        if (segundaTarefa !== '') {
            listaTarefas += `<label for="2"><li class="li_tarefas"> <input id="2" class="tarefasTerror" type="checkbox">${segundaTarefa}</li></label>`;
        }
        if (terceiraTarefa !== '') {
            listaTarefas += `<label for="3"><li class="li_tarefas"> <input id="3" class="tarefasTerror" type="checkbox">${terceiraTarefa}</li></label>`;
        }
        if (quartaTarefa !== '') {
            listaTarefas += `<label for="4"><li class="li_tarefas"> <input id="4" class="tarefasTerror" type="checkbox">${quartaTarefa}</li></label>`;
        }
        if (quintaTarefa !== '') {
            listaTarefas += `<label for="5"><li class="li_tarefas"> <input id="5" class="tarefasTerror" type="checkbox">${quintaTarefa}</li></label>`;
        }
        if (sextaTarefa !== '') {
            listaTarefas += `<label for="6"><li class="li_tarefas"> <input id="6" class="tarefasTerror" type="checkbox">${sextaTarefa}</li></label>`;
        }
        if (setimaTarefa !== '') {
            listaTarefas += `<label for="7"><li class="li_tarefas"> <input id="7" class="tarefasTerror" type="checkbox">${setimaTarefa}</li></label>`;
        }
        if (oitavaTarefa !== '') {
            listaTarefas += `<label for="8"><li class="li_tarefas"> <input id="8" class="tarefasTerror" type="checkbox">${oitavaTarefa}</li></label>`;
        }

        ulAFazer.innerHTML = listaTarefas;
        const tarefasDeTerror = document.querySelectorAll('.tarefasTerror')
        removerEadicionarTarefas(tarefasDeTerror)

    })
}

function retirarBorda() {
    todosOsBotoes.forEach(element => {
        element.classList.remove('active')
    })
}

function removerEadicionarTarefas(e) {
    e.forEach(element => {
        element.addEventListener('change', (evento) => {
            if (element.checked) {
                const elemento = evento.target.parentElement.parentElement
                elemento.parentNode.removeChild(elemento)
                ulTerminadas.appendChild(elemento)
            } else {
                const elemento = evento.target.parentElement.parentElement
                elemento.parentNode.removeChild(elemento)
                ulAFazer.appendChild(elemento)
            
            }

        })

    })
}

