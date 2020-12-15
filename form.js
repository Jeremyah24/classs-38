class Form
{
 constructor()   
 {
  this.Heading=createElement("h2")
  this.inputBox=createInput("name")
  this.button= createButton("play")
  this.greeting= createElement('h2')
  this.reset= createButton("reset")
 }
 display()
 {
     
   this.Heading.html("Car Racing Game")
  this.Heading.position(130,0)
   
   this.inputBox.position(130,170)
   
   this.button.position(250,200)
  this. button.mousePressed(()=>{
   this.inputBox.hide() 
   this.button.hide()  
   player.name=this.inputBox.value() 
   count=count+1
   player.position=count
   player.writecount(count)
   player.updatename()
   
  this.greeting.html("WELCOME TO THE GAME "+player.name)
  this.greeting.position(200,200)

   })
   this.reset.position(200,200)
this.reset.mousePressed(()=>{
player.writecount(0)
game.writegamestate(0)
var c=database.ref('allplayers')
c.remove()
})
 }
 hide()
 {
   
   this.greeting.hide()
   this.inputBox.hide()
   this.button.hide()
 }
}