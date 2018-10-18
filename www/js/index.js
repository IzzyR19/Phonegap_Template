
document.addEventListener("deviceready", onDeviceReady, false);
		
	




// device APIs are available
//
    function onDeviceReady() {
	alert("device ready");
        
    var key = "chair";
    var value = "turqouise";
    window.localStorage.setItem(key,value);
    var value = window.localStorage.getItem(key); 
        
        
    var key = "bottle";
    var value = "clear";
    window.localStorage.setItem(key,value); 
        
    var key = "mouse";
    var value = "black";
    window.localStorage.setItem(key,value); 
        
    var key = "phone";
    var value = "white";
    window.localStorage.setItem(key,value); 
        
    var key = "headphones";
    var value = "red";
    window.localStorage.setItem(key,value); 
        
    window.alert("I got the chair out the box are you proud of me!? :)");    
        
    }
