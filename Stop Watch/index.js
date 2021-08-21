window.onload = function () {
  
	
	var tens = 00;
	var seconds = 00;
	.0
	var minutes = 00;
	var hours = 00; 
	
	var appendTens = document.getElementById("tens");
	var appendSeconds = document.getElementById("seconds");
	var appendMinutes = document.getElementById("minutes");
	var appendHours = document.getElementById("hours");
	
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var buttonLap = document.getElementById('button-lap');
	var Interval;
	
	
	buttonLap.onclick = function (){
		
			var table = document.getElementById('dataTable');
			
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);

			var cell1 = row.insertCell(0);
			cell1.innerHTML = " # " + (rowCount + 1);

			var cell2 = row.insertCell(1);
			cell2.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + tens ;

			var cell3 = row.insertCell(2);
			cell3.innerHTML = 'SPLIT'
	
	}
	
	buttonStart.onclick = function(){
		clearInterval(Interval);
		Interval = setInterval(startTimer,10);
	}

	buttonStop.onclick = function () {
		clearInterval(Interval);
	}
	
	buttonReset.onclick = function()
	{
		clearInterval(Interval);
		
		tens = "00";
		seconds = "00";
		minutes = "00";
		hours = "00"; 
		
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds; 
		appendMinutes.innerHTML = minutes; 
		appendHours.innerHTML = hours;
		
		try {
			var table = document.getElementById('dataTable');
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
					table.deleteRow(i);
					rowCount--;
					i--;
				}
			}catch(e) {
				alert(e);
			}
	}
	
	function startTimer(){
		tens++;
		
		if(tens <= 9){
			appendTens.innerHTML = "0" + tens;
		}
		
		if(tens > 9){
			appendTens.innerHTML = tens;
		}
		
		if(tens > 99){
			console.log("seconds");
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
			appendTens.innerHTML = "0" + tens;
		}
		
		if(seconds > 9){
			appendSeconds.innerHTML = seconds;
		}
		
		if(seconds > 59){
			console.log("minutes");
			minutes++;
			appendMinutes.innerHTML = "0" + minutes;
			seconds = 0; 
			appendSeconds.innerHTML = "0" + seconds;
		}
		
		if(minutes > 59){
			console.log("hours");
			hours++;
			appendHours.innerHTML = "0" + hours;
			minutes = 0; 
			appendMinutes.innerHTML = "0" + minutes;
		}
	}
}