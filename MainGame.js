let width=1000;
let height=600;

// let BGanimation;

const LOADING=1;
const MENU=2;
const GAME=3;
const SCOREBOARD=4;
const RULES=5;
const PLAY=6;

let currentState=LOADING; //starting screen
let totalBullets=20; //started bullets 

let leftPlay=false;
let middlePlay=false;
let rightPlay=false;

let RedRockets, GreenRockets, YellowRockets; // Missile Groups
let redMissile, greenMissile, yellowMissile, DefenceSprite, City, citySprite, forceFieldDropSprite,LEFTbullet,RIGHTbullet,MIDDLEbullet; // Sprites 
let missileR, missileY, missileB, bulletPack, forceField, forceFieldDrop, defence //Images for Spites
let leftBulletsGROUP, middleBulletsGROUP, rightBulletsGROUP, bulletPackGROUP, CityHitOneGROUP, CityHitTwoGROUP //Groups
let PLAYbutton, RULESbutton, SCOREbutton, MENUbutton, GAMEbutton, RESETbutton,LoadingPlayButton; //buttons 
let leaderBoard, BGvid, loading, rulePage,logoSprite, logo, gameText, controls, gameFont,leaderboardData, gameBacking, bullet; //other assetts

let RedMissileHIT=0;
let GreenMissileHIT=0;
let YellowMissileHIT=0;

let activePlayerX=width/2;
let activePlayerY=height-120;
let citySizeX=180
let citySizeY=100

let leftBullets=totalBullets;
let middleBullets=totalBullets;
let rightBullets=totalBullets;

let redRocketFreq = 900
let greenRocketFreq = 120
let yellowRocketFreq = 300
let FiveMinsPlay = 18000;

let SCORE=0;

let placeArray = new Array(); //loading json file
let nameArray = new Array();
let scoreArray = new Array();
let dateArray = new Array();


function preload(){
  loading = loadImage("loading.gif")
  bullet = loadImage("images/bullet.png")
  leaderBoard = loadImage("images/leaderboard.png")
  logo = loadImage("images/LOGO.png")
  controls = loadImage("images/controls.png")
  missileR = loadImage("images/MissileRed.png");
  missileY = loadImage("images/MissileYellow.png");
  missileB = loadImage("images/MissileBlue.png");
  missileG = loadImage("images/MissileGreen.png");
  rulePage = loadImage("RULES.png")
  missleBG = loadImage("images/missileBG.png")
  cityOne = loadImage("images/cityFull.png");
  cityTwo = loadImage("images/cityMiddle.png");
  cityThree = loadImage("images/cityEnd.png");
  defence = loadImage("images/Defence.png");
  bulletPack = loadImage("images/BulletPack.png");
  forceField = loadImage("images/force.png");
  forceFieldDrop = loadImage("images/forceDrop.png");
  leaderboardData= loadJSON("leaderBoard.json")
  gameFont = loadFont('Colo-Pro.otf');
  ButtonSound = loadSound("buttonS.ogg")
  rocketExplosion = loadSound("rocketEX.mp3")
  gameBacking = loadSound("gameBacking.wav")
  cityExplosion = loadSound("cityEX.mp3")
  bulletPackSound = loadSound("bulletPack.wav")
  explosion = loadAnimation('images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png');
  BGanimation = loadAnimation(
  "BG/BG-1.jpg",
  "BG/BG-2.jpg",
  "BG/BG-3.jpg",
  "BG/BG-4.jpg",
  "BG/BG-5.jpg",
  "BG/BG-6.jpg",
  "BG/BG-7.jpg",
  "BG/BG-8.jpg",
  "BG/BG-9.jpg",
  "BG/BG-10.jpg",
  "BG/BG-11.jpg",
  "BG/BG-12.jpg",
  "BG/BG-13.jpg",
  "BG/BG-14.jpg",
  "BG/BG-15.jpg",
  "BG/BG-16.jpg",
  "BG/BG-17.jpg",
  "BG/BG-18.jpg",
  "BG/BG-19.jpg",
  "BG/BG-20.jpg",
  "BG/BG-21.jpg",
  "BG/BG-22.jpg",
  "BG/BG-23.jpg",
  "BG/BG-24.jpg",
  "BG/BG-25.jpg",
  "BG/BG-26.jpg",
  "BG/BG-27.jpg",
  "BG/BG-28.jpg",
  "BG/BG-29.jpg",
  "BG/BG-30.jpg",
  "BG/BG-31.jpg",
  "BG/BG-32.jpg",
  "BG/BG-33.jpg",
  "BG/BG-34.jpg",
  "BG/BG-35.jpg",
  "BG/BG-36.jpg",
  "BG/BG-37.jpg",
  "BG/BG-38.jpg",
  "BG/BG-39.jpg",
  "BG/BG-40.jpg",
  "BG/BG-41.jpg",
  "BG/BG-42.jpg",
 "BG/BG-43.jpg",
  "BG/BG-44.jpg",
 "BG/BG-45.jpg",
 "BG/BG-46.jpg",
  "BG/BG-47.jpg",
  "BG/BG-48.jpg",
  "BG/BG-49.jpg",
  "BG/BG-50.jpg",
  "BG/BG-51.jpg",
  "BG/BG-52.jpg",
  "BG/BG-53.jpg",
  "BG/BG-54.jpg",
  "BG/BG-55.jpg",
  "BG/BG-56.jpg",
  "BG/BG-57.jpg",
  "BG/BG-58.jpg",
  "BG/BG-59.jpg",
  "BG/BG-60.jpg",
  "BG/BG-61.jpg",
  "BG/BG-62.jpg",
  "BG/BG-63.jpg",
  "BG/BG-64.jpg",
  "BG/BG-65.jpg",
  "BG/BG-66.jpg",
  "BG/BG-67.jpg",
  "BG/BG-68.jpg",
  "BG/BG-69.jpg",
  "BG/BG-70.jpg",
  "BG/BG-71.jpg",
  "BG/BG-72.jpg",
  "BG/BG-73.jpg",
  "BG/BG-74.jpg",
  "BG/BG-75.jpg",
  "BG/BG-76.jpg",
  "BG/BG-77.jpg",
  "BG/BG-78.jpg",
  "BG/BG-79.jpg",
  "BG/BG-80.jpg",
  "BG/BG-81.jpg",
  "BG/BG-82.jpg",
  "BG/BG-83.jpg",
  "BG/BG-84.jpg",
  "BG/BG-85.jpg",
  "BG/BG-86.jpg",
  "BG/BG-87.jpg",
  "BG/BG-88.jpg",
  "BG/BG-89.jpg",
  "BG/BG-90.jpg",
  "BG/BG-91.jpg",
  "BG/BG-92.jpg",
  "BG/BG-93.jpg",
  "BG/BG-94.jpg",
  "BG/BG-95.jpg",
  "BG/BG-96.jpg",
  "BG/BG-97.jpg",
  "BG/BG-98.jpg",
  "BG/BG-99.jpg",
  "BG/BG-100.jpg",
  "BG/BG-101.jpg",
  "BG/BG-102.jpg",
  "BG/BG-103.jpg",
  "BG/BG-104.jpg",
  "BG/BG-105.jpg",
  "BG/BG-106.jpg",
  "BG/BG-107.jpg",
  "BG/BG-108.jpg",
  "BG/BG-109.jpg",
  "BG/BG-110.jpg",
  "BG/BG-111.jpg",
  "BG/BG-112.jpg",
  "BG/BG-113.jpg",
  "BG/BG-114.jpg",
  "BG/BG-115.jpg",
  "BG/BG-116.jpg",
  "BG/BG-117.jpg",
  "BG/BG-118.jpg",
  "BG/BG-119.jpg",)
}

function setup() {
  createCanvas(width, height);
  explosion.looping=false;
  explosion.frameDelay = 5;
  background("black")

  gameBacking.loop();

  loading=createImg("loading.gif")
  loading.size(width,height)
  loading.position(0,0);

  LoadingPlayButton = createButton("CONTINUE");
  LoadingPlayButton.size(300,100)
  LoadingPlayButton.style('font-size', '60px', 'color', '#ffffff');
  LoadingPlayButton.style("font-family", "Colo-Pro");
  LoadingPlayButton.style('color', '#00D9FF');
  LoadingPlayButton.style('background-color', "black");
  LoadingPlayButton.hide()

  GAMEbutton=createButton("GAME");
  GAMEbutton.style('font-size', '80px', 'color', '#ffffff');
  GAMEbutton.style("font-family", "Colo-Pro");
  GAMEbutton.style('color', '#00D9FF');
  GAMEbutton.style('background-color', "black");
  GAMEbutton.size(250,100)
  GAMEbutton.hide()
  
  RULESbutton=createButton("RULES");
  RULESbutton.style('font-size', '70px')
  RULESbutton.style('color', '#00D9FF');
  RULESbutton.style('background-color', "black");
  RULESbutton.style("font-family", "Colo-Pro");
  RULESbutton.size(300,80)
  RULESbutton.hide()
  
  SCORESbutton=createButton("SCORES");
  SCORESbutton.style('font-size', '60px')
  SCORESbutton.style('color', '#00D9FF');
  SCORESbutton.style('background-color', "black");
  SCORESbutton.style("font-family", "Colo-Pro");
  SCORESbutton.size(300,80)
  SCORESbutton.hide()

  MENUbutton=createButton("MENU")
  MENUbutton.size(120,50)
  MENUbutton.style('font-size', '40px', 'color', '#ffffff');
  MENUbutton.style("font-family", "Colo-Pro");
  MENUbutton.style('color', '#00D9FF');
  MENUbutton.style('background-color', "black");
  MENUbutton.show()

  PLAYbutton=createButton("PLAY");
  PLAYbutton.style('font-size', '80px', 'color', '#ffffff');
  PLAYbutton.style("font-family", "Colo-Pro");
  PLAYbutton.style('color', '#00D9FF');
  PLAYbutton.style('background-color', "black");
  PLAYbutton.size(250,100)
  PLAYbutton.hide()

  RESETbutton=createButton("PLAY AGAIN")
  RESETbutton.size(130,100)
  RESETbutton.style('font-size', '40px', 'color', '#ffffff');
  RESETbutton.style("font-family", "Colo-Pro");
  RESETbutton.style('color', '#00D9FF');
  RESETbutton.style('background-color', "black");
  RESETbutton.hide()

  animationSprite=createSprite(0+width/2,0+height/2)
  animationSprite.addAnimation("BG", BGanimation)
  animationSprite.scale=0.6
  animationSprite.frameDelay=100 //SLOWING DOWN notworking

  BGvid = createVideo("BGvid.mov");
  BGvid.size(300,600)
  BGvid.position(55, 180)
  BGvid.hide()


  missileR.resize(55,15);
  missileY.resize(55,15);
  missileB.resize(55,15);
  missileG.resize(55,15);
  defence.resize(170,80);
  bullet.resize(20,20);

  bulletPack.resize(70,70);
  forceFieldDrop.resize(50,50);
  forceField.resize(420,200);
  
  cityOne.resize(citySizeX,citySizeY)
  cityTwo.resize(citySizeX,citySizeY)
  cityThree.resize(citySizeX,citySizeY)

  RedRockets = new Group();
  GreenRockets = new Group();
  YellowRockets = new Group();

  bullets = new Group();
  explosions = new Group();

  City = new Group();
  CityHitOneGROUP = new Group();

  leftbulletsGROUP= new Group(); 
  middlebulletsGROUP= new Group();
  rightbulletsGROUP= new Group();
  bulletPackGROUP=new Group();
  forceFieldDropGROUP=new Group();
  forceFieldGROUP=new Group();



    for (i=0; i<3; i++){
      DefenceSprite = createSprite(50+i*450, height-50, 20,50);
      DefenceSprite.addImage(defence)
    }
  
    //Create City Sprites
    for (i=0; i<2; i++){
      citySprite = createSprite(190+i*170, height-(50), 50,20);
      citySprite.addImage(cityOne)
      citySprite.setCollider('rectangle', 0, 20, 100,50); 
      City.add(citySprite)
    }
  
    for (i=0; i<2; i++){
    citySprite = createSprite(640+i*170, height-(50), 50,20);
    citySprite.setCollider('rectangle', 0, 20, 100,50); 

    citySprite.addImage(cityOne)
    City.add(citySprite)
  }
  
  gameText = createSprite();
  gameText.draw = function() {  
  textSize(15);
  textFont(gameFont)
  fill("purple")
  rect(0, 590, width*2, 20)
  fill("WHITE")
  text("BLULLETS", 25,595)
  text("BLULLETS", 477,595)
  text("BLULLETS", 927,595)
  textSize(32);
  text(leftBullets, 44,575)
  text(middleBullets, 496,575)
  text(rightBullets, 947,575)
  textSize(50);
  fill("black")
  text("SCORE: "+SCORE, 10,50)
  }
  
  RESETbutton.mouseClicked(resetGame)

for (i=0; i<15; i++){
  placeArray.push(str(leaderboardData[i].Place))
}

for (i=0; i<15; i++){
  nameArray.push(leaderboardData[i].Name)
}

for (i=0; i<15; i++){
  scoreArray.push(str(leaderboardData[i].Score))
}
for (i=0; i<15; i++){
  dateArray.push(leaderboardData[i].Date)
}

RESETbutton.mouseClicked(resetGame)

} // end of setup


function draw() {
if (currentState == LOADING) {
  PLAYbutton.hide()
  SCORESbutton.hide()
  RULESbutton.hide()
  MENUbutton.hide()

  if(frameCount%240==0) {
      loading.remove()      
      LoadingPlayButton.show()
      LoadingPlayButton.size(300,100)
      LoadingPlayButton.style('font-size', '60px', 'color', '#ffffff');
      LoadingPlayButton.style("font-family", "Colo-Pro");
      LoadingPlayButton.style('color', '#00D9FF');
      LoadingPlayButton.style('background-color', "black");
      LoadingPlayButton.position((width/2)-(LoadingPlayButton.size().width/2),(height/2)-(LoadingPlayButton.size().height/2));
      LoadingPlayButton.mouseClicked(loadingToMenu)
    } 

 
  }else if (currentState == MENU) {

    background("black") 

    image(logo,width/2-350, 20, 700, 300)
    image(missleBG,0, height-150, width, 150)

    GAMEbutton.show()
    RULESbutton.show()
    SCORESbutton.show()

    GAMEbutton.position(370,340);
    RULESbutton.position(10,410);
    SCORESbutton.position(680,410);

    GAMEbutton.mousePressed(menuToPlay);
    RULESbutton.mousePressed(menuToRules);
    SCORESbutton.mousePressed(menuToScores);


  }else if (currentState == PLAY) {
    background("black")   

    image(controls,10, 20, width-20, 300)
    image(missleBG,0, height-150, width, 150)
    GAMEbutton.hide() 
    PLAYbutton.show()
    PLAYbutton.position((width/2)-(PLAYbutton.size().width/2),350)
    PLAYbutton.mousePressed(PlayToGame)

  }else if (currentState == GAME) {

    GAMEplay();

  if (City.length==0 && CityHitOneGROUP.length==0){
    textSize(100);
    textFont(gameFont)
    text("GAME OVER",200,200)
    text("SCORE: "+SCORE,200,300)
    removeMissiles()
    RESETbutton.show()
    RESETbutton.position(420,350)
  }
  
  if (leftBullets==0 && rightBullets==0 && middleBullets==0){
    textSize(90);
    textFont(gameFont)
    text("AMMO EXHAUSTED ", 100 ,200)
    text("SCORE: "+SCORE,230,300)
    removeMissiles()
    RESETbutton.show()
    RESETbutton.position(420,350)
  }

  }else if (currentState == SCOREBOARD) {
    background("black")
    image(leaderBoard,5, 10, width-10, height)

    for (i=0; i<6; i++){
      textSize(22);
      fill("white");
      text(placeArray[i], 80, 195+i*42.5);
    }

    for (i=0; i<6; i++){
      textSize(22);
      fill("white");
      text(nameArray[i], 190, 195+i*42.5);
    }

    for (i=0; i<6; i++){
      textSize(22);
      fill("white");
      text(scoreArray[i], 310, 195+i*42.5);
    }

    for (i=0; i<6; i++){
      textSize(22);
      fill("white");
      text(dateArray[i], 420, 195+i*42.5);
    }



    for (i=6; i<12; i++){
      textSize(22);
      fill("white");
      text(nameArray[i],620, 195+(i-6)*42.5);
    }

    for (i=6; i<12; i++){
      textSize(22);
      fill("white");
      text(scoreArray[i],740, 195+(i-6)*42.5);
    }

    for (i=6; i<12; i++){
      textSize(22);
      fill("white");
      text(dateArray[i],840, 195+(i-6)*42.5);
    }

    for (i=6; i<12; i++){
      textSize(22);
      fill("white");
      text(placeArray[i],515, 195+(i-6)*42.5);
    }





    MENUbutton.show()
    MENUbutton.position(460,540);
    MENUbutton.mousePressed(scoresToMenu);

  }else if (currentState == RULES) { 
    background("black")

    image(rulePage, 0,0,width,height)

    BGvid.show()

    MENUbutton.show()
    MENUbutton.position(430,540);
    MENUbutton.mousePressed(rulesToMenu);
}

} //end of draw

function createRedRocket(x,y) {
  redMissile = createSprite(x,y, 50,2);
  redMissile.hit =  3;
  redMissile.addImage(missileR);
  redMissile.setSpeed(random(0.5,1),random(90,180))
  redMissile.setCollider('rectangle', 0, 0, 50,2); 
  redMissile.rotateToDirection = true
  // redMissile.debug = true;

  if(x<500){
    redMissile.setVelocity(random(0.5,1),random(1,3))
  } else {
    redMissile.setVelocity(random(-3,1),random(1,3))
  }
  RedRockets.add(redMissile);
  // console.log(RedRockets.length)
}

function createGreenRocket(x,y) {
  greenMissile = createSprite(x,y, 50,2);
  greenMissile.hit = 1;
  greenMissile.addImage(missileG);
  greenMissile.setSpeed(random(0.5,1),random(90,180))
  greenMissile.setCollider('rectangle', 0, 0, 50,2); 
  greenMissile.rotateToDirection = true
  // greenMissile.debug = true;

  if(x<500){
    greenMissile.setVelocity(random(0.5,1),random(1,3))
  } else {
    greenMissile.setVelocity(random(-3,1),random(1,3))
  }
  GreenRockets.add(greenMissile);
  // console.log(RedRockets.length)
}

function createYellowRocket(x,y) {
  yellowMissile = createSprite(x,y, 50,2);
  yellowMissile.hit =  2;
  yellowMissile.addImage(missileY);
  yellowMissile.setSpeed(random(0.5,1),random(90,180))
  yellowMissile.setCollider('rectangle', 0, 0, 50,2); 
  yellowMissile.rotateToDirection = true
  // yellowMissile.debug = true;

  if(x<500){
    yellowMissile.setVelocity(random(0.5,1),random(1,3))
  } else {
    yellowMissile.setVelocity(random(-3,1),random(1,3))
  }
  RedRockets.add(yellowMissile);
  // console.log(RedRockets.length)
}

function mouseClicked() {
  if (leftBullets>0){
    if (leftPlay==true){
      LEFTbullet = createSprite(activePlayerX,activePlayerY, 5,5);
      LEFTbullet.addImage(bullet);
      LEFTbullet.setCollider('rectangle', 0, 0, 10,10); 
      leftbulletsGROUP.add(LEFTbullet);
      LEFTbullet.attractionPoint(5,mouseX, mouseY)
      leftBullets--;
    }
  }

  
  if (rightBullets>0){
    if(rightPlay==true){
      RIGHTbullet = createSprite(activePlayerX,activePlayerY, 5,5);
      RIGHTbullet.addImage(bullet);
      RIGHTbullet.setCollider('rectangle', 0, 0, 10,10); 
      rightbulletsGROUP.add(RIGHTbullet);
      RIGHTbullet.attractionPoint(5,mouseX, mouseY)
      rightBullets--;
    }
  }

  if (middleBullets>0){
    if(middlePlay==true){
      MIDDLEbullet = createSprite(activePlayerX,activePlayerY, 5,5);
      MIDDLEbullet.addImage(bullet);
      MIDDLEbullet.setCollider('rectangle', 0, 0, 10,10); 
      middlebulletsGROUP.add(MIDDLEbullet);
      MIDDLEbullet.attractionPoint(5,mouseX, mouseY)
      middleBullets--;
    }
  }




}

function onHIT(bullet, rocket){
  SCORE+=50
  console.log(SCORE)
  rocket.hit--;
  bullet.remove()
  e = createSprite(bullet.position.x+60, bullet.position.y, 100,100);
  e.addAnimation("exp", explosion.clone());
  e.changeAnimation("exp");
  rocketExplosion.play();
  e.life = 40; // life of the sprite
  explosions.add(e);
  if (rocket.hit==0){
    rocket.remove()
    }
}

function PackOnHIT(bullet, pack){
  bulletPackSound.play()
  pack.remove()
}

function cityHIT(missile,citySprite){
  missile.remove()
  missile.position.y=height+100
  cityExplosion.play();
  let cityHit = createSprite(citySprite.position.x, height-(50), 5,5);
  cityHit.addImage(cityTwo)
  cityHit.setCollider('rectangle', 0, 40, 20,20); 
  cityHit.debug = true;
  CityHitOneGROUP.add(cityHit)
  e = createSprite(citySprite.position.x+60, height-(50), 100,100);
  e.addAnimation("exp", explosion.clone());
  e.changeAnimation("exp");
  e.life = 20; // life of the sprite
  explosions.add(e);
  citySprite.remove()
}

function toDie(missile,citySprite){
  e = createSprite(citySprite.position.x+60, height-(50), 100,100);
  e.addAnimation("exp", explosion.clone());
  e.changeAnimation("exp");
  e.life = 20; // life of the sprite
  explosions.add(e);
  citySprite.remove()
  missile.remove()
}

function keyPressed() {
  BGvid.loop();
  if (keyCode == RIGHT_ARROW || key == "d"){
    rightPlay=true;
    activePlayerX = width-50
  } else {
    rightPlay=false;
  }  
  if (keyCode == LEFT_ARROW || key == "a"){
    leftPlay=true;
    activePlayerX = 50
  } else {
    leftPlay=false;
  }
  if (keyCode == DOWN_ARROW || key == "s"){
    middlePlay=true;
    activePlayerX = width/2
  } else{
    middlePlay=false;
  }
}

function createBulletPack(x,y) {
  let Pack = createSprite(x,y, 20,20);
  Pack.addImage(bulletPack)
  Pack.setSpeed(random(0.5,1),0)
  Pack.setCollider('rectangle', 0, 0, 20,20); 
  Pack.rotateToDirection = true
  // Pack.debug = true;

  if(x<500){
    Pack.setVelocity(0,random(1,3))
  } else {
    Pack.setVelocity(0,random(1,3))
  }
  bulletPackGROUP.add(Pack)
  // console.log(RedRockets.length)
}

function createDropForceField(x,y) {
  forceFieldDropSprite = createSprite(x,y, 20,20);
  forceFieldDropSprite.addImage(forceFieldDrop)
  forceFieldDropSprite.setSpeed(random(0.5,1),0)
  forceFieldDropSprite.setCollider('rectangle', 0, 0, 20,20); 
  forceFieldDropSprite.rotateToDirection = true
  // Pack.debug = true;

  if(x<500){
    forceFieldDropSprite.setVelocity(0,random(1,3))
  } else {
    forceFieldDropSprite.setVelocity(0,random(1,3))
  }
  forceFieldDropGROUP.add(forceFieldDropSprite)
  // console.log(RedRockets.length)
}

function FORCEonHIT(bullet, pack){ //bullet hits forcefield drop

  rocketExplosion.play() //sound
  bullet.remove()
  for (i=0; i<2; i++){
    forceFieldSprite = createSprite(270+i*450,height-50, 20,20);
    forceFieldSprite.addImage(forceField)
    forceFieldSprite.setCollider('circle', 0, 100, 200,200); 
    // forceFieldSprite.debug = true;
    forceFieldGROUP.add(forceFieldSprite)
  }
}

function FORCEfieldHIT(missile,force){ //rocket hits forcefield 
  missile.remove()
  missile.position.y=height+100
  cityExplosion.play(); //sound
  e = createSprite(force.position.x+60, force.position.y+50, 100,100);
  e.addAnimation("exp", explosion.clone());
  e.changeAnimation("exp");
  e.life = 20; // life of the sprite
  explosions.add(e);
  force.remove()
}

function loadingToMenu(){
  ButtonSound.play()
  LoadingPlayButton.hide()
  currentState=MENU;
}

function PlayToGame(){
  ButtonSound.play()
  resetGame()
  PLAYbutton.hide()
  currentState=GAME;

}

function menuToScores(){
  ButtonSound.play()
  GAMEbutton.hide()
  RULESbutton.hide()
  SCORESbutton.hide()
  currentState=SCOREBOARD;
}

function menuToRules(){
  ButtonSound.play()
  BGvid.loop();
  GAMEbutton.hide();
  RULESbutton.hide();
  SCORESbutton.hide();
  currentState=RULES;
}

function rulesToMenu(){
  ButtonSound.play()
  MENUbutton.hide()
  BGvid.hide()
  currentState=MENU;

}

function scoresToMenu(){
  ButtonSound.play()
  MENUbutton.hide()
  currentState=MENU;
}

function gameToMenu(){
  ButtonSound.play()
  RESETbutton.hide()
  MENUbutton.hide()
  removeMissiles()
  removeCities()
  currentState=MENU;
}

function menuToPlay(){
  ButtonSound.play()
  PLAYbutton.hide()
  RULESbutton.hide()
  SCORESbutton.hide()
  currentState=PLAY;

}

function GAMEplay(){
  background("black")
  PLAYbutton.hide()

  //draw rockets
    // if(frameCount%FiveMinsPlay){
      if(frameCount%redRocketFreq == 0) {
        createRedRocket(random(0,700),0) // at a certain point of the game add more RedRockets to make it harder
    }
      if(frameCount%greenRocketFreq == 0) {
        createGreenRocket(random(0,700),0) // at a certain point of the game add more RedRockets to make it harder
    }
      if(frameCount%yellowRocketFreq == 0) {
        createYellowRocket(random(0,700),0) // at a certain point of the game add more RedRockets to make it harder
    // }
  }
  
  
  //draw bulletPack
    if(frameCount%900 == 0) {
      createBulletPack(random(0,700),0) // at a certain point of the game add more RedRockets to make it harder
  }
  
  //draw ForceField
  if(frameCount%3000 == 0) {
    createDropForceField(random(0,700),0) // at a certain point of the game add more RedRockets to make it harder
  }
  
  //remove RedRockets when off the screen
    for(let i = 0; i<RedRockets.length; i++){
      if(RedRockets[i].position.x < 0 || RedRockets[i].position.x > width || RedRockets[i].position.y > height){
        RedRockets[i].remove();
      }
    }
  
  //remove Green Rockets when off the screen
    for(let i = 0; i<GreenRockets.length; i++){
      if(GreenRockets[i].position.x < 0 || GreenRockets[i].position.x > width || GreenRockets[i].position.y > height){
        GreenRockets[i].remove();
  
      }
    }  
  
  //remove YellowRockets when off the screen
  for(let i = 0; i<YellowRockets.length; i++){
    if(YellowRockets[i].position.x < 0 || YellowRockets[i].position.x > width || YellowRockets[i].position.y > height){
      YellowRockets[i].remove();
  
    }
  }

    //remove leftBullets when off the screen
    for(let i = 0; i<leftbulletsGROUP.length; i++){
      if(leftbulletsGROUP[i].position.x < 0 || leftbulletsGROUP[i].position.x > width || leftbulletsGROUP[i].position.y > height){
        leftbulletsGROUP[i].remove();
      }
    }
  
  //remove Middle Bullets when off the screen
    for(let i = 0; i<middlebulletsGROUP.length; i++){
      if(middlebulletsGROUP[i].position.x < 0 || middlebulletsGROUP[i].position.x > width || middlebulletsGROUP[i].position.y > height){
        middlebulletsGROUP[i].remove();
  
      }
    }  
  
  //remove Right Bullets when off the screen
  for(let i = 0; i<rightbulletsGROUP.length; i++){
    if(rightbulletsGROUP[i].position.x < 0 || rightbulletsGROUP[i].position.x > width || rightbulletsGROUP[i].position.y > height){
      rightbulletsGROUP[i].remove();
  
    }
  }
  
  //Call function if bullets and rockets overlap
  
    leftbulletsGROUP.overlap(RedRockets, onHIT)
    middlebulletsGROUP.overlap(RedRockets, onHIT)
    rightbulletsGROUP.overlap(RedRockets, onHIT)
  
    leftbulletsGROUP.overlap(GreenRockets, onHIT)
    middlebulletsGROUP.overlap(GreenRockets, onHIT)
    rightbulletsGROUP.overlap(GreenRockets, onHIT)
  
    leftbulletsGROUP.overlap(YellowRockets, onHIT)
    middlebulletsGROUP.overlap(YellowRockets, onHIT)
    rightbulletsGROUP.overlap(YellowRockets, onHIT)
  
    City.overlap(RedRockets, cityHIT)
    City.overlap(YellowRockets, cityHIT)
    City.overlap(GreenRockets, cityHIT)
  
    CityHitOneGROUP.overlap(RedRockets, toDie)
    CityHitOneGROUP.overlap(YellowRockets, toDie)
    CityHitOneGROUP.overlap(GreenRockets, toDie)
  
    leftbulletsGROUP.overlap(forceFieldDropGROUP, FORCEonHIT)
    middlebulletsGROUP.overlap(forceFieldDropGROUP, FORCEonHIT)
    rightbulletsGROUP.overlap(forceFieldDropGROUP, FORCEonHIT)
  
    forceFieldGROUP.overlap(RedRockets, FORCEfieldHIT)
    forceFieldGROUP.overlap(YellowRockets, FORCEfieldHIT)
    forceFieldGROUP.overlap(GreenRockets, FORCEfieldHIT)
  
  //bulletPack is hit
    if (leftbulletsGROUP.overlap(bulletPackGROUP, PackOnHIT)){
      leftBullets+=10
    }
  
    if (rightbulletsGROUP.overlap(bulletPackGROUP, PackOnHIT)){
      rightBullets+=10
    }
  
    if (middlebulletsGROUP.overlap(bulletPackGROUP, PackOnHIT)){
      middleBullets+=10
    }
  
    MENUbutton.show()
    MENUbutton.position(width-125,20);
    MENUbutton.mousePressed(gameToMenu);

    drawSprites();
  
}

function resetGame(){
  
  ButtonSound.play()

  removeCities()
  RESETbutton.hide()


  for (i=0; i<2; i++){
  citySprite = createSprite(190+i*170, height-(50), 50,20);
  citySprite.addImage(cityOne)
  citySprite.setCollider('rectangle', 0, 20, 100,50); 
// citySprite.debug = true;
  City.add(citySprite)
}

  for (i=0; i<2; i++){
  citySprite = createSprite(640+i*170, height-(50), 50,20);
  citySprite.setCollider('rectangle', 0, 20, 100,50); 
  // citySprite.debug = true;
  citySprite.addImage(cityOne)
  City.add(citySprite)
  }

  leftBullets=20
  rightBullets=20
  middleBullets=20
  SCORE=0
  }

function removeMissiles(){
  for(let i = 0; i<RedRockets.length; i++){
    RedRockets[i].remove();
  }
  for(let i = 0; i<GreenRockets.length; i++){
    GreenRockets[i].remove();
  }
  for(let i = 0; i<YellowRockets.length; i++){
    YellowRockets[i].remove();
  }
}

function removeCities(){
  //and force field
  for (let i = 0; i<forceFieldGROUP; i++){
    forceFieldGROUP[i].remove();
  }


  for(let i = 0; i<City.length; i++){
    City[i].remove();
  }
  for(let i = 0; i<CityHitOneGROUP.length; i++){
    CityHitOneGROUP[i].remove();
  }
}
