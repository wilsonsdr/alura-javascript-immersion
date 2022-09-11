tentativas = 3;
document.getElementById("valorChute").addEventListener("chutar", chutar);

function chutar() {
  const valorChute = document.getElementById("valorChute");
  const valorElemento = Number(valorChute.value);
  console.log(typeof valorElemento);
  console.log(valorElemento);

  let aleatorio = (Math.random() * 10).toFixed(0);
  console.log(aleatorio);

  tentativas += -1;

  if (valorElemento == aleatorio) {
    document.getElementById("resposta").innerHTML = `Parabéns, você acertou!! O número era ${aleatorio}`;
  } else if (valorElemento > aleatorio) {
    document.getElementById(
      "resposta"
    ).innerHTML = `O número era menor, tentativas restantes (${tentativas})`;
  } else if (valorElemento < aleatorio) {
    document.getElementById(
      "resposta"
    ).innerHTML = `O número era maior, tentativas restantes (${tentativas})`;
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
  tentativas = 3
}
