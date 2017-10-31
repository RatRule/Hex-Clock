//var time=new Date();
//console.log(time.getHours());
//console.log(time.getMinutes());
//console.log(time.getSeconds());


clock=document.getElementById('clock');


var color=document.getElementById('hexColor');
function hexClock(){
	var time=new Date();
	var hours=(time.getHours()%12).toString();
	var minutes=time.getMinutes().toString();
	var seconds=time.getSeconds().toString();
	
	if(hours.length<2){
		hours="0"+hours;
	}
	if(minutes.length<2){
		minutes="0"+minutes;
	}
	if(seconds.length<2){
		seconds="0"+seconds;
	}

	clock.textContent=hours+":"+minutes+":"+seconds;
	color.textContent="#"+hours+minutes+seconds;
	document.body.style.backgroundColor="#"+hours+minutes+seconds;
}
hexClock();
setInterval(hexClock,1000);
