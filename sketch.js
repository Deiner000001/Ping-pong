//variaveis da bolinha
let xBolinha = 300;  
let yBolinha = 200;
let diametro =15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;


function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha ();
  movimentarBolinha();
  verificaColisaoBorda();
  mostraRaquete();
}

function mostraBolinha(){
circle(xBolinha,yBolinha,diametro);
}
function movimentarBolinha(){
xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
if (xBolinha + raio> width || xBolinha - raio< 0) {
  velocidadeXBolinha *= -1;
}
if (yBolinha + raio> height || yBolinha - raio< 0) {
        velocidadeYBolinha *= -1;
    }
}
function mostraRaquete (){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}


