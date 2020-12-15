class Game
{
    constructor()
    {

    }
    readgamestate()
    {
        var Game= database.ref('gameState');
    Game.on("value",function(data){
     state=data.val()   
    });   
    }
    writegamestate(a)
    {
        database.ref('/').update({
            'gameState': a
            
          })    
    }
    check()
    {
     if(state==0)   
     {
         player=new Player()
         player.readcount()
      form=new Form() 
      form.display()  
     }
     car1 = createSprite(100,200)
     car1.addImage(car1image)
     car2 = createSprite(300,200)
     car2.addImage(car2image)
     car3 = createSprite(500,200)
     car3.addImage(car3image)
     car4 = createSprite(700,200)
     car4.addImage(car4image)
     cars = [car1,car2,car3,car4]

    }
playGame(){
    Player.readallplayers()
    form.hide()
    var y=50
    var i = 0
    var x = 0
    for(var p in allplayers)
    {
        console.log("hide")
        x= x+200
        y= displayHeight-allplayers[p].distance
        cars[i].x=x
        cars[i].y=y
        i=i+1
     }
        if(keyIsDown(UP_ARROW)&&player.position!=null)
        
        {
         player.distance=player.distance+50   
         player.updatename()
        }
    
}
}