function Enviar() {
        var nome = document.getElementById("nomeid");
        var cpf = document.getElementById("cpfid")
        var endereco = document.getElementById("enderecoid")
        var numero = document.getElementById("numeroid")
        var telefonecelular = document.getElementById("telefonecelularid");

        if (nome.value  && cpf.value  && endereco.value && numero.value && telefonecelular.value ){
           alert("Obrigado Sr(a) " + nome.value + "Os seus dados foram encaminhados com sucesso !");
        } 
}
