enchant();

/*
 *ウィンドウが開いた時の処理
 *ゲームオブジェクトの生成
 *ゲーム全般の設定を行う
 */
window.onload = function () {

    
    //ゲームオブジェクト生成
    game = new Game(320, 320);
    
    //fmp設定
    game.fps = 15;
    
    //アセットの読み込み
    game.preload("chara1.png");
    game.preload("map2.png");
    game.preload("Hit01-1.mp3");
    game.preload("Hit01-2.mp3");
    
    /*
     *ゲーム開始時の処理
     *ルートシーンへのスプライトの配置
     */
    game.onload = function(){
        
        //シーンを移動
        gameStage = new GameStage();
        game.pushScene(gameStage);
    }
    
    //ゲーム開始
    game.start();
    
    
}