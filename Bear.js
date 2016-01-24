//クマクラス
var Bear = enchant.Class.create(enchant.Sprite, {
    
    initialize: function (x, y) {
        enchant.Sprite.call(this, 32, 32);
        
        //移動スピード
        var speed = 15;
        
        //位置
        this.x = x;
        this.y = y;
        
        //画像
        this.image = game.assets["chara1.png"];
        this.frame = 1;
        
        
        //フレーム遷移時
        this.addEventListener("enterframe", function () {
            
            
        });
        
        //タッチ時
        this.addEventListener("touchstart", function() {
            
            
        });   
    }
});