//地面クラス
var Ground = enchant.Class.create(enchant.Map,
{

	initialize: function(x,y)
	{
        //初期化
		Map.call(this,16,16);
        
        //画像と位置
		this.image = game.assets["map2.png"];
		var k = 2; //壁
		this.x = x;
        this.y = y;
        
        //Mapデザイン
		var mapArray = 
		[
			[k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k],
            [k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k]
		]
		this.loadData(mapArray);

//		this.collisionData = 
//		[
//			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	//	[
	}


});