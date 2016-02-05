/**
 * 涂鸦板
 * Created by QZD on 2016/1/29.
 */
$(document).ready(function(){
    var startLine=false;
    var drawable=false;
    var mainCanva=$("#mainCanvas");
    var cxt=mainCanva[0].getContext("2d");//要用[0]来获取对象
    cxt.lineWidth=5;

    //获得画板初始位置
    var x0=mainCanva.offset().left;
    var y0=mainCanva.offset().top;
    //监听窗口大小变化
    $(window).resize(function(){
        x0=mainCanva.offset().left;
        y0=mainCanva.offset().top;
    });

    $("#btn1").click(function(){btnClick(1)});
    $("#btn2").click(function(){btnClick(2)});
    $("#btn3").click(function(){btnClick(3)});
    $("#btn4").click(function(){btnClick(4)});
    $("#btn5").click(function(){btnClick(5)});
    $("#btn6").click(function(){btnClick(6)});
    $("#btn7").click(function(){btnClick(7)});
    $("#btn8").click(function(){btnClick(8)});
    $("#btn9").click(function(){btnClick(9)});
    $("#s1").click(function(){btnClick(10)});
    $("#s2").click(function(){btnClick(11)});
    $("#s3").click(function(){btnClick(12)});
    $("#s4").click(function(){btnClick(13)});
    $("#btnClean").click(function(){btnClick(100)});
    $("#btnSave").click(function(){savePic()});

    mainCanva.mousemove(function(){
        drawMove(event.pageX,event.pageY);
    });
    mainCanva.mousedown(function(){
        drawable=true;
        cxt.beginPath();
    });
    mainCanva.mouseup(function(){
        drawable=false;
        startLine=false;
        cxt.closePath();
    });

    function btnClick(index){
        switch (index){
            case 1:
                cxt.strokeStyle="#FF0000";
                break;
            case 2:
                cxt.strokeStyle="#FFA500";
                break;
            case 3:
                cxt.strokeStyle="#FFFF00";
                break;
            case 4:
                cxt.strokeStyle="#008000";
                break;
            case 5:
                cxt.strokeStyle="#00805A";
                break;
            case 6:
                cxt.strokeStyle="#0000FF";
                break;
            case 7:
                cxt.strokeStyle="#800080";
                break;
            case 8:
                cxt.strokeStyle="#000000";
                break;
            case 9:
                cxt.strokeStyle="#ffffff";
                break;
            case 10:
                cxt.lineWidth=1;
                break;
            case 11:
                cxt.lineWidth=2;
                break;
            case 12:
                cxt.lineWidth=5;
                break;
            case 13:
                cxt.lineWidth=10;
                break;
            case 100:
                cxt.clearRect(0,0,600,600);
                break;
        }
    }
    function drawMove(pointX,pointY){
        if(drawable){
            //$("#testTxt").text(pointX + "," + pointY);
            var _x=pointX-x0;
            var _y=pointY-y0;
            if(startLine){
                cxt.lineTo(_x,_y);
                cxt.stroke();
            }else{
                cxt.moveTo(_x,_y)
                startLine=true;
            }
        }
    }
    function  savePic(){
        var image = mainCanva[0].toDataURL("image/png").replace("image/png", "image/octet-stream;filename=pic.png");
        //window.location.download="pic.png";
        window.location.href=image;
    }
});