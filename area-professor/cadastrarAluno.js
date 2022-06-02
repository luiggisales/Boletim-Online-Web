let listaAlunos = []

function Cadastrar(event){
    event.preventDefault();

    var nomeAluno = document.getElementsByName('nomeAluno')[0].value;
    var materia = document.getElementsByName('materia')[0].value;
    var nota = document.getElementsByName('avParcial')[0].value;
    if (nota >10){
        alert('Notas somente de 0 a 10');
    }else {
        let aluno = {
            "nomeAluno": nomeAluno,
            "materia": materia,
            "nota": nota
        }
        listaAlunos.push(aluno)
        var obj = JSON.parse(localStorage.getItem('@aluno'))
        if (obj === null){
            localStorage.setItem('@aluno',JSON.stringify([aluno]))   
        }else {
            localStorage.setItem(
                '@aluno',
                // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
                JSON.stringify([
                ...JSON.parse(localStorage.getItem('@aluno')),
                aluno
                ])
            );
        }
        alert('Nota cadastrada com sucesso');
        renderItem(aluno)
    }
    
}

function renderItem(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    let container = document.querySelector('#container_info');
    let nome = document.createElement('p');
    let materia = document.createElement('p');
    let nota = document.createElement('p');
    nome.innerHTML = `Nome: \t${item.nomeAluno}`;
    materia.innerHTML = `Materia \t${item.materia}`
    nota.innerHTML = `Nota: \t${item.nota}`

    nome.style.cssText = `
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 8px;
    padding: 1rem 1.5rem;
    border-radius: 8px 8px 0px 0px;
    max-height: 468px;
    box-shadow: 0px 4px 8px rgb(133, 130, 130);;`

    materia.style.cssText = `
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-height: 468px;
    box-shadow: 0px 4px 8px rgb(133, 130, 130);`

    nota.style.cssText = `
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 0px 0px 8px 8px;
    max-height: 468px;
    box-shadow: 0px 4px 8px rgb(133, 130, 130);
    margin-bottom: 12px;`

    container.appendChild(nome)
    container.appendChild(materia)
    container.appendChild(nota)
}

function getItems() {
    // Pegando o array do localstorage

    const items = JSON.parse(localStorage.getItem('@aluno'));
    // Para cada item do array, é renderizado no html
    items.forEach(item => {
        if (JSON.stringify(item).length > 0) {
            let menssagem = document.querySelector('#menssagem')
            menssagem.innerHTML = ''
        }else {
            let menssagem = document.querySelector('#menssagem')
            menssagem.innerHTML = 'Nenhuma item existente'
        }
        renderItem(item);
    });
}

getItems();
