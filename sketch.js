var  database, state=0,count=0
var game, form, player
var allplayers
var car1image,car2image,car3image,car4image
var trackimage,groundimage
var car1,car2,car3,car4
var cars
function preload(){
car1image = loadImage("car1.png")
car2image = loadImage("car2.png")
car3image = loadImage("car3.png")
car4image = loadImage("car4.png")
trackimage = loadImage("track.jpg")
groundimage = loadImage("ground.png")

}
  

function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth,displayHeight);
game=new Game()
 game.readgamestate ()
game.check()

  
}

function draw(){
  background("white");
  if(count==4){
    game.writegamestate(1)
  }
 if(state==1) 
 {
   game.playGame()
 }
  
}
