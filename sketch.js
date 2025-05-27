let showCity = true; // Variável para alternar entre cidade e campo

function setup() {
  createCanvas(600, 400);
  let button = createButton('Trocar Paisagem');
  button.position(20, 20);
  button.mousePressed(toggleLandscape);
}

function draw() {
  background(255);

  if (showCity) {
    drawCity(); // Desenha a cidade
  } else {
    drawField(); // Desenha o campo
  }

  // Texto informativo
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Clique para alternar entre cidade e campo", width / 2, height - 20);
}

// Função para desenhar a cidade
function drawCity() {
  // Céu da cidade
  background(200, 220, 255); // Cor do céu

  // Sol (ou lua) da cidade
  fill(255, 204, 0);
  noStroke();
  ellipse(500, 70, 80, 80); // Sol

  // Prédios
  fill(150);
  rect(50, 150, 80, 200);  // Prédio 1
  rect(150, 100, 100, 250); // Prédio 2
  rect(300, 130, 70, 220);  // Prédio 3
  rect(420, 140, 60, 210);  // Prédio 4

  // Carro na rua
  fill(255, 0, 0);
  rect(250, 350, 60, 30); // Carro

  // Ruas
  stroke(50);
  strokeWeight(5);
  line(0, 350, width, 350);
}

// Função para desenhar o campo
function drawField() {
  // Céu do campo
  background(135, 206, 250); // Cor do céu

  // Sol no campo
  fill(255, 204, 0);
  noStroke();
  ellipse(100, 70, 80, 80); // Sol

  // Terreno (campo)
  fill(34, 139, 34);
  rect(0, height - 100, width, 100); // Relva

  // Árvores no campo
  drawTree(150, height - 130);
  drawTree(300, height - 130);
  drawTree(450, height - 130);
}

// Função para desenhar uma árvore
function drawTree(x, y) {
  // Tronco
  fill(139, 69, 19);
  rect(x - 10, y, 20, 40);
  
  // Folhas
  fill(0, 128, 0);
  ellipse(x, y - 20, 50, 50); // Copa da árvore
}

// Função que alterna entre cidade e campo
function toggleLandscape() {
  showCity = !showCity;
}