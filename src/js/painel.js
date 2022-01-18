const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens) {
        return;
    }

    switch (imagemAtual + 1) {
        case 0:
            document.getElementById("titulo-painel").innerHTML = "Desenvolvimento Web";
            console.log(imagemAtual);
            break;
        case 1:
            document.getElementById("titulo-painel").innerHTML = "Desenvolvimento JAVA";
            console.log(imagemAtual);
            break;
        case 2:
            document.getElementById("titulo-painel").innerHTML = "Linguagem MQL5 (Metatrader)";
            console.log(imagemAtual);
            break;
        case 3:
            document.getElementById("titulo-painel").innerHTML = "Wordpress e Elementor";
            console.log(imagemAtual);
            break;
        default:
            document.getElementById("titulo-painel").innerHTML = "Desenvolvimento Web";
    }

    imagemAtual++;

    esconderImagens();

    mostrarImagens();
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    switch (imagemAtual) {
        case 0:
            document.getElementById("titulo-painel").innerHTML = "Desenvolvimento Web";
            console.log(imagemAtual);
            break;
        case 1:
            document.getElementById("titulo-painel").innerHTML = "Desenvolvimento JAVA";
            console.log(imagemAtual);
            break;
        case 2:
            document.getElementById("titulo-painel").innerHTML = "Linguagem MQL5 (Metatrader)";
            console.log(imagemAtual);
            break;
        case 3:
            document.getElementById("titulo-painel").innerHTML = "Wordpress e Elementor";
            console.log(imagemAtual);
            break;
        default:
            document.getElementById("titulo-painel").innerHTML = "Desenvolvimento Web";
    }

    esconderImagens();

    mostrarImagens();
})
