var GameStage = enchant.Class.create(enchant.Scene, {
    
    initialize: function()
    {
        //初期化
        enchant.Scene.call(this);
        
        //地面
        var ground = new Ground(0, 232); //生成
        this.addChild(ground);           //表示
        
        //メインキャラ
        bear = new Bear(0, 200); //生成
        this.addChild(bear);     //登場
        var speed = 10;          //移動スピード
        ball = new Ball(0,0);
        
        //頻度設定
        difficulty = 1;
        
        //クリアまでのカウント
        stage = 1;
        clearPoint = 10;
        count = 0;
        ruikei = 0;
        
        //現在のステージ
        var info = new Label("ステージ" + stage);
        this.addChild(info);
        
        //倒したクマの数
        var kumaCount = new Label("出現数=" + ruikei);
        kumaCount.x = 100;
        this.addChild(kumaCount);
        
        //フレーム遷移時
        this.addEventListener("enterframe", function () {
            
            //クマの移動処理
            //上ボタン押下時
            if(game.input.up) {
                
                //ボールを発射
                ball = new Ball(bear.x , 200);
                this.addChild(ball);
            }
            
            //右ボタン押下時
            if(game.input.right) {
                
                //枠からハミ出したら移動中断
                if ( bear.x > 288 ) {
                    return;
                }
                bear.x += speed;
                var sound = game.assets['Hit01-1.mp3'].clone();
                sound.play();
            }
            
            //左ボタン押下時
            if(game.input.left) {
                
                //枠からハミ出したら移動中断
                if ( bear.x < 0 ) {
                    return;
                }
                bear.x -= speed;
                var sound = game.assets['Hit01-1.mp3'].clone();
                sound.play();
            }
            
            //敵出現
            if(game.frame % (game.fps - difficulty) == 0){
                
                //敵の出現位置をランダムにする計算
                var xPosition = Math.random() * 288;
                
                //敵生成
                var enemy = new Enemy(xPosition, 0 , difficulty);
                this.addChild(enemy);
                count++;
                ruikei++;
                kumaCount.text = "出現数=" + ruikei;
            }
            
            //クリア
            if (clearPoint == count ) {
                count = 0;
                clearPoint += 5;
                difficulty ++;
                stage++;
                info.text = "ステージ" + stage
                speed += 2;
            }
            
            
        });
    },
    
    
    
});