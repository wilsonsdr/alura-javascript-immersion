function converterTemperatura() {
  const valorElemento = document.getElementById("valorTemperatura");
  const valorTemperatura = valorElemento.value;
  const valorConversao = Number(valorTemperatura);

  const seletorTemperatura1 = document.getElementById("seletorTemperatura1");
  const opcoesTemperatura1 = seletorTemperatura1.value;
  const seletorTemperatura2 = document.getElementById("seletorTemperatura2");
  const opcoesTemperatura2 = seletorTemperatura2.value;

  let FahrenToC = ((valorConversao - 32) * 5) / 9;
  let FahrenToK = (valorConversao * 5) / 9 + 273.15;
  let KelvinToF = ((valorConversao - 273, 15) * 9) / 5 + 32;
  let KelvinToC = valorConversao - 273.15;
  let CelsiusToF = (valorConversao * 9) / 5 + 32;
  let CelsiusToK = valorConversao + 273.15;
  let grau;

  let igual = opcoesTemperatura1 == opcoesTemperatura2;
  let diferente = opcoesTemperatura1 + opcoesTemperatura2;

  if (opcoesTemperatura2 == "fahrenheit") {
    grau = "ºF";
  } else if (opcoesTemperatura2 == "kelvin") {
    grau = "ºK";
  } else {
    grau = "ºC";
  }

  if (igual == true) {
    igual = valorConversao * 1;
  } else {
    switch (diferente) {
      case "fahrenheitkelvin":
        igual = FahrenToK;
        break;
      case "fahrenheitcelcius":
        igual = FahrenToC;
        break;
      case "kelvinfahrenheit":
        igual = KelvinToF;
        break;
      case "kelvincelcius":
        igual = KelvinToC;
        break;
      case "celciusfahrenheit":
        igual = CelsiusToF;
        break;
      case "celciuskelvin":
        igual = CelsiusToK;
        break;
    }
  }
  document.getElementById("resultadoTemperatura").innerHTML =
    `A conversão de ${opcoesTemperatura1} para ${opcoesTemperatura2} é de: ${igual.toFixed(
      3
    )}` + grau;
}

function resetarTemperatura() {
  document.getElementById("valorTemperatura").value = ""; // deixa a caixa de valor em branco
  document.getElementById("resultadoTemperatura").innerHTML = ""; // remove o resultado
  document.getElementById("seletorTemperatura1").selectedIndex = "0"; // seleciona o index 0
  document.getElementById("seletorTemperatura2").selectedIndex = "0";
}
