const data = localStorage.getItem('nomeAluno');
let container = document.querySelector('#alunoNome')
let nome_aluno = document.createElement('h3');
nome_aluno.innerHTML = `Aluno a ser editado:  ${data}`
nome_aluno.style.cssText =`
color: #fff
`
container.appendChild(nome_aluno)
let listaAlunos = []

async function Cancelar(event){
    event.preventDefault();
    localStorage.removeItem('nomeAluno')
    window.location.href = '../historico-cadastro/index.html';
}
async function Editar(event){
    event.preventDefault();
    
    var nomeAluno = document.getElementsByName('nomeAluno')[0].value;
    var materia = document.getElementsByName('materia')[0].value;
    var nota = document.getElementsByName('avParcial')[0].value;

    
    if (!nomeAluno || !materia || !nota){
        alert('Preencha todos os campos para continuar')
    }
    const store = localStorage.getItem('@aluno');
    listaAlunos.push(store)
    let new_listaalunos = []
    JSON.parse(store).forEach((item) => {
        if (item.nomeAluno !== data){
            let aluno = {
                "nomeAluno": item.nomeAluno,
                "materia": item.materia,
                "nota": item.nota
            }
            let aluno_edit = {
                "nomeAluno": nomeAluno,
                "materia": materia,
                "nota": nota
            }
            new_listaalunos.push(aluno)
            new_listaalunos.push(aluno_edit)
            listaAlunos.pop();
            localStorage.removeItem('@aluno');
        }if (item.nomeAluno != data) {
            localStorage.removeItem('@aluno');
            localStorage.setItem('@aluno',JSON.stringify(listaAlunos[0]));
        }
    });
    listaAlunos.push(new_listaalunos);
    localStorage.setItem('@aluno',JSON.stringify(listaAlunos[0]));
    alert('Edição Realizada com Sucesso!')
    localStorage.removeItem('nomeAluno')
    window.location.href = '../historico-cadastro/index.html';
}