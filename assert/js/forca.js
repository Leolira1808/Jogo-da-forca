let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  (palavra001 = {
    nome: "CARUARU",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra002 = {
    nome: "RECIFE",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra003 = {
    nome: "OLINDA",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra004 = {
    nome: "OROBO",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra005 = {
    nome: "BOM JARDIM",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra006 = {
    nome: "BELO JARDIM",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra007 = {
    nome: "SURUBIM",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra008 = {
    nome: "PAUDALHO",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra009 = {
    nome: "SAO VICENTE",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra010 = {
    nome: "PORTO VELHO",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra011 = {
    nome: "SAO PAULO",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra012 = {
    nome: "RIO DE JANEIRO",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra013 = {
    nome: "BELO HORIZONTE",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra014 = {
    nome: "CURITIBA",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra015 = {
    nome: "NOVA YORK",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra016 = {
    nome: "BOSTON",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra017 = {
    nome: "CARACAS",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra018 = {
    nome: "BUENOS AIRES",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra019 = {
    nome: "HAVANA",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra020 = {
    nome: "FORTALEZA",
    categoria: "LUGARES - CIDADES",
  }),
  (palavra021 = {
    nome: "BRASIL",
    categoria: "LUGARES - PAISES",
  }),
  (palavra022 = {
    nome: "CHILE",
    categoria: "LUGARES - PAISES",
  }),
  (palavra023 = {
    nome: "ARGENTINA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra024 = {
    nome: "ESTADOS UNIDOS",
    categoria: "LUGARES - PAISES",
  }),
  (palavra025 = {
    nome: "BOLIVIA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra026 = {
    nome: "ALEMANHA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra027 = {
    nome: "REINO UNIDO",
    categoria: "LUGARES - PAISES",
  }),
  (palavra028 = {
    nome: "INGLATERRA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra029 = {
    nome: "CHINA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra030 = {
    nome: "JAPAO",
    categoria: "LUGARES - PAISES",
  }),
  (palavra031 = {
    nome: "ESPANHA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra032 = {
    nome: "MEXICO",
    categoria: "LUGARES - PAISES",
  }),
  (palavra033 = {
    nome: "EQUADOR",
    categoria: "LUGARES - PAISES",
  }),
  (palavra034 = {
    nome: "AUSTRIA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra035 = {
    nome: "BELGICA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra036 = {
    nome: "IRLANDA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra037 = {
    nome: "ISLANDIA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra038 = {
    nome: "CATAR",
    categoria: "LUGARES - PAISES",
  }),
  (palavra039 = {
    nome: "INDIA",
    categoria: "LUGARES - PAISES",
  }),
  (palavra040 = {
    nome: "ISRAEL",
    categoria: "LUGARES - PAISES",
  }),
];

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
  console.log(palavraSecretaSorteada);
  console.log(palavraSecretaCategoria);
}

montarPalavranaTela();
function montarPalavranaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        listaDinamica[i] = "&nbsp";

        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    } else {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    }
  }
}

function verificaLetraEscolida(letra) {
  document.getElementById("tecla-" + letra).disabled = true; //para a tecla não poder ser clicada mais de uma vez!
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra, false);
    comparaListas(letra);
    montarPalavranaTela();
  }
}

function mudarStyleLetra(tecla, condicao) {
  if (condicao == false) {
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#ffffff";
  } else {
    document.getElementById(tecla).style.background = "#008000";
    document.getElementById(tecla).style.color = "#ffffff";
  }
}

function comparaListas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;

    carregaImagemForca(); // aparecer imagem

    if (tentativas == 0) {
      abreModal(
        "Ops!",
        "Não foi desta vez! ... A palavra secreta era <br>" +
          palavraSecretaSorteada
      );
      // verificar sem ainda tem alguma tentativa // mensagem
    }
  } else {
    mudarStyleLetra("tecla-" + letra, true);
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria == true) {
    abreModal("Parabens!!!!", "Você venceu....."); // mensagem na tela
    tentativas = 0;
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca06.png')";
      break;

    default:
      document.getElementById("imagem").style.background =
        "url('assert/img/forca.png')";
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});
