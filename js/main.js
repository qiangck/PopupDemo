require.config({
    paths:{
        jquery:'http://libs.baidu.com/jquery/2.0.0/jquery'
    }
});

require(['jquery','window'],function($,w){
    new w.Window().alert({
        content:"Hello,world",
    });
}); 