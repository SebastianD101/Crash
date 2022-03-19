window.onload = function () {
  let list = [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,4,5,6,7,8,9,10,100];
  //let list = [1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5];
  document.getElementById("button-reset").style.display = "none";
  document.getElementById("button-stop").style.display = "none";
  var seconds = 01; 
  var tens = 00; 
  var bet = 0;
  var points = 100;
  var crash = 0;
  var appendPoints = document.getElementById("points");
  var appendTens = document.getElementById("tens");
  var appendBet = document.getElementById("bet");
  var appendCrash = document.getElementById("crash");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonMax = document.getElementById('button-max');

  var buttonHalf = document.getElementById('button-half');
  var buttonMin = document.getElementById('button-min');
  var buttonIncrease = document.getElementById('button-increase');
  var buttonDecrease = document.getElementById('button-decrease');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonIncrease.onclick = function() {
    if(bet < points){
      bet = bet + 10;
      points = points - 10;
    }
    appendBet.innerHTML = bet;
    appendPoints.innerHTML = points;
 }

 buttonDecrease.onclick = function() {
  if(bet > 0){
    bet = bet - 10;
    points = points + 10;
  }
  appendBet.innerHTML = bet;
  appendPoints.innerHTML = points;
}

buttonMax.onclick = function() {

  bet = bet + points;
  points = 0;

  appendBet.innerHTML = bet;
  appendPoints.innerHTML = points;
}

buttonMin.onclick = function() {
  appendBet.innerHTML = bet;
  appendPoints.innerHTML = points;

  points = points + bet - 10
  bet = 10

  appendBet.innerHTML = bet;
  appendPoints.innerHTML = points;
}

buttonHalf.onclick = function() {
  appendBet.innerHTML = bet;
  appendPoints.innerHTML = points;
  points = points + bet;
  points = points / 2; 
  bet = points;

  appendBet.innerHTML = bet;
  appendPoints.innerHTML = points;
}



  buttonStart.onclick = function() {
    document.getElementById("button-start").style.display = "none";
    document.getElementById("button-stop").style.display = "block";
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
     crash = list[Math.floor(Math.random() * 23)];
    appendCrash.innerHTML = crash;
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
       points = points + (bet * (seconds - 1) + bet * (tens / 100));
       appendPoints.innerHTML = points;
       document.getElementById("button-stop").style.display = "none";
       document.getElementById("button-reset").style.display = "block";
       document.getElementById("points").style.color = "00ff00";
       document.getElementById("time").style.color = "00ff00";
  }
  

  buttonReset.onclick = function() {
    document.getElementById("button-start").style.display = "block";
    document.getElementById("button-reset").style.display = "none";
    document.getElementById("time").style.color = "white";
    document.getElementById("title").style.color = "white";
    document.getElementById("bet").style.color = "white";
    document.getElementById("points").style.color = "white";
     clearInterval(Interval);
    tens = "00";
  	seconds = "01";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    var totaltime = seconds;
    if (totaltime > crash){
        clearInterval(Interval);
        document.getElementById("time").style.color = "red";
        document.getElementById("title").style.color = "red";
        document.getElementById("bet").style.color = "red";
        bet = 0
        appendBet.innerHTML = bet;
        document.getElementById("button-stop").style.display = "none";
        document.getElementById("button-reset").style.display = "block";
    }
    
    if(tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9) {
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}