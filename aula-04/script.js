const informar = prompt("Seja muito bem vindo(a), qual o seu nome?");
const usuario = document.getElementById("usuario");
usuario.innerHTML = informar;

const containerAcao = document.getElementById("container-acao");
const containerAventura = document.getElementById("container-aventura");
const containerComedia = document.getElementById("container-comedia");
const containerSuspense = document.getElementById("container-suspense");

const filmesAcao = document.getElementById("acao");
const filmesAventura = document.getElementById("aventura");
const filmesComedia = document.getElementById("comedia");
const filmesSuspense = document.getElementById("suspense");

//  array dos filmes

let listaAcao = [
  "https://i.pinimg.com/originals/6e/48/07/6e4807609686cc0fd7659bb904647c26.jpg",
  "https://d128j1v7l5zqm9.cloudfront.net/vibezz_586525933.jpg",
  "https://jovemnerd.com.br/wp-content/uploads/2018/05/poster-JohnWick3.jpg",
  "https://i.pinimg.com/originals/1d/38/71/1d3871dfd3c77e175e2d342b139a13b7.jpg",
  "http://s2.glbimg.com/Cvr-Qqu1CvhbW0mVgARLR17yBtc=/smart/e.glbimg.com/og/ed/f/original/2017/05/22/rambo-remake-poster.jpg",
  "https://radiocultfm.com/wp-content/uploads/2020/11/tenet-cartaz.jpg",
  "https://blog-imgs-144.fc2.com/r/e/c/receitasfaceis/filmes-de-acao-na-lista-creed-original-24.jpg",
  "https://www.cafecomfilme.com.br/media/k2/items/cache/0f18514092300971a1d9467fe5706101_XL.jpg?t=20210313_201624",
  "https://marketplace.canva.com/EAEbYDLUXO8/1/0/1131w/canva-plano-de-fundo-com-foto-filme-de-a%C3%A7%C3%A3o-cartaz-psSxOl89zMQ.jpg",
  "https://pipocamoderna.com.br/wp-content/uploads/2020/03/resgate-poster.jpg",
];

let listaAventura = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/30/40/20328542.jpg",
  "http://midia.gruposinos.com.br/_midias/jpg/2015/10/18/theforceawak-1118273.jpg",
  "https://mail.cinegarimpo.com.br/wp/content/uploads/2014/01/homolog.cinegarimpo_aventura.jpg",
  "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/7135/filme_7135.jpg",
  "https://assets.b9.com.br/wp-content/uploads/2021/12/TLC_INTL_DIGITAL_1SHEET_POR-1630x2415.jpg",
  "https://s2.glbimg.com/OEoV0ASQ_HmdzngOnl8vdFpCZ1I=/https://wp-globofilmes.tsuru.glbimg.com/uploads/2019/08/dpa3_final1_M.jpg",
  "https://www.cafecomfilme.com.br/media/k2/items/cache/035f0b772a03f455045ea960b0176ce7_XL.jpg?t=20200520_031636",
  "https://ingresso-a.akamaihd.net/prd/img/movie/avatar/28c9f1f7-dedc-47c3-b2c7-4a5d6e31ea1f.jpg",
  "https://ingresso-a.akamaihd.net/prd/img/movie/acampamento-intergalactico/437e652b-8b66-4367-93b9-cd3592503fe2.jpg",
  "https://i.pinimg.com/736x/b7/ce/ee/b7ceee285db120e40f1f10170bebdf19.jpg",
];

let listaComedia = [
  "https://i2.wp.com/sitedosgeeks.com/wp-content/uploads/2019/08/Captura-de-Tela-2019-08-14-%C3%A0s-18.11.44.png",
  "http://img5.allocine.fr/acmedia/medias/nmedia/18/95/49/33/20408664.jpg",
  "http://cinemacao.files.wordpress.com/2012/05/os-penatras.jpg",
  "https://3.bp.blogspot.com/-vmQn-03c6Ck/VRSTqjnYbFI/AAAAAAAALWo/dcPV--0gbPE/s1600/Debi-E-Loide-Dois-Idiotas.jpg",
  "https://escolaeducacao.com.br/wp-content/uploads/2019/04/dvd-meu-passado-me-condena-o-filme-fabio-porchat-original-D_NQ_NP_866444-MLB27494554080_062018-F.jpg",
  "http://top100edmchart.com/get8.php?url=aHR0cHM6Ly9jZG4uY2luZXBvcC5jb20uYnIvMjAxOS8wMi82MEQ3NDdFMi01Njg1LTQ1NUQtOTMxRC01QzNBNDZDNzcyQTUuanBlZw==&ref=cinepop.com.br",
  "https://2.bp.blogspot.com/-biaUY2Tbejo/WDNpc620HtI/AAAAAAAAJMQ/G2pvRYMhmZ8FUsBWzFNrUY2FWDd7yyrAgCLcB/s1600/Cartaz%2Boficial%2B-%2BMinha%2BM%25C3%25A3e%2B%25C3%2589%2BUma%2BPe%25C3%25A7a%2B2_1_0.jpg",
  "https://abroadwayeaqui.com.br/wp-content/uploads/2021/05/Cartaz-Quem-Vai-Ficar-com-Mario.jpg",
  "https://static.wixstatic.com/media/5801fd_4906382b463f4871a964cd10aa4fd27f.jpg/v1/fill/w_1000,h_1455,al_c,q_90,usm_0.66_1.00_0.01/5801fd_4906382b463f4871a964cd10aa4fd27f.jpg",
  "https://4.bp.blogspot.com/-uimiA4nPTh0/VEuQvhSLo-I/AAAAAAAARTk/fKAU7DkTVPU/s1600/Os%2BCaras%2Bde%2BPau.jpg",
];

let listaSuspense = [
  "https://pipocanamadrugada.com.br/site/wp-content/uploads/2019/01/N%C3%A3o-Olhe.jpg",
  "http://2.bp.blogspot.com/-M0R0KFo-kOc/U778Byzi-bI/AAAAAAAANMI/POj94JZQPTc/s1600/review-a-ilha-do-medo1.jpg",
  "https://www.cinemadebuteco.com.br/wp-content/uploads/2013/12/poster-sem-prote%C3%A7%C3%A3o.jpg",
  "https://universodorock.com/wp-content/uploads/2018/05/in-darkness.jpg",
  "https://www.clickgratis.com.br/_upload/movies/2016/04/14/mente-criminosa.jpg",
  "https://i.pinimg.com/736x/a1/16/e2/a116e20b1f98c4baf948257955f64f45.jpg",
  "https://br.web.img3.acsta.net/pictures/210/509/21050952_20131018203347915.jpg",
  "https://images.filmesnocinema.com.br/covers/visoes-do-passado.jpg",
  "https://gcpstorage.caxias.rs.gov.br/images/2014/08/de65fbf1-c4b6-4789-92a5-9dfa9114566e_1200.jpg",
  "https://br.web.img2.acsta.net/pictures/14/06/05/17/46/307101.jpg",
];

// subtitulo e botões

containerAcao.innerHTML =
  "<h2 id='acao-subtitulo'>Filmes de Ação</h2>" +
  "<div class='container-botoes'>" +
  "<button class='botao' onclick='adicionarFilmeAcao()' type='button'>Adicionar filme</button>" +
  "<button class='botao' onclick='removerFilmeAcao()' type='button'>Remover filme</button>" +
  "</div>";

containerAventura.innerHTML =
  "<h2 id='aventura-subtitulo'>Filmes de Aventura</h2>" +
  "<div class='container-botoes'>" +
  "<button class='botao' onclick='adicionarFilmeAventura()' type='button'>Adicionar filme</button>" +
  "<button class='botao' onclick='removerFilmeAventura()' type='button'>Remover filme</button>" +
  "</div>";

containerComedia.innerHTML =
  "<h2 id='comedia-subtitulo'>Filmes de Comedia</h2>" +
  "<div class='container-botoes'>" +
  "<button class='botao' onclick='adicionarFilmeComedia()' type='button'>Adicionar filme</button>" +
  "<button class='botao' onclick='removerFilmeComedia()' type='button'>Remover filme</button>" +
  "</div>";

containerSuspense.innerHTML =
  "<h2 id='suspense-subtitulo'>Filmes de Suspense</h2>" +
  "<div class='container-botoes'>" +
  "<button class='botao' onclick='adicionarFilmeSuspense()' type='button'>Adicionar filme</button>" +
  "<button class='botao' onclick='removerFilmeSuspense()' type='button'>Remover filme</button>" +
  "</div>";

// adicionando cada elemento da array 

listaAcao.forEach((listaAcao) => {
  filmesAcao.innerHTML += ' <img src=" ' + listaAcao + ' " ' + " > ";
});

listaAventura.forEach((listaAventura) => {
  filmesAventura.innerHTML += ' <img src=" ' + listaAventura + ' " ' + " > ";
});

listaComedia.forEach((listaComedia) => {
  filmesComedia.innerHTML += ' <img src=" ' + listaComedia + ' " ' + " > ";
});

listaSuspense.forEach((listaSuspense) => {
  filmesSuspense.innerHTML += ' <img src=" ' + listaSuspense + ' " ' + " > ";
});

// função adicionar filme

function adicionarFilmeAcao() {
  let novoFilmeAcao = prompt("URL do Filme");
  for (const filmeAcaoExistente of listaAcao) {
    if (novoFilmeAcao == filmeAcaoExistente) {
      alert("Filme já existente!");
      return;
    }
  }
  if (novoFilmeAcao.endsWith(".jpg")) {
    listaAcao.push(novoFilmeAcao);
    filmesAcao.innerHTML +=
      ' <img src=" ' + novoFilmeAcao + ' " ' + " > ";
    alert("Filme inserido!");
    return;
  } else {
    alert("Insira URL válido!");
  }
}

function adicionarFilmeAventura() {
  let novoFilmeAventura = prompt("URL do Filme");
  for (const filmeAventuraExistente of listaAventura) {
    if (novoFilmeAventura == filmeAventuraExistente) {
      alert("Filme já existente!");
      return;
    }
  }
  if (novoFilmeAventura.endsWith(".jpg")) {
    listaAventura.push(novoFilmeAventura);
    filmesAventura.innerHTML +=
      ' <img src=" ' + novoFilmeAventura + ' " ' + " > ";
    alert("Filme inserido!");
    return;
  } else {
    alert("Insira URL válido!");
  }
}

function adicionarFilmeComedia() {
  let novoFilmeComedia = prompt("URL do Filme");
  for (const filmeComediaExistente of listaComedia) {
    if (novoFilmeComedia == filmeComediaExistente) {
      alert("Filme já existente!");
      return;
    }
  }
  if (novoFilmeComedia.endsWith(".jpg")) {
    listaComedia.push(novoFilmeComedia);
    filmesComedia.innerHTML +=
      ' <img src=" ' + novoFilmeComedia + ' " ' + " > ";
    alert("Filme inserido!");
    return;
  } else {
    alert("Insira URL válido!");
  }
}

function adicionarFilmeSuspense() {
  let novoFilmeSuspense = prompt("URL do Filme");
  for (const filmeSuspenseExistente of listaSuspense) {
    if (novoFilmeSuspense == filmeSuspenseExistente) {
      alert("Filme já existente!");
      return;
    }
  }
  if (novoFilmeSuspense.endsWith(".jpg")) {
    listaSuspense.push(novoFilmeSuspense);
    filmesSuspense.innerHTML +=
      ' <img src=" ' + novoFilmeSuspense + ' " ' + " > ";
    alert("Filme inserido!");
    return;
  } else {
    alert("Insira URL válido!");
  }
}

// função remover filme

function removerFilmeAcao() {
  filmesAcao.lastChild.remove();
  if (!listaAcao.length) {
    alert("Sem filmes para remover");
    return;
  } else {
    filmesAcao.lastChild.remove();
    listaAcao.pop();
  }
}

function removerFilmeAventura() {
  filmesAventura.lastChild.remove();
  if (!listaAventura.length) {
    alert("Sem filmes para remover");
    return;
  } else {
    filmesAventura.lastChild.remove();
    listaAventura.pop();
  }
}

function removerFilmeComedia() {
  filmesComedia.lastChild.remove();
  if (!listaComedia.length) {
    alert("Sem filmes para remover");
    return;
  } else {
    filmesComedia.lastChild.remove();
    listaComedia.pop();
  }
}

function removerFilmeSuspense() {
  filmesSuspense.lastChild.remove();
  if (!listaSuspense.length) {
    alert("Sem filmes para remover");
    return;
  } else {
    filmesSuspense.lastChild.remove();
    listaSuspense.pop();
  }
}