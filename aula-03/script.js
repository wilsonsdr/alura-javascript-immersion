let tentativas = 3;
let aleatorio = (Math.random() * 10).toFixed(0);

function chutar() {
  const valorChute = document.getElementById("valorChute");
  const valorElemento = Number(valorChute.value);
  console.log(valorElemento);
  console.log(aleatorio);

  if (valorElemento == aleatorio) {
    document.getElementById(
      "resposta"
    ).innerHTML = `Parabéns, você acertou!! O número é ${aleatorio}`;
    document.getElementById("botaoChutar").style.color = "#505050";
    document.getElementById("botaoResetar").style.color = "#ffffff";
    document.getElementById("botaoChutar").style.pointerEvents = "none";
    document.getElementById("botaoResetar").style.pointerEvents = "initial";
  } else if (valorElemento > aleatorio) {
    tentativas += -1;
    document.getElementById(
      "resposta"
    ).innerHTML = `O número é menor, tentativas restantes (${tentativas})`;
  } else if (valorElemento < aleatorio) {
    tentativas += -1;
    document.getElementById(
      "resposta"
    ).innerHTML = `O número é maior, tentativas restantes (${tentativas})`;
  }

  if (tentativas == 0) {
    document.getElementById("resposta").innerHTML = "Não foi dessa vez";
    document.getElementById("botaoChutar").style.color = "#505050";
    document.getElementById("botaoResetar").style.color = "#ffffff";
    document.getElementById("botaoChutar").style.pointerEvents = "none";
    document.getElementById("botaoResetar").style.pointerEvents = "initial";
  }
}

function resetar() {
  document.getElementById("valorChute").value = "";
  document.getElementById("resposta").innerHTML = "";
  document.getElementById("botaoResetar").style.color = "#505050";
  document.getElementById("botaoChutar").style.color = "#ffff";
  document.getElementById("botaoChutar").style.pointerEvents = "initial";
  document.getElementById("botaoResetar").style.pointerEvents = "none";
  aleatorio = (Math.random() * 10).toFixed(0);
  tentativas = 3;
}
