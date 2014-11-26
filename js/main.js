var pushNotification;

//ONLOAD REGISTER LISTENERS
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
    $( "div.dare" ).on( "swipeleft", swipeleftHandler );
    $( "div.dare" ).on( "swiperight", swiperightHandler );
	$( "body" ).on( "swiperight", function(){
		$("#menu").trigger("open.mm");
	});
}


//ON DEVICE READY
function onDeviceReady() {
	alert("appReady");
    pushNotification = window.plugins.pushNotification;
    registering();
}


//DARE SWIPE LEFT HANDLER    
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
	    return;
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


//DARE SWIPE RIGHT SWIPE    
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
	    return;
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


//NOTIFICATION PLUGIN REGISTER
function registering(){
	if ( device.platform == 'android' || device.platform == 'Android' ){
	    pushNotification.register(
	    successHandler,
	    errorHandler,
	    {
	        "senderID":"replace_with_sender_id",
	        "ecb":"onNotification"
	    });
	} else {
	    pushNotification.register(
	    tokenHandler,
	    errorHandler,
	    {
	        "badge":"true",
	        "sound":"true",
	        "alert":"true",
	        "ecb":"onNotificationAPN"
	    });
	}
}

//NOTIFICATION HANDLERS
function successHandler (result) {
    alert('result = ' + result);
}

function errorHandler (error) {
    alert('error = ' + error);
}

function tokenHandler (result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    alert('device token = ' + result);
}

//