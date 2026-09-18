function printTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();
	var hour = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	switch(month){
	case 0: month = "Jan";
	break;
	case 1: month = "Fev";
	break;
	case 2: month = "Mar";
	break;
	case 3: month = "Apr";
	break;
	case 4: month = "May";
	break;
	case 5: month = "Jun";
	break;
	case 6: month = "Jul";
	break;
	case 7: month = "Aug";
	break;
	case 8: month = "Sep";
	break;
	case 9: month = "Okt";
	break;
	case 10: month = "Nov";
	break;
	case 11: month = "Dec";
	break;
}
	if(hour<10){
	hour = "0"+hour;
}
	if(mins<10){
	mins = "0"+mins;
}
	if(secs<10){
	secs = "0" + secs;
}
	document.getElementById("date").innerHTML = date+","+month +","+year;
	document.getElementById("time").innerHTML = hour+":"+mins+":"+secs;
}

setTimeout(printTime, 1);
setInterval(printTime, 1000);
