var Ball = enchant.Class.create(enchant.Sprite, {
    
    initialize: function(x , y)
    {
        enchant.Sprite.call(this, 32, 32);
        
        //位置
        this.x = x;
        this.y = y;
        
        //画像
        this.image = game.assets["chara1.png"];
        this.frame = 10;
        
        //移動スピード
        var speed = 1;
        
        this.addEventListener("enterframe", function() {
            
            //上へ移動
            speed += 6;
            this.y -= speed;
        });
        
    }

});