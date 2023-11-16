function mudarCorPagina() {
    var body = document.querySelector("body");
    var feminino = document.getElementById("feminino").checked;
    var masculino = document.getElementById("masculino").checked;
    var naoDeclarar = document.getElementById("naoDeclarar").checked;

    if (feminino) {
        body.style.backgroundColor = "pink";
    } else if (masculino) {
        body.style.backgroundColor = "#ADD8E6";
    } else if (naoDeclarar) {
        body.style.backgroundColor = "lightgray";
    }
}

function exibirImagem(estilo) {
    var imagemEstiloMusical = document.getElementById("imagemEstiloMusical");
    var imagemSelecionada = document.getElementById("imagemSelecionada");

    switch (estilo) {
        case 'pop':
            imagemSelecionada.src = "https://i.gifer.com/5rS4.gif";
            break;
        case 'rock':
            imagemSelecionada.src = "https://s2.glbimg.com/s8I4WAKvhjQa0YSVS4pp57f7vhk=/s.glbimg.com/jo/g1/f/original/2015/09/25/de_la_tierra_rock_in_rio_gif.gif";
            break;
        case 'mpb':
            imagemSelecionada.src = "https://media.tenor.com/4-tLHOwExwgAAAAC/cassia-eller-wilder.gif";
            break;
        case 'sertanejo':
            imagemSelecionada.src = "https://media.tenor.com/f3AEOWxh69gAAAAC/dan%C3%A7ando-gusttavo-lima.gif";
            break;
        case 'funk':
            imagemSelecionada.src = "https://3.bp.blogspot.com/-77Wyen9hIg8/Ubj6NENCClI/AAAAAAAAAPU/M5ZjS_mvU8g/s1600/tumblr_mmw5d0zRWl1rpfh24o1_500.gif"
            break;
        case 'pagode':
            imagemSelecionada.src = "https://media3.giphy.com/media/zLBvXfUpdMQFwxHk8G/giphy.gif?cid=ecf05e47nihz92o6u7s3g2han2jmy1deesxnd27jp7fxsufz&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            break;
        case 'eletronica':
            imagemSelecionada.src = "https://gifs.eco.br/wp-content/uploads/2022/09/gifs-de-musica-eletr-nica-1.gif"
            break;
        default:
                imagemEstiloMusical.style.display = 'none';
                return;
        }
    
        imagemEstiloMusical.style.display = 'block';
    }

    function verificarIdade() {

        var idade = parseInt(document.getElementById('idade').value);
        var resultadoElement = document.getElementById('resultado');
    
    
        if (idade >= 25) {
            resultadoElement.innerHTML = "Você é VELHO! <br> <img src='https://media.tenor.com/UBasbRmwPo8AAAAd/velho.gif'>";
        } else {
            resultadoElement.innerHTML = "Você é Jovem! <br> <img src= 'https://usagif.com/wp-content/uploads/acegif-funny-baby-86.gif'>";
        }
    }