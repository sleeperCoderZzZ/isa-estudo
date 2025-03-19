document.addEventListener("DOMContentLoaded", function(){

    const loginInput = document.getElementById("login");
    const senhaInput = document.getElementById("senha");
    const enviarBtn = document.getElementById("enviar");

    enviarBtn.addEventListener('click', function(event){
       event.preventDefault();

       const login = loginInput.value.trim();
       const senha = senhaInput.value.trim();

       if(login === ""|| senha===""){
        alert("Por favor, preencha todos os campos.");
        return;
       }

       // simulação de autentição

       if(login === "admin" && senha === "1234"){
        alert("login bem sucedido!");
       } else{
           alert("login ou senha incorretos!");
       }
    });
}); 