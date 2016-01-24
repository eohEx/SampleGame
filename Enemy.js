var Enemy = enchant.Class.create(enchant.Sprite, {
    
    initialize: function(x , y , difficulty)
    {
        enchant.Sprite.call(this, 32, 32);
        
        //位置
        this.x = x;
        this.y = y;
        
        //画像
        this.image = game.assets["chara1.png"];
        this.frame = 5;
        
        //移動スピード
        var speed = difficulty;
        
        this.addEventListener("enterframe", function() {
            
            //下へ移動
            this.y += speed;
            
            //ボールとの衝突判定
            if (this.intersect(ball)){
                this.parentNode.removeChild( this );
                var sound = game.assets['Hit01-2.mp3'].clone();
                sound.play();
            }
            
            //クマとの衝突判定
            if (this.intersect(bear)){
                alert("ゲームオーバー");
                location.reload();
            }
            
            //床との衝突判定
            if (this.y > 200){
                location.reload();
            }
            
            
        });
        
    }

});