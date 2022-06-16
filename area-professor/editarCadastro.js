function renderItem(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    let container = document.querySelector('#container_info');
    let nome = document.createElement('p');
    let materia = document.createElement('p');
    let nota = document.createElement('p');
    let buttonEdit = document.createElement('a');
    let buttonDelete = document.createElement('button');

    nome.innerHTML = `Nome: \t${item.nomeAluno}`;
    materia.innerHTML = `Materia: \t${item.materia}`
    nota.innerHTML = `Nota: \t${item.nota}`
    buttonDelete.innerHTML = 'Excluir'
    buttonEdit.innerHTML = 'Editar'
    buttonEdit.href = '../editar-aluno/index.html';

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

    buttonDelete.addEventListener("click",async function(){
        let new_listaalunos = []
        let nome_or  = nome.innerHTML
        const nome2 = nome_or.split('\t')//*Pega o nome da pessoa
        const data = await localStorage.getItem('@aluno')
        listaAlunos.push(data)
        JSON.parse(data).forEach((item)=>{
            if (item.nomeAluno !== nome2[1]){
                let aluno = {
                    "nomeAluno": item.nomeAluno,
                    "materia": item.materia,
                    "nota": item.nota
                }
                new_listaalunos.push(aluno)
                listaAlunos.pop();
            }
        })
        listaAlunos.push(new_listaalunos);
        localStorage.setItem('@aluno',JSON.stringify(listaAlunos[0]));
        renderItem(item)
        window.location = window.location
    })
    
    container.appendChild(nome)
    container.appendChild(materia)
    container.appendChild(nota)
    container.appendChild(buttonEdit)
    container.appendChild(buttonDelete)
}

function getItems() {
    // Pegando o array do localstorage

    const items = JSON.parse(localStorage.getItem('@aluno'))
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