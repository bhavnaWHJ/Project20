var car, carImg;
var wall;
var carDeform, carDeform1;

function preload(){
     carImg = loadImage("car.png");
     carDeform1 = loadImage("carCrash3.png");
     carDeform = loadImage("carCrash2.png");

}

function setup(){
 createCanvas(800,500);
 car = createSprite(50,250,200,200);
 car.addImage("car", carImg);
 //car.addAnimation("deformed1",carDeform1);
 //car.addAnimation("deformed",carDeform)
 // car.scale = 0.5;
 car.velocityX = 4;

 wall = createSprite(700,250,20,500);
 wall.shapeColor="red";

 speed = random(55,90);
 //console.log(speed);
 weight = random(400,1500);

 car.velocityX = speed;

}
function draw(){
  background(0);

  if(wall.x-car.x <= wall.width/2 + car.width/2) {

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed /22509;

    if(deformation > 180){
       
      car.changeImage("deformed", carDeform);
      //car.shapeColor = "red"
    }
    if(deformation<180 && deformation > 100){

      car.addImage("deformed1", carDeform1)
      //car.shapeColor = "blue"
    }
    if(deformation<100){

      car.addImage("car", carImg);
     //car.shapeColor = "green";
    }
  }

  

   

  drawSprites();
}