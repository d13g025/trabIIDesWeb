function gerarSenha() {
    let digitos = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()_+';
    let quantidade = parseInt(document.getElementById('number').value);
    let senha = '';

    if(quantidade < 5){
        alert("Senha só pode ser gerada acima de 4 caracteres!")
    }else{
    for (let i = 1; i <= quantidade; i++) {
        let numRandomico = Math.floor(Math.random() * (73 - 5 + 1)) + 5;
        senha += digitos.charAt(numRandomico);
    }
    let resultado = senha;

    let divResult = document.getElementById('resultado');
    divResult.innerHTML = '';
    let paragrafo = document.createElement('p')

    paragrafo.textContent = senha;
    paragrafo.classList.add('senha-estilo-gerada'); //fiz para estilizar o paragrafo ao criá-lo
    divResult.appendChild(paragrafo);
}
}
