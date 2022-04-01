function Login(event) {
    event.preventDefault(); // Cancela o evento se for cancelável, sem parar a propagação do mesmo.
    var matricula = document.getElementsByName('matricula')[0].value;
    var senha = document.getElementsByName('senha')[0].value;
  
    if (matricula == "202001" && senha == "1234") {
      alert("Dados corretos");
      window.location.href= "./area-estudante/index.html";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }
