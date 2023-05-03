
var img = "<img src='batman-thinking.gif'>"
var timeimg = "<img src='time-travel.gif'>"
var eaten = "<img src='champagne-barbie-cookie-monster.gif'>"
var sigh = "<h1 class='question'> Sigh... </h1>"
var justNo = "<h1 class='question'> Don't do it! </h1>"
var button = "<button class='bnt' onclick='compute(sigh,button,doubleCookie)'>Are you sure?</button>"
var singleCookie = '<div class="cookies"><a href="#" onclick = "eatIt()"><img src="cookie-png-images-are-download-crazypngm-16.png" width="300px" height="300px"/></a><a href="#" onclick = "eatIt()"><img src="cookie-png-images-are-download-crazypngm-16.png" width="300px" height="300px"/></a></div>'
var doubleCookie = '<div class="cookies"><a href="#" onclick = "eatIt()"><img src="cookie-png-images-are-download-crazypngm-16.png" width="300px" height="300px"/></a><a href="#" onclick = "eatIt()"><img src="cookie-png-images-are-download-crazypngm-16.png" width="300px" height="300px"/></a><a href="#" onclick = "eatIt()"><img src="cookie-png-images-are-download-crazypngm-16.png" width="300px" height="300px"/></a><a href="#"><img src="cookie-png-images-are-download-crazypngm-16.png" width="300px" height="300px"/></a></div>'
var timebnt = '<button class="bntreset" onclick="timeTravel()"><img src="2618245.png" id="reset"/></a></button>';
var resetbnt = '<button class="bnt" onclick="compute(justNo, button, singleCookie)">YOU TELL ME!</button>'
var question = '<h2 class="question"> Should you eat this cookie? </h2>'
var resetcookie = '<div class="cookies"><a href="#" onclick = "eatIt()"><img src="cookie-png-images-are-download-crazypngm-16.png" width="200px" height="200px"/></a></div>'
var timetext = "<h1 class='question'> Wow! Time Travel! </h1>"
function compute (output,button,yum){
    var click = true;
    let ms = Math.random()*(5000)+1000;
    document.getElementById("main").innerHTML = img;
    setTimeout(function(){
        document.getElementById("main").innerHTML = (yum + output + button + timebnt);
    }, ms);
}

function eatIt () {
    document.getElementById("main").innerHTML = (eaten + timebnt);
   
}

function timeTravel () {
    document.getElementById("main").innerHTML = timeimg + timetext;
    setTimeout(function() {
        document.getElementById("main").innerHTML = (resetcookie + question + resetbnt)
    }, "3000")
    
}


document.addEventListener("DOMContentLoaded", function (event) {
var aboutBtnOpen = document.getElementById("open");
var aboutBtnClose = document.getElementById("close")
var aboutPage = document.getElementById("container");





     aboutBtnOpen.addEventListener('click', function () {
         aboutPage.classList.add("open");
     }, false);

     aboutBtnClose.addEventListener('click', function () {
         aboutPage.classList.remove("open");
     }, false);
    });