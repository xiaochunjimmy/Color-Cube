window.onload = function() {
    var oCube = document.querySelector('#space');
    var y = -30;
    var x = 30;
    oCube.onmousedown = function(ev) { //鼠标按下事件
        var oEvent = ev || event;
        var disX = oEvent.clientX - y;
        var disY = oEvent.clientY - x;
        document.onmousemove = function(ev) { //鼠标移动事件
            var xEvent = ev || event;
            x = xEvent.clientY - disY; //计算鼠标移动的角度
            y = xEvent.clientX - disX;
            oCube.style.transform = 'perspective(800px) rotateX(' + -x + 'deg) rotateY(' + y + 'deg)'; //将鼠标移动的角度写入CSS
        };
        document.onmouseup = function() { //鼠标抬起事件，清除鼠标移动事件
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
};
