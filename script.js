function Login(event) {
  event.preventDefault(); // Cancela o evento se for cancelável, sem parar a propagação do mesmo.
  var matricula = document.getElementsByName('matricula')[0].value;
  var senha = document.getElementsByName('senha')[0].value;

  if (matricula == "" && senha == "" || matricula == null && senha == null) {
    alert("Dados corretos");
    window.location.href = "./area-estudante/index.html";
  } else {
    alert("Dados incorretos, tente novamente");
  }
}


function LoginProfessor(event) {
  event.preventDefault()
  var matricula_professor = document.getElementsByName('matricula_professor')[0].value;
  var senha = document.getElementsByName('senha')[0].value;

  if (matricula_professor == "" && senha == "" || matricula_professor == null && senha == null) {
    alert("Dados corretos");
    window.location.href = "../area-professor/index.html";
  } else {
    alert("Dados incorretos, tente novamente");
  }
}
