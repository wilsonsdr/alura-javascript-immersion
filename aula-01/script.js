const informe = prompt("Informe seu nome:");
let n1 = prompt("Informe sua nota N1");
let n2 = prompt("Informe sua nota N2");
let n3 = prompt("Informe sua nota N3");
let n4 = prompt("Informe sua nota N4");
let celsius = prompt("Informe a temperatura em Celsius");
let fahrenheit = prompt("Informe a temperatura em Fahrenheit");
const nome = document.querySelector(".nome");
const conteudo = document.querySelector(".main-container");

n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);
n4 = Number(n4);
celsius = Number(celsius);
fahrenheit = Number(fahrenheit);

resultado = (n1 + n2 + n3 + n4) / 4; // soma as notas e divide por 4 para saber a média
conversaoCF = celsius * 1.8 + 32;
conversaoFC = (fahrenheit - 32) / 1.8;

nome.innerHTML = `${informe}@imersao-dev-alura: ~`;
conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">nota primeiro bimestre ${n1}</span></h3>`;
conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">nota segundo bimestre ${n2}</span></h3>`;
conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">nota terceiro bimestre ${n3}</span></h3>`;
conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">nota quarto bimestre ${n4}</span></h3>`;
conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">a sua media e de ${resultado}</span></h3>`;

if (resultado >= 6) {
  aprovado =
    conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">voce foi aprovado</span></h3>`;
} else {
  reprovado =
    conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">voce foi reprovado</span></h3>`;
}

conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">${celsius}ºC equivale a ${conversaoCF.toFixed(2)}ºF</span></h3>`;
conteudo.innerHTML += `<h3>${informe}@imersao-dev-alura<span class="branco">:</span><span class="azul">~</span><span class="branco">$</span><span class="texto">${fahrenheit}ºF equivale a ${conversaoFC.toFixed(2)}ºC</span></h3>`;
