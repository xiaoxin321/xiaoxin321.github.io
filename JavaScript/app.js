/**
 * Created by xiaoxin111 on 2016/1/25.
 */
$(document).ready(function () {
    $(window).on("load",function(){
        imgLocation();
        var imgData = {
            "data": [{"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"},
                {"src": "6.jpg"}, {"src": "7.jpg"}, {"src": "8.jpg"},{"src": "9.jpg"},{"src": "10.jpg"},{"src": "12.jpg"}]
        };
        window.onscroll= function () {
                if(scrollside()){
                    $.each(imgData.data,function(index,value){
                        var box =$("<div>").addClass("box").appendTo("#container");
                        var content=$("<div>").addClass("content").appendTo(box);

                        $("<img>").attr("src","image/"+$(value).attr("src")).appendTo(content);

                        var arr=["后知后觉","雪梨町","罗勒松子","阿贵视觉","ShortHairGirls","ZHOUMANTING","巴艮","StruggleXin"];

                        var caption=$("<div>").addClass("caption").appendTo(content);
                        $("<h4>").text(arr[index]).appendTo(caption);

                        var  arr1=["问世间情为何物,直教人生死相许","简单的事，傻傻的，每天嘻嘻哈哈过日子",
                               "因为我觉得人有时候糊涂一些更快乐","能成为朋友，是上辈子修来的缘分",
                            "梦；总不够漫长可我们需要梦想","情；总让人受伤可我们还念念不忘","留一份平静在心中，留一些朋友在身边",
                            "跨过去了，就是一片无限广阔的天地，那里有彩虹"];

                        $("<p>").text(arr1[index]).appendTo(caption);

                        var pq=$("<p>").appendTo(caption);

                        $("<a>").text("点赞").addClass("btn").addClass("btn-primary").appendTo(pq);
                        $("<a>").text("关注").addClass("btn").addClass("btn-default").addClass("pq").appendTo(pq);

                   });
                }
                imgLocation();
        };
    }) ;
});

function  scrollside(){
    var box =$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight=$(document).height();
    var scrollHeight=$(window).scrollTop();
    return (lastboxHeight<documentHeight+scrollHeight)?true:false
}

function  imgLocation(){
    var box =$(".box");
    var boxWidth=box.eq(0).width();
    var num=Math.floor($(window).width()/boxWidth)-0.8;
    var boxArr=[];
    box.each(function (index,value) {
        //console.log(index+"-----"+value);
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
            //console.log(boxHeight);
        }else{
           var  minboxHeight=Math.min.apply(null,boxArr);
            //console.log(minboxHeight);
            var minboxIndex= $.inArray(minboxHeight,boxArr);
            //console.log(minboxIndex);
            //console.log(value);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });

            boxArr[minboxIndex]+=(box.eq(index).height());
        }
    });
}