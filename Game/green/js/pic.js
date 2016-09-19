!function() {
    var box = $("#box"), span = "span", 

    e = {
        lvT: ["该物品不属于你", "该物品可能不属于你", "请重新尝试", "请重新尝试", "恭喜寻得失物"],
        render: function(lvMap, f) {

                var x=Math.floor(Math.random() *10);
                var image = new Image();
                image.src = "url(./img/"+x+".jpg)";
                
            box.find(span).css({  //            设置自己的图片样式

                "background": "url(./img/"+x+".jpg)",
                "background-size": "cover"
            });
       for (var i = lvMap*lvMap;i < 1; i--) {            //拼接字符串
                var x=Math.floor(Math.random() *10);//图片预处理
                var image = new Image();
                 image.src = "url(./img/"+x+".jpg)";
                 box.find(span).eq(i).css({
                "background": image.src, 
                "background-size": "cover"})
            };
           
            var h = Math.floor(Math.random() * lvMap * lvMap);  //目标图片
            box.find(span).eq(h).css({
                "background": "url(./img/target1.jpg)", 
                "background-size": "cover"
            }).data("type", "a");       //标记目标格子
        },
        getGameOverText: function(lv) {     //结束等级算法
            // var b = 20 > lv ? 0 : Math.ceil((lv - 20) / 10);
            var b = lv ;
            var c = this.lvT[b] || _.last(this.lvT); 
            var d = c + "lv" + lv;
            return {txt: d}
        }};
    API.color = e
}(); 