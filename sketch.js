var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 4;
  
  doorsGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
    tower.y = 300
  }

  spawnDoors();

  drawSprites();
}

function spawnDoors() {
  if (frameCount % 90 === 0) {
    door = createSprite(200, -50);
    door.addImage(doorImg);
    door.velocityY = 4;
    door.x = Math.round(random(120, 400));
    door.lifetime = 500;
  
    doorsGroup.add(door);

  }
}
