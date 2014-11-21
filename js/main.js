function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
    $( "div.box" ).on( "swipeleft", swipeleftHandler );

}

function onDeviceReady() {
    alert("device is ready!");
    $("#dealcta").click(function(){
	    var hover = $(".dealHover");
	    var w = $(document);
	    hover.width(w.width()*0.8);
	    hover.height(w.width()*0.8);
	    var h = hover.height();
	    hover.css("top", w.height()/4);
	    hover.css("left", w.width()*0.1);
	    hover.html('<img src="img/Check.png" height="'+h*0.5+'px" width="'+h*0.5+'px" style="margin: 40px;" /><div class="green" style="font-size:'+w.width()*0.1+'px;">DEAL!</div>');
	    hover.fadeIn();
	    setTimeout(function(){ hover.fadeOut(); }, 2500);
    });
    $("#nowaycta").click(function(){
	    var hover = $(".dealHover");
	    var w = $(document);
	    hover.width(w.width()*0.8);
	    hover.height(w.width()*0.8);
	    var h = hover.height();
	    hover.css("top", w.height()/4);
	    hover.css("left", w.width()*0.1);
	    hover.html('<img src="img/noway.png" height="'+h*0.4+'px" width="'+h*0.4+'px" style="margin: 40px;" /><div class="red" style="font-size:'+w.width()*0.1+'px;">NO WAY!</div>');
	    hover.fadeIn();
	    setTimeout(function(){ hover.fadeOut(); }, 2500);
    });
    function swipeleftHandler( event ){
    	alert('swipe');
	}
}