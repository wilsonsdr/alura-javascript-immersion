function converter() {
  const valorElemento = document.getElementById("valor");
  const valor = valorElemento.value;
  const valorConversao = Number(valor);

  const seletorMoeda1 = document.getElementById("seletor1");
  const opcoesMoeda1 = seletorMoeda1.value;
  const seletorMoeda2 = document.getElementById("seletor2");
  const opcoesMoeda2 = seletorMoeda2.value;

  let dolar = 5.15;
  let euro = 5.22;

  let igual = opcoesMoeda1 == opcoesMoeda2;
  let diferente = opcoesMoeda1 + opcoesMoeda2;

  if (igual == true) {
    igual = valorConversao * 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `A conversão de ${opcoesMoeda1} para ${opcoesMoeda2} é de: ${igual}`;
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
    document.getElementById(
      "resultado"
    ).innerHTML = `A conversão de ${opcoesMoeda1} para ${opcoesMoeda2} é de: ${igual.toFixed(
      2
    )}`;
  }
}

function resetar() {
  document.getElementById("valor").value = ""; // deixa a caixa de valor em branco
  document.getElementById("resultado").innerHTML = ""; // remove o resultado
  document.getElementById("seletor1").selectedIndex = "0"; // seleciona o index 0
  document.getElementById("seletor2").selectedIndex = "0";
}
