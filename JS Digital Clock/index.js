function showTime () {
    // Declaring and Initializing all 
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date. getSeconds(); 
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h -12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();

let images = ["url(images/img1.jpg)", "url(images/img2.jpg)", "url(images/img3.jpg)", "url(images/img4.jpg)", "url(images/img5.jpg)", "url(images/img6.jpg)", "url(images/img7.jpg)", "url(images/img8.jpg)", "url(images/img9.jpg)"]

const body = document.querySelector("body")

let currentImg = 0
function changeImg() {
    body.style.backgroundImage = images[currentImg];
    if(currentImg < images.length - 1){
        currentImg++;
    }else{
        currentImg = 0;
    }
}
let show = setInterval(changeImg, 1000)
changeImg();