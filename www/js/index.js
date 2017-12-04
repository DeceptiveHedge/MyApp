var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
        // P1: message, P2: time on display
		 createMessage('You are the best.', 2000);
	});
	
	$('#dialogButton').on('click', function() {
        // P1: message, P2: call-back, P3: title, P4: button1, P5: button2 
		createDialog('Are you hungry?', dialogDismissed, 'Best dialog box!', 'I am hungry', 'I am not hungry');
	});


	$('#notificationButton').on('click', function() {
        // P1: time delay, P2: title, P3: message
		createNotification(3000, "Hey you", "Get back to work.");
	});


});

function createMessage(m, d){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: m, duration: d}); 
}
        	

function createDialog(m, cb, t, b1, b2) {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
        m,  // message
        cb,         // callback
        t,            // title
        [b1, b2]                  // buttons
    );

}        	      	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
      new Toast({content: "Get back to work after eating.", duration: 3000}); 
    } 
   	else if(buttonIndex==2) {
      new Toast({content: 'Carry on, you can do it.', duration: 3000});
      createDialog('Are you tired?', tiredDialog, 'Tired dialog box!', 'I am tired', 'I am not tired');
    }
}

function tiredDialog(buttonIndex){
    if(buttonIndex==1) { new Toast({content: "Take a break, dude.", duration: 3000}); }
    else if(buttonIndex==2) { new Toast({content: "Keep going then.", duration: 3000});}
}
   
   
function createNotification(td, t, m) {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + td); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		t,
        message: 	m,
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}