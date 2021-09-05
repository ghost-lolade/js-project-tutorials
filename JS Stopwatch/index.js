window.onload = function () {

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById('tens');
    let appendSenconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");
    const img = document.querySelector('img')
    let Interval;
    let rotateImg;
    let rotation = 0;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        rotateImg = setInterval(rotate, 1000);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSenconds.innerHTML = seconds;
    }

    

    function startTimer () {
        tens++;

        if (tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSenconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSenconds.innerHTML = seconds;
        }
    }
    function rotate() {
        rotation += 90;
        img.style.transform = `rotate(${rotation}deg)`;
    }

}