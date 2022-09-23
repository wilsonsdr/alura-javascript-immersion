let trucarDeCima = document.getElementById("trucarDeCima");
let aceitarDeCima = document.getElementById("aceitarDeCima");
let correrDeCima = document.getElementById("correrDeCima");
let trucarDeBaixo = document.getElementById("trucarDeBaixo");
let aceitarDeBaixo = document.getElementById("aceitarDeBaixo");
let correrDeBaixo = document.getElementById("correrDeBaixo");
let pontuacao = 0;
let vitoria = 0;
let derrota = 0;
let pontinho = 0;

let primeiraDupla = {
  vitorias: 0,
  derrotas: 0,
  pontos: 0,
};

let segundaDupla = {
  vitorias: 0,
  derrotas: 0,
  pontos: 0,
};

function pontosDeCima() {
  if (
    (trucarDeCima.textContent == "Trucar" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Trucar" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 3 + primeiraDupla.pontos;
  } else if (
    (trucarDeCima.textContent == "Pedir 6" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Pedir 6" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 6 + primeiraDupla.pontos;
  } else if (
    (trucarDeCima.textContent == "Pedir 9" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Pedir 9" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 9 + primeiraDupla.pontos;
  } else if (
    (trucarDeCima.textContent == "Pedir 12" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Pedir 12" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 12 + primeiraDupla.pontos;
  }

  if (pontuacao >= 12) {
    pontuacao = 0;
    vitoria++;
    derrota++;
    document.getElementById("vitoriaDeCima").innerHTML = vitoria;
    document.getElementById("derrotaDeBaixo").innerHTML = derrota;
    document.getElementById("pontuacaoDeCima").innerHTML = 0;
    document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
  }

  document.getElementById("pontuacaoDeCima").innerHTML = primeiraDupla.pontos =
    pontuacao;
  trucarDeCima.innerHTML = "Trucar";
  trucarDeCima.style.color = "#ffffff";
  trucarDeCima.style.backgroundColor = "green";
  trucarDeCima.style.pointerEvents = "initial";
  trucarDeBaixo.innerHTML = "Trucar";
  trucarDeBaixo.style.color = "#ffffff";
  trucarDeBaixo.style.backgroundColor = "green";
  trucarDeBaixo.style.pointerEvents = "initial";
  aceitarDeCima.style.color = "#555555";
  aceitarDeCima.style.backgroundColor = "#111111";
  aceitarDeCima.style.pointerEvents = "none";
  aceitarDeBaixo.style.color = "#555555";
  aceitarDeBaixo.style.backgroundColor = "#111111";
  aceitarDeBaixo.style.pointerEvents = "none";
  correrDeCima.style.color = "#555555";
  correrDeCima.style.backgroundColor = "#111111";
  correrDeCima.style.pointerEvents = "none";
  correrDeBaixo.style.color = "#555555";
  correrDeBaixo.style.backgroundColor = "#111111";
  correrDeBaixo.style.pointerEvents = "none";
}

function pontosDeBaixo() {
  if (
    (trucarDeCima.textContent == "Trucar" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Trucar" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 3 + segundaDupla.pontos;
  } else if (
    (trucarDeCima.textContent == "Pedir 6" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Pedir 6" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 6 + segundaDupla.pontos;
  } else if (
    (trucarDeCima.textContent == "Pedir 9" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Pedir 9" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 9 + segundaDupla.pontos;
  } else if (
    (trucarDeCima.textContent == "Pedir 12" &&
      aceitarDeBaixo.textContent == "Aceitar ") ||
    (trucarDeBaixo.textContent == "Pedir 12" &&
      aceitarDeCima.textContent == "Aceitar ")
  ) {
    pontuacao = 12 + segundaDupla.pontos;
  }

  if (pontuacao >= 12) {
    pontuacao = 0;
    derrota++;
    vitoria++;
    document.getElementById("vitoriaDeBaixo").innerHTML = vitoria;
    document.getElementById("derrotaDeCima").innerHTML = derrota;
    document.getElementById("pontuacaoDeCima").innerHTML = 0;
    document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
  }

  document.getElementById("pontuacaoDeBaixo").innerHTML = segundaDupla.pontos =
    pontuacao;
  trucarDeCima.innerHTML = "Trucar";
  trucarDeCima.style.color = "#ffffff";
  trucarDeCima.style.backgroundColor = "green";
  trucarDeCima.style.pointerEvents = "initial";
  trucarDeBaixo.innerHTML = "Trucar";
  trucarDeBaixo.style.color = "#ffffff";
  trucarDeBaixo.style.backgroundColor = "green";
  trucarDeBaixo.style.pointerEvents = "initial";
  aceitarDeCima.style.color = "#555555";
  aceitarDeCima.style.backgroundColor = "#111111";
  aceitarDeCima.style.pointerEvents = "none";
  aceitarDeBaixo.style.color = "#555555";
  aceitarDeBaixo.style.backgroundColor = "#111111";
  aceitarDeBaixo.style.pointerEvents = "none";
  correrDeCima.style.color = "#555555";
  correrDeCima.style.backgroundColor = "#111111";
  correrDeCima.style.pointerEvents = "none";
  correrDeBaixo.style.color = "#555555";
  correrDeBaixo.style.backgroundColor = "#111111";
  correrDeBaixo.style.pointerEvents = "none";
}

function trucarDeCimaFuncao() {
  if (trucarDeCima.textContent == "Trucar") {
    let adicaoEfeito = (aceitarDeBaixo.style.color = "white");
    aceitarDeBaixo.style.backgroundColor = "red";
    aceitarDeBaixo.style.pointerEvents = "initial";
    correrDeBaixo.style.color = "white";
    correrDeBaixo.style.backgroundColor = "#795548";
    correrDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.innerHTML = "Pedir 6";
  } else if (trucarDeCima.textContent == "Pedir 6") {
    let adicaoEfeito = (aceitarDeBaixo.style.color = "white");
    aceitarDeBaixo.style.backgroundColor = "red";
    aceitarDeBaixo.style.pointerEvents = "initial";
    correrDeBaixo.style.color = "white";
    correrDeBaixo.style.backgroundColor = "#795548";
    correrDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.style.backgroundColor = "green";
    trucarDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.style.color = "white";

    let remocaoEfeito = (aceitarDeCima.style.color = "#555555");
    aceitarDeCima.style.backgroundColor = "#111111";
    aceitarDeCima.style.pointerEvents = "none";
    correrDeCima.style.color = "#555555";
    correrDeCima.style.backgroundColor = "#111111";
    correrDeCima.style.pointerEvents = "none";
    trucarDeBaixo.innerHTML = "Pedir 9";
  } else if (trucarDeCima.textContent == "Pedir 9") {
    let adicaoEfeito = (aceitarDeBaixo.style.color = "white");
    aceitarDeBaixo.style.backgroundColor = "red";
    aceitarDeBaixo.style.pointerEvents = "initial";
    correrDeBaixo.style.color = "white";
    correrDeBaixo.style.backgroundColor = "#795548";
    correrDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.style.backgroundColor = "green";
    trucarDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.style.color = "white";

    let remocaoEfeito = (aceitarDeCima.style.color = "#555555");
    aceitarDeCima.style.backgroundColor = "#111111";
    aceitarDeCima.style.pointerEvents = "none";
    correrDeCima.style.color = "#555555";
    correrDeCima.style.backgroundColor = "#111111";
    correrDeCima.style.pointerEvents = "none";
    trucarDeBaixo.innerHTML = "Pedir 12";
  } else if (trucarDeCima.textContent == "Pedir 12") {
    let adicaoEfeito = (aceitarDeBaixo.style.color = "white");
    aceitarDeBaixo.style.backgroundColor = "red";
    aceitarDeBaixo.style.pointerEvents = "initial";
    correrDeBaixo.style.color = "white";
    correrDeBaixo.style.backgroundColor = "#795548";
    correrDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.style.backgroundColor = "green";
    trucarDeBaixo.style.pointerEvents = "initial";
    trucarDeBaixo.style.color = "white";

    let remocaoEfeito = (aceitarDeCima.style.color = "#555555");
    aceitarDeCima.style.backgroundColor = "#111111";
    aceitarDeCima.style.pointerEvents = "none";
    correrDeCima.style.color = "#555555";
    correrDeCima.style.backgroundColor = "#111111";
    correrDeCima.style.pointerEvents = "none";
    trucarDeBaixo.style.backgroundColor = "#111111";
    trucarDeBaixo.style.pointerEvents = "none";
    trucarDeBaixo.style.color = "#555555";
    trucarDeBaixo.innerHTML = "Pedir 12";
  }
}

function trucarDeBaixoFuncao() {
  if (trucarDeBaixo.textContent == "Trucar") {
    let adicaoEfeito = (aceitarDeCima.style.color = "white");
    aceitarDeCima.style.backgroundColor = "red";
    aceitarDeCima.style.pointerEvents = "initial";
    correrDeCima.style.color = "white";
    correrDeCima.style.backgroundColor = "#795548";
    correrDeCima.style.pointerEvents = "initial";
    trucarDeCima.innerHTML = "Pedir 6";
  } else if (trucarDeBaixo.textContent == "Pedir 6") {
    let adicaoEfeito = (aceitarDeCima.style.color = "white");
    aceitarDeCima.style.backgroundColor = "red";
    aceitarDeCima.style.pointerEvents = "initial";
    correrDeCima.style.color = "white";
    correrDeCima.style.backgroundColor = "#795548";
    correrDeCima.style.pointerEvents = "initial";
    trucarDeCima.style.backgroundColor = "green";
    trucarDeCima.style.pointerEvents = "initial";
    trucarDeCima.style.color = "white";

    let remocaoEfeito = (aceitarDeBaixo.style.color = "#555555");
    aceitarDeBaixo.style.backgroundColor = "#111111";
    aceitarDeBaixo.style.pointerEvents = "none";
    correrDeBaixo.style.color = "#555555";
    correrDeBaixo.style.backgroundColor = "#111111";
    correrDeBaixo.style.pointerEvents = "none";
    trucarDeCima.innerHTML = "Pedir 9";
  } else if (trucarDeBaixo.textContent == "Pedir 9") {
    let adicaoEfeito = (aceitarDeCima.style.color = "white");
    aceitarDeCima.style.backgroundColor = "red";
    aceitarDeCima.style.pointerEvents = "initial";
    correrDeCima.style.color = "white";
    correrDeCima.style.backgroundColor = "#795548";
    correrDeCima.style.pointerEvents = "initial";
    trucarDeCima.style.backgroundColor = "green";
    trucarDeCima.style.pointerEvents = "initial";
    trucarDeCima.style.color = "white";

    let remocaoEfeito = (aceitarDeBaixo.style.color = "#555555");
    aceitarDeBaixo.style.backgroundColor = "#111111";
    aceitarDeBaixo.style.pointerEvents = "none";
    correrDeBaixo.style.color = "#555555";
    correrDeBaixo.style.backgroundColor = "#111111";
    correrDeBaixo.style.pointerEvents = "none";
    trucarDeCima.innerHTML = "Pedir 12";
  } else if (trucarDeBaixo.textContent == "Pedir 12") {
    let adicaoEfeito = (aceitarDeCima.style.color = "white");
    aceitarDeCima.style.backgroundColor = "red";
    aceitarDeCima.style.pointerEvents = "initial";
    correrDeCima.style.color = "white";
    correrDeCima.style.backgroundColor = "#795548";
    correrDeCima.style.pointerEvents = "initial";
    trucarDeCima.style.backgroundColor = "green";
    trucarDeCima.style.pointerEvents = "initial";
    trucarDeCima.style.color = "white";

    let remocaoEfeito = (aceitarDeBaixo.style.color = "#555555");
    aceitarDeBaixo.style.backgroundColor = "#111111";
    aceitarDeBaixo.style.pointerEvents = "none";
    correrDeBaixo.style.color = "#555555";
    correrDeBaixo.style.backgroundColor = "#111111";
    correrDeBaixo.style.pointerEvents = "none";
    trucarDeCima.style.backgroundColor = "#111111";
    trucarDeCima.style.pointerEvents = "none";
    trucarDeCima.style.color = "#555555";
    trucarDeCima.innerHTML = "Pedir 12";
  }
}

function aceitarDeCimaFuncao() {
  if (trucarDeCima.innerHTML == "Pedir 6") {
    aceitarDeCima.innerHTML = "Aceitar ";
    correrDeCima.style.color = "#555555";
    correrDeCima.style.backgroundColor = "#111111";
    correrDeCima.style.pointerEvents = "none";
    trucarDeBaixo.style.color = "#555555";
    trucarDeBaixo.style.backgroundColor = "#111111";
    trucarDeBaixo.style.pointerEvents = "none";
  } else if (trucarDeCima.innerHTML == "Pedir 9") {
    aceitarDeCima.innerHTML = "Aceitar ";
    correrDeCima.style.color = "#555555";
    correrDeCima.style.backgroundColor = "#111111";
    correrDeCima.style.pointerEvents = "none";
    trucarDeBaixo.style.color = "#555555";
    trucarDeBaixo.style.backgroundColor = "#111111";
    trucarDeBaixo.style.pointerEvents = "none";
  } else if (trucarDeCima.innerHTML == "Pedir 12") {
    aceitarDeCima.innerHTML = "Aceitar ";
    correrDeCima.style.color = "#555555";
    correrDeCima.style.backgroundColor = "#111111";
    correrDeCima.style.pointerEvents = "none";
    trucarDeBaixo.style.color = "#555555";
    trucarDeBaixo.style.backgroundColor = "#111111";
    trucarDeBaixo.style.pointerEvents = "none";
  }
}

function aceitarDeBaixoFuncao() {
  if (trucarDeBaixo.innerHTML == "Pedir 6") {
    aceitarDeBaixo.innerHTML = "Aceitar ";
    correrDeBaixo.style.color = "#555555";
    correrDeBaixo.style.backgroundColor = "#111111";
    correrDeBaixo.style.pointerEvents = "none";
    trucarDeCima.style.color = "#555555";
    trucarDeCima.style.backgroundColor = "#111111";
    trucarDeCima.style.pointerEvents = "none";
  } else if (trucarDeBaixo.innerHTML == "Pedir 9") {
    aceitarDeBaixo.innerHTML = "Aceitar ";
    correrDeBaixo.style.color = "#555555";
    correrDeBaixo.style.backgroundColor = "#111111";
    correrDeBaixo.style.pointerEvents = "none";
    trucarDeCima.style.color = "#555555";
    trucarDeCima.style.backgroundColor = "#111111";
    trucarDeCima.style.pointerEvents = "none";
  } else if (trucarDeBaixo.innerHTML == "Pedir 12") {
    aceitarDeBaixo.innerHTML = "Aceitar ";
    correrDeBaixo.style.color = "#555555";
    correrDeBaixo.style.backgroundColor = "#111111";
    correrDeBaixo.style.pointerEvents = "none";
    trucarDeCima.style.color = "#555555";
    trucarDeCima.style.backgroundColor = "#111111";
    trucarDeCima.style.pointerEvents = "none";
  }
}

function correrDeCimaFuncao() {
  document.getElementById("correrDeCima");
  if (
    trucarDeBaixo.textContent == "Trucar" &&
    correrDeCima.textContent == "Correr"
  ) {
    pontuacao = segundaDupla.pontos + 1;
  } else if (
    trucarDeBaixo.textContent == "Pedir 6" &&
    correrDeCima.textContent == "Correr"
  ) {
    pontuacao = segundaDupla.pontos + 3;
  } else if (
    trucarDeBaixo.textContent == "Pedir 9" &&
    correrDeCima.textContent == "Correr"
  ) {
    pontuacao = segundaDupla.pontos + 6;
  } else if (
    trucarDeBaixo.textContent == "Pedir 12" &&
    correrDeCima.textContent == "Correr"
  ) {
    pontuacao = segundaDupla.pontos + 9;
  }

  if (pontuacao >= 12) {
    pontuacao = 0;
    derrota++;
    vitoria++;
    document.getElementById("vitoriaDeBaixo").innerHTML = vitoria;
    document.getElementById("derrotaDeCima").innerHTML = derrota;
    document.getElementById("pontuacaoDeCima").innerHTML = 0;
    document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
  }

  document.getElementById("pontuacaoDeBaixo").innerHTML = segundaDupla.pontos =
    pontuacao;
  trucarDeCima.innerHTML = "Trucar";
  trucarDeCima.style.color = "#ffffff";
  trucarDeCima.style.backgroundColor = "green";
  trucarDeCima.style.pointerEvents = "initial";
  trucarDeBaixo.innerHTML = "Trucar";
  trucarDeBaixo.style.color = "#ffffff";
  trucarDeBaixo.style.backgroundColor = "green";
  trucarDeBaixo.style.pointerEvents = "initial";
  aceitarDeCima.style.color = "#555555";
  aceitarDeCima.style.backgroundColor = "#111111";
  aceitarDeCima.style.pointerEvents = "none";
  aceitarDeBaixo.style.color = "#555555";
  aceitarDeBaixo.style.backgroundColor = "#111111";
  aceitarDeBaixo.style.pointerEvents = "none";
  correrDeCima.style.color = "#555555";
  correrDeCima.style.backgroundColor = "#111111";
  correrDeCima.style.pointerEvents = "none";
  correrDeBaixo.style.color = "#555555";
  correrDeBaixo.style.backgroundColor = "#111111";
  correrDeBaixo.style.pointerEvents = "none";
}

function correrDeBaixoFuncao() {
  document.getElementById("correrDeBaixo");
  if (
    trucarDeCima.textContent == "Trucar" &&
    correrDeBaixo.textContent == "Correr"
  ) {
    pontuacao = primeiraDupla.pontos + 1;
  } else if (
    trucarDeCima.textContent == "Pedir 6" &&
    correrDeBaixo.textContent == "Correr"
  ) {
    pontuacao = primeiraDupla.pontos + 3;
  } else if (
    trucarDeCima.textContent == "Pedir 9" &&
    correrDeBaixo.textContent == "Correr"
  ) {
    pontuacao = primeiraDupla.pontos + 6;
  } else if (
    trucarDeCima.textContent == "Pedir 12" &&
    correrDeBaixo.textContent == "Correr"
  ) {
    pontuacao = primeiraDupla.pontos + 9;
  }

  if (pontuacao >= 12) {
    pontuacao = 0;
    derrota++;
    vitoria++;
    document.getElementById("vitoriaDeCima").innerHTML = vitoria;
    document.getElementById("derrotaDeBaixo").innerHTML = derrota;
    document.getElementById("pontuacaoDeCima").innerHTML = 0;
    document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
  }

  document.getElementById("pontuacaoDeCima").innerHTML = primeiraDupla.pontos =
    pontuacao;

  trucarDeCima.innerHTML = "Trucar";
  trucarDeCima.style.color = "#ffffff";
  trucarDeCima.style.backgroundColor = "green";
  trucarDeCima.style.pointerEvents = "initial";
  trucarDeBaixo.innerHTML = "Trucar";
  trucarDeBaixo.style.color = "#ffffff";
  trucarDeBaixo.style.backgroundColor = "green";
  trucarDeBaixo.style.pointerEvents = "initial";
  aceitarDeCima.style.color = "#555555";
  aceitarDeCima.style.backgroundColor = "#111111";
  aceitarDeCima.style.pointerEvents = "none";
  aceitarDeBaixo.style.color = "#555555";
  aceitarDeBaixo.style.backgroundColor = "#111111";
  aceitarDeBaixo.style.pointerEvents = "none";
  correrDeCima.style.color = "#555555";
  correrDeCima.style.backgroundColor = "#111111";
  correrDeCima.style.pointerEvents = "none";
  correrDeBaixo.style.color = "#555555";
  correrDeBaixo.style.backgroundColor = "#111111";
  correrDeBaixo.style.pointerEvents = "none";
}

function exibirSegundaDupla() {
  let inserir = document.getElementById("insira").value;
  document.getElementById("segundaDupla").innerHTML = inserir;
  inserir = document.getElementById("insira").value = "";
}

function zerarPlacar() {
  document.getElementById("vitoriaDeCima").innerHTML = 0;
  document.getElementById("derrotaDeCima").innerHTML = 0;
  document.getElementById("pontuacaoDeCima").innerHTML = 0;
  document.getElementById("vitoriaDeBaixo").innerHTML = 0;
  document.getElementById("derrotaDeBaixo").innerHTML = 0;
  document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
}

function umPontoDeCima() {
  pontuacao++;
  if (pontuacao >= 12) {
    pontuacao = 0;
    derrota++;
    vitoria++;
    document.getElementById("vitoriaDeBaixo").innerHTML = vitoria;
    document.getElementById("derrotaDeCima").innerHTML = derrota;
    document.getElementById("pontuacaoDeCima").innerHTML = 0;
    document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
  }
  document.getElementById("pontuacaoDeCima").innerHTML = primeiraDupla.pontos =
    pontuacao;
}

function umPontoDeBaixo() {
  pontuacao++;
  if (pontuacao >= 12) {
    pontuacao = 0;
    derrota++;
    vitoria++;
    document.getElementById("vitoriaDeCima").innerHTML = vitoria;
    document.getElementById("derrotaDeBaixo").innerHTML = derrota;
    document.getElementById("pontuacaoDeCima").innerHTML = 0;
    document.getElementById("pontuacaoDeBaixo").innerHTML = 0;
  }
  document.getElementById("pontuacaoDeBaixo").innerHTML = segundaDupla.pontos =
    pontuacao;
}