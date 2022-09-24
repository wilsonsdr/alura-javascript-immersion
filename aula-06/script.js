let cartas = {
  carta01: {
    nome: "Luffy",
    imagem:
      "https://osantarritensedigital.com.br/hf-conteudo/uploads/posts/2021/04/3346_f1a7649da1517b9e317e948057d859cd.jpg",
    atributos: {
      ataque: 10,
      defesa: 10,
      inteligência: 4,
    },
  },
  carta02: {
    nome: "Zoro",
    imagem:
      "https://i.pinimg.com/originals/0d/a5/f7/0da5f7e5377fcf854ac6b4452e85aac9.jpg",
    atributos: {
      ataque: 9.5,
      defesa: 9.5,
      inteligência: 4,
    },
  },
  carta03: {
    nome: "Nami",
    imagem:
      "https://i.pinimg.com/originals/3e/30/91/3e309137d8fc82c475df8e2c9b399522.jpg",
    atributos: {
      ataque: 6,
      defesa: 4,
      inteligência: 9,
    },
  },
  carta04: {
    nome: "Usopp",
    imagem: "https://pbs.twimg.com/media/EbzXrc4WsAEJRUw.png",
    atributos: {
      ataque: 6,
      defesa: 4,
      inteligência: 7,
    },
  },
  carta05: {
    nome: "Sanji",
    imagem:
      "https://i.pinimg.com/originals/50/c7/eb/50c7eb22dd5a72f8319223760c8c023f.jpg",
    atributos: {
      ataque: 9,
      defesa: 9,
      inteligência: 8,
    },
  },
  carta06: {
    nome: "Chopper",
    imagem:
      "https://i.pinimg.com/736x/f5/32/bf/f532bfb46ab46dd352804e1e2fd5a0af.jpg",
    atributos: {
      ataque: 6,
      defesa: 8,
      inteligência: 5,
    },
  },
  carta07: {
    nome: "Robin",
    imagem: "https://pbs.twimg.com/media/EDubHsVXkAI3WBf.jpg",
    atributos: {
      ataque: 6.5,
      defesa: 5,
      inteligência: 10,
    },
  },
  carta08: {
    nome: "Franky",
    imagem:
      "https://i.pinimg.com/originals/34/4f/cf/344fcf2b43e37d1ac3f6aa29e30c2f6d.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      inteligência: 6,
    },
  },
  carta09: {
    nome: "Brook",
    imagem:
      "https://i.pinimg.com/736x/3b/39/3e/3b393e554a8a1ccd82d1af76ba2d8d06.jpg",
    atributos: {
      ataque: 7,
      defesa: 7,
      inteligência: 6,
    },
  },
  carta10: {
    nome: "Jinbei",
    imagem:
      "https://i.pinimg.com/736x/bf/b3/cd/bfb3cd9986eda57826c8b901fcb8b6fa.jpg",
    atributos: {
      ataque: 9,
      defesa: 9,
      inteligência: 9,
    },
  },
};

cartas = [
  cartas.carta01,
  cartas.carta02,
  cartas.carta03,
  cartas.carta04,
  cartas.carta05,
  cartas.carta06,
  cartas.carta07,
  cartas.carta08,
  cartas.carta09,
  cartas.carta10,
];

let cartaMaquina;
let cartaJogador;
let tentativas = 4;

function sortearCarta() {
  tentativas--;
  document.getElementById("escolha").innerHTML = "Escolha o seu atributo";
  document.getElementById(
    "btnSortear"
  ).innerHTML = `Sortear Carta (${tentativas})`;
  document.getElementById("btnSortear").style.background = "white";
  document.getElementById("btnSortear").style.color = "black";
  let numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  if (tentativas == 0) {
    document.getElementById(
      "btnSortear"
    ).innerHTML = `Acabaram suas tentativas`;
    document.getElementById("btnSortear").disabled = true;
  }

  cartaJogador = cartas[numeroCartaJogador];
  exibirOpcoes();
  exibirCarta("Jogador");
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `<input type="radio" id="ataque" name="atributo" value="${atributo}">` +
      atributo;
    `<input type="radio" name="atributo" value="${atributo}">` + atributo;
    `<input type="radio" name="atributo" value="${atributo}">` + atributo;
  }
  opcoes.innerHTML = opcoesTexto;

  let ataque = document.getElementById("ataque");
  ataque.checked = true;
}

function obterAtributo() {
  radioAtributos = document.getElementsByName("atributo");

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  document.getElementById("escolha").innerHTML =
    "E necessario sortear uma carta";
  document.getElementById("btnSortear").style.background = "#a90000";
  document.getElementById("btnSortear").style.color = "white";
  let atributoSelecionado = obterAtributo();
  let elementoResultado = document.getElementById("resultado");
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `<h3>Voce venceu! Worororo!</h3>`;
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = `<h3>Voce perdeu! Shishishi!</h3>`;
  } else elementoResultado.innerHTML = `<h3>Empatou! Shurororo!</h3>`;

  document.getElementById("escolha").innerHTML = "Escolha o seu atributo";
  document.getElementById("btnSortear").style.background = "white";
  document.getElementById("btnSortear").style.color = "black";

  exibirCarta("Maquina");
}

function exibirCarta(parametro) {
  if (parametro === "Jogador") {
    exibirCartaJogador();
  } else if (parametro === "Maquina") {
    exibirCartaMaquina();
  }
}

function exibirCartaJogador() {
  let divContainerJogador = document.getElementById("container-jogador");
  let divAtributoJogador = document.getElementById("atributo-jogador");

  divContainerJogador.innerHTML = ` <img class="carta" src="./img/cartaz.png" alt="cartaz">
  <img class="img1" src="${cartaJogador.imagem}" alt="">`;

  divAtributoJogador.innerHTML = `
  <span>Ataque <span class="ataque">${cartaJogador.atributos.ataque}</span></span>
  <span>Defesa <span class="defesa">${cartaJogador.atributos.defesa}</span> </span>
  <span>Inteligência <span>${cartaJogador.atributos.inteligência}</span></span>`;
}

function exibirCartaMaquina() {
  let divContainerMaquina = document.getElementById("container-maquina");
  let divAtributoMaquina = document.getElementById("atributo-maquina");

  divContainerMaquina.innerHTML = ` <img class="carta" src="./img/cartaz.png" alt="cartaz">
  <img class="img2" src="${cartaMaquina.imagem}" alt="">`;

  divAtributoMaquina.innerHTML = `
  <span>Ataque <span class="ataque">${cartaMaquina.atributos.ataque}</span></span>
  <span>Defesa <span class="defesa">${cartaMaquina.atributos.defesa}</span> </span>
  <span>Inteligência <span>${cartaMaquina.atributos.inteligência}</span></span>`;
}
