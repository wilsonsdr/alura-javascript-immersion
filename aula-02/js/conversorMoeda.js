function converterMoeda() {
  const valorElemento = document.getElementById("valorMoeda");
  const valorMoeda = valorElemento.value;
  const valorConversao = Number(valorMoeda);

  const seletorMoeda1 = document.getElementById("seletorMoeda1");
  const opcoesMoeda1 = seletorMoeda1.value;
  const seletorMoeda2 = document.getElementById("seletorMoeda2");
  const opcoesMoeda2 = seletorMoeda2.value;

  let dolar = 5.15;
  let euro = 5.22;
  let cifrao

  let igual = opcoesMoeda1 == opcoesMoeda2;
  let diferente = opcoesMoeda1 + opcoesMoeda2;

  if (opcoesMoeda2 == "real") {
    cifrao = "R$";
  } else if (opcoesMoeda2 == "dolar") {
    cifrao = "US$";
  } else {
    cifrao = "€";
  }

  if (igual == true) {
    igual = valorConversao * 1;
  } else {
    switch (diferente) {
      case "dolarreal":
        igual = valorConversao / dolar;
        break;
      case "dolareuro":
        igual = (valorConversao * dolar) / euro;
        break;
      case "euroreal":
        igual = valorConversao * euro;
        break;
      case "eurodolar":
        igual = (valorConversao * euro) / dolar;
        break;
      case "realeuro":
        igual = valorConversao / euro;
        break;
      case "realdolar":
        igual = valorConversao / dolar;
        break;
    }
  }
  document.getElementById(
    "resultadoMoeda"
  ).innerHTML = `A conversão de ${opcoesMoeda1} para ${opcoesMoeda2} é de: ${cifrao}${igual.toFixed(
    2
  )}`;
}

function resetarMoeda() {
  document.getElementById("valorMoeda").value = ""; // deixa a caixa de valor em branco
  document.getElementById("resultadoMoeda").innerHTML = ""; // remove o resultado
  document.getElementById("seletorMoeda1").selectedIndex = "0"; // seleciona o index 0
  document.getElementById("seletorMoeda2").selectedIndex = "0";
}
