class Player
{
    constructor()
    {
this.name=null
this.distance=0
this.position=null
    }
    readcount()
    {
        var Game= database.ref('playerCount');
    Game.on("value",function(data){
     count=data.val()   
    });   
    }
    writecount(a)
    {
        database.ref('/').update({
            'playerCount': a
            
          })    
    }
    updatename()
    {

        var playerName= "allplayers/player"+this.position
        database.ref(playerName).set({
            'name': this.name,
            'distance': this.distance
            
          })    
    }
    static readallplayers()
    {
        var Game= database.ref('allplayers');
    Game.on("value",function(data){
     allplayers=data.val()   
    });   
    }
}