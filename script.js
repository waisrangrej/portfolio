const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circlemousefollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
circlemousefollower()

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0
    var diffrot = 0
    elem.addEventListener("mouseleave", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top
        diffrot = dets.clientX - rotate
        rotate = dets.clientX
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        
        })
    })


    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top
        diffrot = dets.clientX - rotate
        rotate = dets.clientX
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot)
        })
    })
})



let one = document.querySelector(".one")
setTimeout(() => {
    one.style.bottom = "0"
}, 7000);
let two = document.querySelector(".two")
setTimeout(() => {
    two.style.bottom = "0"
}, 7000);

let three = document.querySelector(".three")
setTimeout(() => {
    three.style.bottom = "0"
}, 7500);
let three1 = document.querySelector(".three1")
setTimeout(() => {
    three1.style.bottom = "0"
}, 8000);
let three2 = document.querySelector(".three2")
setTimeout(() => {
    three2.style.bottom = "0"
}, 8500);

var landing= document.querySelector(".landing")
setTimeout(() => {
    landing.style.top="-100%"
}, 5000);
var land1=document.querySelector(".land1")
setTimeout(() => {
    land1.style.bottom="0"
}, 1000);
var land2=document.querySelector(".land2")
setTimeout(() => {
    land2.style.bottom="0"
}, 2000);
var land3=document.querySelector(".land3")
setTimeout(() => {
    land3.style.bottom="0"
}, 3000);