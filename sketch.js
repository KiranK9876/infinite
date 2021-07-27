var boat, boatImg
var path, pathImg
var bomb, bombImg, coin, coinImg, energyDrink, energyDrinkImg
var gameOver, gameOverImg

var PLAY=1
var END=0
var gameState=1


function preload(){
    boatImg = loadImage("ship-1.png")
    pathImg = loadImage("path.png")
    bombImg = loadImage("bomb.png")
    coinImg = loadImage("coin.png")
    energyDrinkImg = loadImage("energyDrink.png")
    gameOverImg = loadImage("gameOver.png")
}

function setup() {
    createCanvas(400,400)
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 5;

    boat = createSprite(200,200)
    boat.addImage("ship-1.png", boatImg)
    boat.scale = 0.08

    boat.setCollider("rectangle",0,0,40,40)
    boat.debug=true

    gameOver = createSprite(650,150);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.8;
    gameOver.visible = false;

    bomb1 = new Group()
    coin1 = new Group()
    energyDrink1 = new Group()
    
 
}

function draw() {
  if(gameState===PLAY){
    background(0);
    boat.x = World.mouseX;
    
    edges= createEdgeSprites();
    boat.collide(edges);
  }
  if(path.y>400){
    path.y = height/2
  }

  //createBomb();
  //createCoin();
  //createEnergydrink();
    
    
    if(bomb1.isTouching(boat)){
        gameState = END;
        player1.velocityX = 0;
       }
       
       if(coin1.isTouching(boat)){
         gameState = END;
         player2.velocityY = 0;
       }
       
       if(energyDrink1.isTouching(boat)){
         gameState = END;
         player3.velocityY = 0;
       }

  





       drawSprites()



    
}

function createCoin(){
  if (World.frameCount % 530 == 0) {
  var coin = createSprite(Math.round(random(50, width-50),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.1;
  coin.velocityY = 8;
  coin.lifetime = 150;
  coin1Group.add(coin);
  }
}

function createBomb(){
  if (World.frameCount % 530 == 0) {
  var bomb = createSprite(Math.round(random(50, width-50),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.1;
  bomb.velocityY = 8;
  bomb.lifetime = 150;
  bomb1Group.add(bomb);
  }
}

function createEnergydrink(){
  if (World.frameCount % 530 == 0) {
  var energyDrink = createSprite(Math.round(random(50, width-50),40, 10, 10));
  energyDrink.addImage(energyDrinkImg);
  energyDrink.scale=0.1;
  energyDrink.velocityY = 8;
  energyDrink.lifetime = 150;
  energyDrinkGroup.add(sword);
  }
}

