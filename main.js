




var b = 0;
function makebubble() {


    var clutter = "";
    for (var i = 1; i < 201; i++) {
        b = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${b}</div>`;
    }

    document.querySelector(".mainpanel").innerHTML = clutter;


}
makebubble();

var t = 64;
function timming() {
    var tim = setInterval(function () {
        if (t > tim) {
            t--;
            document.querySelector("#timer").innerHTML = t;
        }
        else {
            clearInterval(t);
            document.querySelector(".mainpanel").innerHTML = `<div id="ag">

    <div id="game">game over</div>
    <div id="divscore"> your score is ${s}</div>
    <div id="bubh">${y} bubble you hit</div>

  </div>`

        }
    }, 1000)
}

timming();


var h;
function hitting() {
    h = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = h

}

hitting();

var y = 0;
var s = 0;
function score() {
    s += 10;
    y += 1;
    document.querySelector("#rec").innerHTML = s;
}
score();





document.querySelector(".mainpanel").addEventListener("click", function (dets) {

    var target = (Number(dets.target.textContent));
    console.log("target")
    if (target == h) {

        hitting();
        score();
        makebubble();


    }


})

// gsap.from("#nav",{
//     y:-100,
//     duration:1.2,
//     delay:2,
//     opacity:0,
//     stagger:0.3


// })
var tl = gsap.timeline()
tl.from("#highscore,#hitpoint,#nav,#logo", {
    y: -100,
    duration: 1,
    delay: 0,
    opacity: 0,
    stagger: 0.3,
    scale: 0



})

tl.from(".mainpanel", {
    x: -100,
    duration: 0.5,
    delay: 0,
    opacity: 0,

    scale: 0


})





tl.from(".bubble", {
    // x:-100,
    duration: 1.1,
    delay: 0,

    opacity: 0,

    scale: 0


})
tl.from("#ag", {
    x: -100,
    duration: 0.1,
    delay: 1,

    opacity: 0,

    scale: 0


})







tl.from("#timer", {
    x: -100,
    duration: 0.5,
    delay: 0,
    opacity: 0,
    stagger: 0,
    scale: 0
})
var typed = new Typed('#element', {
    strings: ['lets go', 'Lets start', 'Hit the bubble', 'Hit bubble', 'Hit the bubble'],
    typeSpeed: 50,
});
