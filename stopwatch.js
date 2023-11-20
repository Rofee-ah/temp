
    var minute = 0;
    var second =0;
    var count = 0;

var startBtn = document.getElementById("start")
var resetBtn = document.getElementById("reset")
var stopBtn = document.getElementById("stop")

startBtn.onclick = function(){
    timer = true;
    startTimer();
}

stopBtn.onclick = function(){
    timer = false
}
resetBtn.onclick = function(){
    timer = false;
    minute = "0"
    second = "0"
    count= "0"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML="00"
    document.getElementById("count").innerHTML="00"
}

function startTimer(){
   if(timer){
    count++
    if (count == 60){
        second++
        count = 0;
    }
    if (second==60){
        minute++
        second=0
        count = 0
    }
    let minhand = minute;
    let sechand = second;
    let counthand = count ;

    if(minute<10){
        minhand = "0" + minhand
    }

    if(second<10){
        sechand = "0" + sechand
    }

    if(count<10){
        counthand= "0" + counthand
    }

    document.getElementById("min").innerHTML = minhand
    document.getElementById("sec").innerHTML=sechand
    document.getElementById("count").innerHTML=counthand
    setTimeout(startTimer, 1000)
   }
   }

