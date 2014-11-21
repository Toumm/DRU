function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    alert("device is ready!");
    $("#dealcta").click(function(){
	    var hover = $(".dealHover");
	    var w = $(document);
	    hover.width(w.width()*0.8);
	    hover.height(w.width()*0.8);
	    hover.css("top", w.height()/4);
	    hover.css("left", w.width()*0.1);
	    hover.html('<i class="fa fa-check green" style="font-size: '+ w.width()*0.6 +'px;"></i>');
	    hover.fadeIn();
	    setTimeout(function(){ hover.fadeOut(); }, 2500);
    });
}