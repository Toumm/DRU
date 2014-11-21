function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
    $( "div.dare" ).on( "swipeleft", swipeleftHandler );
    $( "div.dare" ).on( "swiperight", swiperightHandler );
	$( "body" ).on( "swiperight", function(){
		$("#menu").trigger("open.mm");
	});
alert($(document).width());
}

function onDeviceReady() {
    alert("device is ready!");
}
    
function swipeleftHandler( event ){
    var elem = $(event.target);
    if(!elem.hasClass("dare")){
	    elem = elem.parent("div.dare");
	}
    var pos = elem.position();
    elem.css("position", "absolute").animate({
	    left: -50,
	    top:  pos.top,
	});
	setTimeout(function(){
    elem.css("position", "").animate({
	    left: 10,
	    top:  pos.top,
	});}, 200);
    if(elem.hasClass("refused")){
	    elem.removeClass("refused");
    }
    else{
	    var hover = $(".dealHover");
	    var w = $(document);
	    hover.width(w.width()*0.8);
	    hover.height(w.width()*0.8);
	    var h = hover.height();
	    hover.css("top", w.height()/4);
	    hover.css("left", (w.width()-h)/2);
	    hover.html('<img src="img/Check.png" height="'+h*0.5+'px" width="'+h*0.5+'px" style="margin: 40px;" /><div class="green" style="font-size:'+h*0.2+'px;">DEAL!</div>');
	    hover.fadeIn();
	    setTimeout(function(){ hover.fadeOut(); }, 2500);
	    elem.addClass("accepted");
    }
    event.stopPropagation();
}
    
function swiperightHandler( event ){
    elem = $(event.target);
     if(!elem.hasClass("dare")){
	    elem = elem.parent("div.dare");
	}
	
    var pos = elem.position();

    elem.css("position", "absolute").animate({
	    left: pos.left+50,
	    top:  pos.top,
	});
	setTimeout(function(){
    elem.css("position", "").animate({
	    left: 10,
	    top:  pos.top,
	});}, 200);
    if(elem.hasClass("refused")){
	    elem.removeClass("refused");
    }
    if(elem.hasClass("accepted")){
	    elem.removeClass("accepted");
    }
    else{
	    var hover = $(".dealHover");
	    var w = $(document);
	    hover.width(w.width()*0.8);
	    hover.height(w.width()*0.8);
	    var h = hover.height();
	    hover.css("top", w.height()/4);
	    hover.css("left", (w.width()-h)/2);
	    hover.html('<img src="img/noway.png" height="'+h*0.4+'px" width="'+h*0.4+'px" style="margin: 40px;" /><div class="red" style="font-size:'+h*0.2+'px;">NO WAY!</div>');
	    hover.fadeIn();
	    elem.addClass("refused");
	    setTimeout(function(){ hover.fadeOut(); }, 2500);
    }
    event.stopPropagation();
}