let eyeSlideUp = document.querySelectorAll(".eye-slide_up1")
let eyeSlideDown = document.querySelectorAll(".eye-slide_down1")
let schedule = document.querySelector(".schedule")
let blink = document.querySelectorAll(".blink")
let header = document.querySelector(".header")
let tabs = document.querySelector(".tabs")
let t2blink = document.querySelector(".t2blink")
let sec5 = document.querySelector(".sec5_inner")
let eyeSlideUp1 = document.querySelectorAll(".eye-slide_up")
let eyeSlideDown1 = document.querySelectorAll(".eye-slide_down")
let eyeBg = document.querySelectorAll('.eye_bg')
let pupils = document.querySelectorAll('.pupil_big');
let pupils1 = document.querySelectorAll('.pupil');
let eyeBgM = document.querySelectorAll('.eye_bgM')
let pupilsM = document.querySelectorAll('.pupil_bigM');
let pupils1M = document.querySelectorAll('.pupilM');
let pupilsS = document.querySelectorAll('.pupil_bigS');
let eyeBgWidth = [];
let eyeBgHeight = [];
let eyeBgHeightM = [];
let pupilsWidth = [];
let pupilsHeight = [];
let pupilsHeightM = [];
let lengthDifferenceWidth = []
let lengthDifferenceHeight = []
let lengthDifferenceHeightM = []
let pupilsX = []
let pupilsY = []
let pupilsYM = []
let clientWidth = document.documentElement.clientWidth
let clientHeight = document.documentElement.clientHeight
let pageHeight = document.documentElement.offsetHeight
let coefX = [], coefY = [], coefYM = []
let pupilsDisplacementX = [], pupilsDisplacementY = [], pupilsDisplacementYM = []
let cursorContainer = document.querySelector('.custom-cursor-container')
let cursor = document.getElementById('cursor')
let veinsPseudo = document.querySelectorAll('.veins-pseudo')
let veins = document.querySelectorAll('.veins')
let veinsM = document.querySelectorAll('.veinsM')
let x, y, yM
let isVein = false

if (clientWidth < 1140) {
    window.onscroll = () => {
        eyeMoveMobile();
        let top = window.pageYOffset || document.documentElement.scrollTop
        yM = top / 2;
    };
    document.onmousemove = (event) => {
        x = event.clientX
        y = event.clientY
        if (isVein === true) {
            cursorMove()
            cursorContainer.style.opacity = '1'
        } else {
            cursorContainer.style.opacity = '0'
        }
    }
    setInterval(() => {
        for (const blinkk of blink) {
            blinkk.firstElementChild.style.opacity = "1"
        }
        for (const eyeUp of eyeSlideUp1) {
            eyeUp.style.transform = "translateY(-30px)"
        }
        for (const eyeDown of eyeSlideDown1) {
            eyeDown.style.transform = "translateY(30px)"
        }

        setTimeout(() => {
            for (const eyeUp of eyeSlideUp1) {
                eyeUp.style.transform = "translateY(0px)"
            }
            for (const eyeDown of eyeSlideDown1) {
                eyeDown.style.transform = "translateY(0px)"
            }
            for (const blinkk of blink) {
                blinkk.firstElementChild.style.opacity = "0"
            }
        }, 1000);

    }, 4000)
} else {
    setTimeout(
        document.onmousemove = (event) => {
            x = event.clientX
            y = event.clientY
            eyeMove()
            // if (isVein === true) {
            //     cursorMove()
            // }
            cursorContainer.style.opacity = '1'
            cursorMove()
        }, 2000)
}
function eyeMove() {
    for (let i = 0; i < eyeBg.length; i++) {
        eyeBgWidth[i] = Math.round(veins[i].getBoundingClientRect().width)
        eyeBgHeight[i] = Math.round(veins[i].getBoundingClientRect().height)
    }
    for (let i = 0; i < pupils.length; i++) {
        pupilsWidth[i] = Math.round(eyeBg[i].getBoundingClientRect().width)
        pupilsHeight[i] = Math.round(eyeBg[i].getBoundingClientRect().height)
    }
    for (let i = 0; i < eyeBg.length; i++) {
        lengthDifferenceWidth[i] = eyeBgWidth[i] - pupilsWidth[i]
        lengthDifferenceWidth[i] = lengthDifferenceWidth[i] - lengthDifferenceWidth[i] / 2
        lengthDifferenceHeight[i] = eyeBgHeight[i] - pupilsHeight[i]
        lengthDifferenceHeight[i] = lengthDifferenceHeight[i] - lengthDifferenceHeight[i] / 2
        lengthDifferenceHeight[0] *= 1
        lengthDifferenceHeight[1] *= 1
        lengthDifferenceHeight[2] *= 1
        lengthDifferenceHeight[3] *= 1
        lengthDifferenceHeight[4] *= 0.95
        lengthDifferenceHeight[5] *= 0.95
        lengthDifferenceHeight[6] *= 0.95
        lengthDifferenceHeight[7] *= 0.95
        lengthDifferenceHeight[8] *= 0.95
        lengthDifferenceHeight[9] *= 0.95
        lengthDifferenceHeight[10] *= 0.95
        lengthDifferenceHeight[11] *= 0.95
        lengthDifferenceHeight[12] *= 0.95
        lengthDifferenceHeight[13] *= 0.95
        lengthDifferenceWidth[11] *= 0.95
        lengthDifferenceWidth[13] *= 0.95
    }
    for (let i = 0; i < pupils.length; i++) {
        pupilsX[i] = Math.round(pupils[i].getBoundingClientRect().left) + Math.round(pupilsWidth[i] / 2)
        pupilsY[i] = Math.round(pupils[i].getBoundingClientRect().top) + Math.round(pupilsHeight[i] / 2)
    }
    for (let i = 0; i < pupils.length; i++) {
        coefX[i] = lengthDifferenceWidth[i] / clientWidth
        coefY[i] = lengthDifferenceHeight[i] / clientHeight
    }

    for (let i = 0; i < pupils.length; i++) {
        pupilsDisplacementX[i] = (x - 400) * coefX[i]
        pupilsDisplacementY[i] = y * coefY[i]
        eyeBg[i].style.transform = "translate(" + pupilsDisplacementX[i] + "px," + pupilsDisplacementY[i] + "px  )";
        pupils[i].style.transform = "translate(" + (1.2 * pupilsDisplacementX[i]) + "px," + (1.3 * pupilsDisplacementY[i]) + "px  )";
        pupils1[i].style.transform = "translate(" + (1.5 * pupilsDisplacementX[i]) + "px," + (1.5 * pupilsDisplacementY[i]) + "px  )";
    }
}
function eyeMoveMobile() {
    for (let i = 0; i < eyeBgM.length; i++) {
        eyeBgHeightM[i] = Math.round(veinsM[i].getBoundingClientRect().height)
    }
    for (let i = 0; i < pupilsM.length; i++) {
        pupilsHeightM[i] = Math.round(eyeBgM[i].getBoundingClientRect().height)
    }
    for (let i = 0; i < eyeBgM.length; i++) {
        lengthDifferenceHeightM[i] = eyeBgHeightM[i] - pupilsHeightM[i]
        lengthDifferenceHeightM[0] *= 1.1
        lengthDifferenceHeightM[1] *= 0.8
        lengthDifferenceHeightM[2] *= 0.8
        lengthDifferenceHeightM[3] *= 1
        lengthDifferenceHeightM[4] *= 1.2
        lengthDifferenceHeightM[5] *= 1.1
        lengthDifferenceHeightM[6] *= 1.2
        lengthDifferenceHeightM[7] *= 1.7
        lengthDifferenceHeightM[8] *= 1.7
        lengthDifferenceHeightM[9] *= 1
        lengthDifferenceHeightM[10] *= 1
    }
    for (let i = 0; i < pupilsM.length; i++) {
        pupilsYM[i] = Math.round(pupilsM[i].getBoundingClientRect().top) + Math.round(pupilsHeightM[i] / 2)
    }
    for (let i = 0; i < pupilsM.length; i++) {
        coefYM[i] = lengthDifferenceHeightM[i] / pageHeight
    }

    for (let i = 0; i < pupilsM.length; i++) {
        pupilsDisplacementYM[i] = yM * coefYM[i]
        if (pupilsDisplacementYM[i] > lengthDifferenceHeightM[i]) {
            pupilsDisplacementYM[i] = lengthDifferenceHeightM[i]
        }
        eyeBgM[i].style.transform = "translateY(" + pupilsDisplacementYM[i] + "px  )";
        pupilsM[i].style.transform = "translateY(" + (1.3 * pupilsDisplacementYM[i]) + "px  )";
        pupils1M[i].style.transform = "translateY(" + (1.5 * pupilsDisplacementYM[i]) + "px  )";
    }
}
for (const veinP of veinsPseudo) {
    veinP.onmouseenter = function () {
        //cursorContainer.style.opacity = '1'
        //veinP.style.cursor = 'none'
        veinP.parentNode.firstElementChild.style.opacity = '0'
    }
    veinP.onmouseover = () => {
        isVein = true
    }

    veinP.onmouseout = function () {
        //cursorContainer.style.opacity = '0'
        isVein = false
        veinP.parentNode.firstElementChild.style.opacity = '1'
    }
}
function cursorMove() {
    cursor.style.transform = "translate(" + x + "px, " + y + "px)"
}
function mouseOnBtn() {
    for (let i = 0; i < pupilsS.length; i++) {
        // pupils[i].style.scale = '1.1'
        pupilsS[i].className += " scalle"
        cursorContainer.style.opacity = '0'
    }
}
function mouseOutBtn() {
    for (let i = 0; i < pupilsS.length; i++) {
        // pupils[i].style.scale = '1'
        pupilsS[i].className = pupilsS[i].className.replace(" scalle", "");
        cursorContainer.style.opacity = '1'
    }
}
document.getElementById("register_btn1").onmouseenter = function () {
    mouseOnBtn()
}
document.getElementById("register_btn2").onmouseenter = function () {
    mouseOnBtn()
}
document.getElementById("register_btn1").onmouseout = function () {
    mouseOutBtn()
}
document.getElementById("register_btn2").onmouseout = function () {
    mouseOutBtn()
}
let title = document.querySelector('.dryeyetitle')
title.style.transform = "translateY(0px)"

header.onmouseover = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "1"
    }
}
header.onmouseout = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "0"
    }
}
tabs.onmouseover = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "1"
    }
}
tabs.onmouseout = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "0"
    }
}
t2blink.onmouseover = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "1"
    }
}
t2blink.onmouseout = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "0"
    }
}
sec5.onmouseover = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "1"
    }
}
sec5.onmouseout = () => {
    for (const blinkk of blink) {
        blinkk.firstElementChild.style.opacity = "0"
    }
}