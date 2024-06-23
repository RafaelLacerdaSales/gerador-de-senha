let sliderElemento = document.getElementById('slider');
let buttonElemento = document.getElementById('button');
let tamanhoDaSenha = document.getElementById('valor');

let senha = document.getElementById('senha');
let containerSenha = document.getElementById('container-Senha');

let chavesSenha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#';
let novaSenha = '';

tamanhoDaSenha.innerHTML = sliderElemento.value;

slider.oninput = function(){
    tamanhoDaSenha.innerHTML = this.value;
}

function geradorDeSenha(){
    let pass = "";
    for(let i = 0, n = chavesSenha.length; i < sliderElemento.value; ++i){
      pass += chavesSenha.charAt(Math.floor(Math.random() * n));  
    }
    containerSenha.classList.remove('esconder');
    senha.innerHTML = pass;
    novaSenha = pass;
}
function copiarSenha(){
    alert("Senha copiada com sucesso!!!");
    navigator.clipboard.writeText(novaSenha);
}

