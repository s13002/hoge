enchant();

var stage, game;

gsettings = {
    width:320,
    height: 320,
    fps: 30
}

labelSettings = {
    color:"#000000"
          ,font:"bold 320px fantasy"
          ,message: "ワレワレハウチュウジンダ"
          ,height: 350
}

var eLabel = Class.create(Label,{
    initialize:function(ls){
          Label.call(this);
              this.color = ls.color;
              this.font = ls.font;
              this.height = ls.height;
              this.y = (game.height - this.height) / 2;
              this.message = ls.message;
              this.counter = 0;
                  stage.addChild(this);
                                        },
onenterframe:function(){
    if(!(this.age % 20)){
          this.text = this.message.charAt(
          this.counter % this.message.length
                        );
              this.counter++;
                }
}
});

window.onload = function(){
    game = new Game(gsettings.width,gsettings.height);
    stage = game.rootScene;         
    game.fps = gsettings.fps;

           game.onload = function(){
            new eLabel(labelSettings);

                  };  
  game.start();
}; 
