// 字体自适应
$(function (){
    (function () {
        var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        var timeoutId;
        function setRem() {
            var clientWidth = document.documentElement.clientWidth;
            var clientHeight = document.documentElement.clientHeight;
            var nowPX = clientWidth / 320 * 100;
            document.documentElement.style.fontSize = nowPX + 'px';
        }
        setRem();
        window.addEventListener(supportsOrientationChange, function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                setRem();
            }, 300);
        }, false);
    })();
//	window.applicationCache
//  	.addEventListener(
//  	"updateready",
//  	function(){
//      //筛选状态
//      if(window.applicationCache.status==window.applicationCache.UPDATEREADY){
//          window.applicationCache.swapCache();
//			window.applicationCache.update();
//      }
//  }
//  ,false);
	window.applicationCache.addEventListener('updateready',function(e){
	    if(window.applicationCache.status == window.applicationCache.UPDATEREADY){
	        window.applicationCache.swapCache();
	        
//	        if(confirm("loding new?")){
	            window.location.reload()
//	        }
	    }
	},false) 
    
 });