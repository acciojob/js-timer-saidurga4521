// write js code here if required

function updateTimer(){
	let now=new Date();
	let day=String(now.getDate()).padStart(2,'0');
	let month=String(now.getMonth()+1).padStart(2,'0');
	let year=String(now.getFullYear());
	let hours=String(now.getHours()).padStart(2,'0');
	let minutes=String(now.getMinutes()).padStart(2,'0');
	let seconds=String(now.getSeconds()).padStart(2,'0');
	let timeStamp=`${day}/${month}/${year},${hours}:${minutes}:${seconds}`;
	document.getElementById('timer').textContent=timeStamp;
}
setInterval(updateTimer,1000);
updateTimer();
