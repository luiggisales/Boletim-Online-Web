const nome = localStorage.getItem('nomeAluno');
const materia_ = localStorage.getItem('materia');


let container = document.querySelector('#alunoNome')
let nome_aluno = document.createElement('h3');
nome_aluno.innerHTML = `Aluno a ser editado:  ${nome}`
nome_aluno.style.cssText =`
color: #fff
`
container.appendChild(nome_aluno)
let listaAlunos = []

async function Cancelar(event) {
    event.preventDefault();
    localStorage.removeItem('nomeAluno')
    window.location.href = '../historico-cadastro/index.html';
}
async function Editar(event) {
    event.preventDefault();
    let new_listaalunos = []
    var nomeAluno = document.getElementsByName('nomeAluno')[0].value;
    var materia = document.getElementsByName('materia')[0].value;
    var nota = document.getElementsByName('avParcial')[0].value;

    
    if (!nomeAluno || !materia || !nota){
        alert('Preencha todos os campos para continuar')
    }
    const store = await localStorage.getItem('@aluno');
    JSON.parse(store).forEach(async (item)=>{
        if (item.nomeAluno === nome && item.materia === materia_) {
           let aluno = {
            "nomeAluno": nomeAluno,
            "materia": materia,
            "nota": nota
           }
           new_listaalunos.pop()
           new_listaalunos.push(aluno)
           listaAlunos.pop();
           await localStorage.removeItem('@aluno')
        }else {
            let aluno = {
                "nomeAluno": item.nomeAluno,
                "materia": item.materia,
                "nota": item.nota
            }
            let aluno_new = {
                "nomeAluno": nomeAluno,
                "materia": materia,
                "nota": nota
            }
            new_listaalunos.pop()
            new_listaalunos.push(aluno,aluno_new)
            await localStorage.removeItem('@aluno')
        }
    })
    await localStorage.setItem('@aluno',[JSON.stringify([...new_listaalunos])]);
    window.location.href = '../historico-cadastro/index.html';
}