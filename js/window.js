define(['jquery'],function($){
    function Window(){
        this.setting = {
            width:500,
            height:300,
            handler:function(){
                alert('你点击了')
            },
            title:"弹出框的头",
            content:"弹出框显示内容",
            hasCloseBtn:false
        }
    };

    Window.prototype = {
        alert:function(setting){
            var Set = $.extend(this.setting,setting);
            var alertBox = $('<div class="alertBox"></div>');
            var alertTitle = $('<h2 class="alert_title">'+Set.title+'</h2>');
            var alertContent = $('<p class="alert_content">'+Set.content+'</p>');
            var alertBtn = $('<a href="javascript:void(0)" class="alert_yesBtn">确定</a>');
            alertBox.appendTo('body');
            alertTitle.appendTo(alertBox);
            alertContent.appendTo(alertBox);
            alertBtn.appendTo(alertBox);
            alertBtn.on('click',function(){
                Set.handler && Set.handler();
                alertBox.remove();
            });

            alertBox.css({
                width:Set.width + "px",
                height:Set.height + "px",
                left:(Set.x || (window.innerWidth - Set.width) / 2) + "px",
                top:(Set.y || (window.innerHeight - Set.height) / 2) + "px"
            });
        }
    };
    return{
        Window:Window
    }
});