// comédia, família, fantasia, aventura, ação, super-herói, suspense, policial, mistério, terror, ficção científica 

// Garfield: O filme, LIVRE, comédia, família
// Sonic 2: O filme, 10, comédia, família, fantasia, aventura
// Shang-chi e a Lenda dos Dez Anéis, 12, ação, super-herói, fantasia, aventura
// Gente Grande, 12, comédia 
// As Branquelas, 12, comédia, policial
// Uncharted: Fora do mapa, 12, ação, aventura, mistério 
// Five Nights At Freddy's: O Pesadelo Sem Fim, 14, suspense, terror
// Malévola, 10, fantasia, romance, ação, aventura 
// O Espetacular Homem-Aranha 2: A Ameaça de Electro, 12, ação, aventura, ficção científica, super-herói 
// Shrek Para Sempre, LIVRE, animação, aventura, comédia, família, fantasia

let campoIdade;
let campoAventura;
let campoParafamilia;
let campoRomance;
let campoAcao;
let campoFiccaocientifica;
let campoComedia;

function setup() {
  createCanvas(600, 300);
  createElement("h4", "Recomendações de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoComedia = createCheckbox("Gosta de comédia?"); 
  campoAcao = createCheckbox("Gosta de ação?");
  campoFiccaocientifica = createCheckbox("gosta de ficção cientifica?");
  campoRomance = createCheckbox("Gosta de romance?");
  campoParafamilia = createCheckbox("Gosta de filmes para familia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}
function draw() {
  background("grey");
  let idade = campoIdade.value();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeFiccaocientifica = campoFiccaocientifica.checked();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeParafamilia = campoParafamilia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeParafamilia, gostaDeRomance, gostaDeAcao, gostaDeFiccaocientifica, gostaDeComedia);

  fill(color("white"));
  textAlign(CENTER, CENTER);
  textSize(24);
  text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, gostaDeAventura, gostaDeParafamilia, gostaDeRomance, gostaDeAcao, gostaDeFiccaocientifica, gostaDeComedia) {
if(idade >= 0) {
  if(gostaDeParafamilia) {
    return "Garfield: O filme";
  }
  if(idade >= 10) {
  if(gostaDeRomance) {
  return "Malévola";
    }
  if(idade >= 12) {
 if(gostaDeAventura) {
  return "Uncharted: Fora do mapa";
 } else {
   if(gostaDeAcao) {
     return "Shang-chi e a Lenda dos Dez Anéis";
   } else {
  if(gostaDeFiccaocientifica) {
   return "O Espetacular Homem-Aranha 2";
 } else {
  if(gostaDeComedia) {
   return "Gente Grande";
    }
    }
    }
  } 
  if(idade >= 14) {
      return "Five Nights At Freddy's: O Pesadelo Sem Fim";
    }
    return "As Branquelas";
  }
   return "Sonic 2";
}
  return "Shrek";
}
  
  
  
  
}





