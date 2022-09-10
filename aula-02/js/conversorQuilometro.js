function converterQuilometro() {
  const valorElemento = document.getElementById("valorQuilometro");
  const valorQuilometro = valorElemento.value;
  const valorConversao = Number(valorQuilometro);

  const seletorQuilometro1 = document.getElementById("seletorQuilometro1");
  const opcoesQuilometro1 = seletorQuilometro1.value;
  const seletorQuilometro2 = document.getElementById("seletorQuilometro2");
  const opcoesQuilometro2 = seletorQuilometro2.value;

  let kmToM = valorConversao * 1000;
  let kmToLy = valorConversao * 9461000000000;
  let mToKm = valorConversao / 1000;
  let mToLy = valorConversao * 9460730472580800;
  let LyToKm = valorConversao / 9461000000000;
  let LyToM = valorConversao / 9460730472580800;
  let unidade;

  let igual = opcoesQuilometro1 == opcoesQuilometro2;
  let diferente = opcoesQuilometro1 + opcoesQuilometro2;
  console.log(diferente);

  if (opcoesQuilometro2 == "km") {
    unidade = "km";
  } else if (opcoesQuilometro2 == "metros") {
    unidade = "m";
  } else {
    unidade = "ly";
  }

  if (igual == true) {
    igual = valorConversao * 1;
  } else {
    switch (diferente) {
      case "kmmetros":
        igual = kmToM;
        break;
      case "kmanosluz":
        igual = kmToLy;
        break;
      case "metroskm":
        igual = mToKm;
        break;
      case "metrosanosluz":
        igual = mToLy;
        break;
      case "anosluzkm":
        igual = LyToKm;
        break;
      case "anosluzmetros":
        igual = LyToM;
        break;
    }
  }
  document.getElementById("resultadoQuilometro").innerHTML =
    `A conversão de ${opcoesQuilometro1} para ${opcoesQuilometro2} é de: ${igual}`+unidade;
}

function resetarQuilometro() {
  document.getElementById("valorQuilometro").value = ""; // deixa a caixa de valor em branco
  document.getElementById("resultadoQuilometro").innerHTML = ""; // remove o resultado
  document.getElementById("seletorQuilometro1").selectedIndex = "0"; // seleciona o index 0
  document.getElementById("seletorQuilometro2").selectedIndex = "0";
}
