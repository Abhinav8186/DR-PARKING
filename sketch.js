var wall1, wall2, wall3, wall4;
var border, border1, border2, border3;
var c1;
var score = 0
function preload() {
  bg = loadSound("sounds/ss.mp3");
  unlock = loadSound("sounds/pkpk.mp3");
  bar = loadImage("IMAGES/barrie.png");
  bar1 = loadImage("IMAGES/pothole.png");
  bar2 = loadImage("IMAGES/right.png");

  wow = loadSound("sounds/aplause.mp3")
  car1 = loadImage("IMAGES/honda city.png");
  plate = loadImage("IMAGES/3.jpg");
  car_2 = loadImage("IMAGES/a.png");
  car_3 = loadImage("IMAGES/b.png");
  car_4 = loadImage("IMAGES/c.png");
  car2 = loadImage("IMAGES/mini cooper.png");
  car3 = loadImage("IMAGES/cts.png");
  car4 = loadImage("IMAGES/car.png");
  here = loadImage("IMAGES/here.jpg");
  good = loadImage("IMAGES/good.jpg");
}
function setup() {
  createCanvas(1536, 752);

  bg.loop();
  border = createSprite(70, 10, 3000, 30)
  border.shapeColor = "brown"
  border1 = createSprite(70, 738, 3000, 30)
  border1.shapeColor = "brown"
  border2 = createSprite(10, 450, 30, 850)
  border2.shapeColor = "brown"
  border3 = createSprite(1522, 450, 30, 850)
  border3.shapeColor = "brown"
  // parking lot
  wall1 = createSprite(150, 160, 250, 10)
  wall1.shapeColor = "white"
  wall2 = createSprite(150, 300, 250, 10)
  wall2.shapeColor = "white"
  wall3 = createSprite(150, 450, 250, 10)
  wall3.shapeColor = "white"
  wall4 = createSprite(150, 600, 250, 10)
  wall4.shapeColor = "white"
  wall5 = createSprite(1383, 600, 250, 10)
  wall5.shapeColor = "white"
  wall6 = createSprite(1383, 450, 250, 10)
  wall6.shapeColor = "white"
  wall8 = createSprite(1383, 300, 250, 10)
  wall8.shapeColor = "white"
  wall9 = createSprite(1383, 160, 250, 10)
  wall9.shapeColor = "white"
  wall10 = createSprite(600, 600, 10, 250)
  wall10.shapeColor = "white"
  wall11 = createSprite(790, 600, 10, 250)
  wall11.shapeColor = "white"
  wall10 = createSprite(980, 600, 10, 250)
  wall10.shapeColor = "white"
  template = createSprite(800, 140)
  template.addImage(plate)
  template.scale = 0.8
  //parking
  yaha = createSprite(690,700)
  yaha.addImage(here)
  yaha.scale = 0.05
  yaha1 = createSprite(890,700)
  yaha1.addImage(here)
  yaha1.scale = 0.05
  yaha1.visible = 0
  yaha2 = createSprite(1400,650)
  yaha2.addImage(here)
  yaha2.scale = 0.05
  yaha2.visible = 0

  yaha3 = createSprite(100,650)
  yaha3.addImage(here)
  yaha3.scale = 0.05
  yaha3.visible = 0

  yaha4 = createSprite(1400,200)
  yaha4.addImage(here)
  yaha4.scale = 0.05
  yaha4.visible = 0

  //cars
  c1 = createSprite(150, 370)
  c1.addImage(car1)
  c1.scale = 0.3
  c2 = createSprite(150, 530)
  c2.addImage(car2)
  c2.scale = 0.7
  c3 = createSprite(150, 230)
  c3.addImage(car3)
  c3.scale = 0.8 
  c4 = createSprite(1380, 380)
  c4.addImage(car4)
  c4.scale = 0.5  
  c5 = createSprite(1380, 80)
  c5.addImage(car1)
  c5.scale = 0.3
  temp = createSprite(1250,520)
  temp.addImage(bar)
  temp.scale = 0.5   
  temp1 = createSprite(1350,570)
  temp1.addImage(bar2)
  temp1.scale = 0.5
  temp2 = createSprite(1450,570)
  temp2.addImage(bar2)
  temp2.scale = 0.5
  temp3 = createSprite(1380,520)
  temp3.addImage(bar1)
  temp3.scale = 0.5
  template1 = createSprite(800,380)
  template1.addImage(good)
  template1.scale = 1
  template1.visible = 0  
  unlock.play()


}
function draw() {
  background(169, 169, 169)


  if (keyDown("right")) {
    c1.x = c1.x + 4
    c1.addImage(car1)

  } else if (keyDown("left")) {
    c1.x = c1.x - 4
    c1.addImage(car_3)

  } else if (keyDown("up")) {
    c1.y = c1.y - 4
    c1.addImage(car_2)

  } else if (keyDown("down")) {
    c1.y = c1.y + 4   
    c1.addImage(car_4)
  }

  stroke(2)
  textSize(20)
  fill("black")
  text("YOUR CAR IS THE HONDA CITY follow the park here sign.",50,60)
  text("PARK UNTILL THE SIGN CHANGES IT'S POSITION",50,90)
  c1.collide(border)
  c1.collide(border1)
  c1.collide(border2)
  c1.collide(border3)
  c1.collide(c2)
  c1.collide(c3)
  c1.collide(c4)
  c1.collide(c5)
  c1.collide(temp)
  c1.collide(temp1)
  c1.collide(temp2)
  if(c1.isTouching(yaha)){
    yaha.visible = 0
    yaha.y = 1000
    yaha1.visible = 1
  }else if(c1.isTouching(yaha1)){
    yaha1.visible = 0
    yaha1.y = 1000
    yaha2.visible = 1

  }else if(c1.isTouching(yaha2)){
    yaha2.visible = 0
    yaha2.y = 1000
    yaha3.visible = 1
  }else if(c1.isTouching(yaha3)){
    yaha3.visible = 0
    yaha3.y = 1000
    yaha4.visible = 1
  }else if(c1.isTouching(yaha4)){
    yaha4.visible = 0
    template1.visible = 1
    yaha4.y = 1000
    wow.play();

  }
  drawSprites()
}