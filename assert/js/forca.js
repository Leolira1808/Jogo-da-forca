let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  (palavra001 = {
    nome: "CARUARU",
    categoria: "CIDADES",
  }),
  (palavra002 = {
    nome: "RECIFE",
    categoria: "CIDADES",
  }),
  (palavra003 = {
    nome: "OLINDA",
    categoria: "CIDADES",
  }),
  (palavra004 = {
    nome: "NATAL",
    categoria: "CIDADES",
  }),
  (palavra005 = {
    nome: "BELEM",
    categoria: "CIDADES",
  }),
  (palavra006 = {
    nome: "LONDRINA",
    categoria: "CIDADES",
  }),
  (palavra007 = {
    nome: "PELOTAS",
    categoria: "CIDADES",
  }),
  (palavra008 = {
    nome: "GRAMADO",
    categoria: "CIDADES",
  }),
  (palavra009 = {
    nome: "PARAUAPEBAS",
    categoria: "CIDADES",
  }),
  (palavra010 = {
    nome: "PORTO VELHO",
    categoria: "CIDADES",
  }),
  (palavra011 = {
    nome: "SÃO PAULO",
    categoria: "CIDADES",
  }),
  (palavra012 = {
    nome: "RIO DE JANEIRO",
    categoria: "CIDADES",
  }),
  (palavra013 = {
    nome: "BELO HORIZONTE",
    categoria: "CIDADES",
  }),
  (palavra014 = {
    nome: "CURITIBA",
    categoria: "CIDADES",
  }),
  (palavra015 = {
    nome: "NOVA YORK",
    categoria: "CIDADES",
  }),
  (palavra016 = {
    nome: "BOSTON",
    categoria: "CIDADES",
  }),
  (palavra017 = {
    nome: "CARACAS",
    categoria: "CIDADES",
  }),
  (palavra018 = {
    nome: "BUENOS AIRES",
    categoria: "CIDADES",
  }),
  (palavra019 = {
    nome: "HAVANA",
    categoria: "CIDADES",
  }),
  (palavra020 = {
    nome: "FORTALEZA",
    categoria: "CIDADES",
  }),
  (palavra021 = {
    nome: "BRASIL",
    categoria: "PAISES",
  }),
  (palavra022 = {
    nome: "CHILE",
    categoria: "PAISES",
  }),
  (palavra023 = {
    nome: "ARGENTINA",
    categoria: "PAISES",
  }),
  (palavra024 = {
    nome: "ESTADOS UNIDOS",
    categoria: "PAISES",
  }),
  (palavra025 = {
    nome: "BOLIVIA",
    categoria: "PAISES",
  }),
  (palavra026 = {
    nome: "ALEMANHA",
    categoria: "PAISES",
  }),
  (palavra027 = {
    nome: "REINO UNIDO",
    categoria: "PAISES",
  }),
  (palavra028 = {
    nome: "INGLATERRA",
    categoria: "PAISES",
  }),
  (palavra029 = {
    nome: "CHINA",
    categoria: "PAISES",
  }),
  (palavra030 = {
    nome: "JAPAO",
    categoria: "PAISES",
  }),
  (palavra031 = {
    nome: "ESPANHA",
    categoria: "PAISES",
  }),
  (palavra032 = {
    nome: "MEXICO",
    categoria: "PAISES",
  }),
  (palavra033 = {
    nome: "EQUADOR",
    categoria: "PAISES",
  }),
  (palavra034 = {
    nome: "AUSTRIA",
    categoria: "PAISES",
  }),
  (palavra035 = {
    nome: "BELGICA",
    categoria: "PAISES",
  }),
  (palavra036 = {
    nome: "IRLANDA",
    categoria: "PAISES",
  }),
  (palavra037 = {
    nome: "ISLANDIA",
    categoria: "PAISES",
  }),
  (palavra038 = {
    nome: "CATAR",
    categoria: "PAISES",
  }),
  (palavra039 = {
    nome: "INDIA",
    categoria: "PAISES",
  }),
  (palavra040 = {
    nome: "ISRAEL",
    categoria: "PAISES",
  }),
  (palavra041 = {
    nome: "PAPAGAIO",
    categoria: "ANIMAIS",
  }),
  (palavra042 = {
    nome: "GATO",
    categoria: "ANIMAIS",
  }),
  (palavra043 = {
    nome: "ELEFANTE",
    categoria: "ANIMAIS",
  }),
  (palavra044 = {
    nome: "MACACO",
    categoria: "ANIMAIS",
  }),
  (palavra045 = {
    nome: "PORCO",
    categoria: "ANIMAIS",
  }),
  (palavra046 = {
    nome: "VACA",
    categoria: "ANIMAIS",
  }),
  (palavra047 = {
    nome: "BUFALO",
    categoria: "ANIMAIS",
  }),
  (palavra048 = {
    nome: "GIRAFA",
    categoria: "ANIMAIS",
  }),
  (palavra049 = {
    nome: "PORCO ESPINHO",
    categoria: "ANIMAIS",
  }),
  (palavra050 = {
    nome: "CAVALO",
    categoria: "ANIMAIS",
  }),
  (palavra051 = {
    nome: "TIGRE",
    categoria: "ANIMAIS",
  }),
  (palavra052 = {
    nome: "RINOCERONTE",
    categoria: "ANIMAIS",
  }),
  (palavra053 = {
    nome: "HIPOPOTAMO",
    categoria: "ANIMAIS",
  }),
  (palavra054 = {
    nome: "JUMENTO",
    categoria: "ANIMAIS",
  }),
  (palavra055 = {
    nome: "BODE",
    categoria: "ANIMAIS",
  }),
  (palavra056 = {
    nome: "CARNEIRO",
    categoria: "ANIMAIS",
  }),
  (palavra057 = {
    nome: "COBRA",
    categoria: "ANIMAIS",
  }),
  (palavra058 = {
    nome: "CACHORRO",
    categoria: "ANIMAIS",
  }),
  (palavra059 = {
    nome: "CHIMPANZE",
    categoria: "ANIMAIS",
  }),
  (palavra060 = {
    nome: "BALEIA",
    categoria: "ANIMAIS",
  }),
  (palavra061 = {
    nome: "FLAMENGO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra62 = {
    nome: "PALMEIRAS",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra063 = {
    nome: "FLUMINENSE",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra064 = {
    nome: "BOTAFOGO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra065 = {
    nome: "VASCO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra066 = {
    nome: "SAO PAULO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra067 = {
    nome: "CORINTHIANS",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra068 = {
    nome: "SANTA CRUZ",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra069 = {
    nome: "NAUTICO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra070 = {
    nome: "SPORT",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra071 = {
    nome: "FIGUEIRENSE",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra072 = {
    nome: "AVAI",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra073 = {
    nome: "CHAPECOENSE",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra74 = {
    nome: "CRUZEIRO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra075 = {
    nome: "ATLETICO MG",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra076 = {
    nome: "ATLETICO PR",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra077 = {
    nome: "CORITIBA",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra078 = {
    nome: "INTERNACIONAL",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra079 = {
    nome: "GREMIO",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra080 = {
    nome: "JUVENTUDE",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra081 = {
    nome: "CUIABA",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra082 = {
    nome: "PONTE PRETA",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra083 = {
    nome: "GUARANI",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra084 = {
    nome: "LONDRINA",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra085 = {
    nome: "GOIAS",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra086 = {
    nome: "VILA NOVA",
    categoria: "TIMES - FUTEBOL",
  }),
  (palavra087 = {
    nome: "FACA",
    categoria: "OBJETO",
  }),
  (palavra88 = {
    nome: "GARFO",
    categoria: "OBJETO",
  }),
  (palavra089 = {
    nome: "COLHER",
    categoria: "OBJETO",
  }),
  (palavra090 = {
    nome: "SACA ROLHA",
    categoria: "OBJETO",
  }),
  (palavra091 = {
    nome: "SERROTE",
    categoria: "OBJETO",
  }),
  (palavra092 = {
    nome: "PRATO",
    categoria: "OBJETO",
  }),
  (palavra093 = {
    nome: "XICARA",
    categoria: "OBJETO",
  }),
  (palavra094 = {
    nome: "TESOURA",
    categoria: "OBJETO",
  }),
  (palavra095 = {
    nome: "MESA",
    categoria: "OBJETO",
  }),
  (palavra096 = {
    nome: "CADEIRA",
    categoria: "OBJETO",
  }),
  (palavra097 = {
    nome: "CAMA",
    categoria: "OBJETO",
  }),
  (palavra098 = {
    nome: "MESA",
    categoria: "OBJETO",
  }),
  (palavra090 = {
    nome: "COMODA",
    categoria: "OBJETO",
  }),
  (palavra100 = {
    nome: "SAPATO",
    categoria: "OBJETO",
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
