// let eyeSlideUp = document.querySelectorAll(".eye-slide_up1")
// let eyeSlideDown = document.querySelectorAll(".eye-slide_down1")
// let schedule = document.querySelector(".schedule")
// document.querySelector('.logo').onmouseover = () => {
//     for (const eyeUp of eyeSlideUp) {
//         eyeUp.style.transform = "translateY(-30px)"
//     }
//     for (const eyeDown of eyeSlideDown) {
//         eyeDown.style.transform = "translateY(30px)"
//     }

// };
// document.querySelector('.logo').onmouseout = () => {
//     for (const eyeUp of eyeSlideUp) {
//         eyeUp.style.transform = "initial"
//     }
//     for (const eyeDown of eyeSlideDown) {
//         eyeDown.style.transform = "initial"
//     }
// };
// schedule.onmouseover = () => {
//     for (const eyeUp of eyeSlideUp) {
//         eyeUp.style.transform = "translateY(-30px)"
//     }
//     for (const eyeDown of eyeSlideDown) {
//         eyeDown.style.transform = "translateY(30px)"
//     }

// };
// schedule.onmouseout = () => {
//     for (const eyeUp of eyeSlideUp) {
//         eyeUp.style.transform = "initial"
//     }
//     for (const eyeDown of eyeSlideDown) {
//         eyeDown.style.transform = "initial"
//     }
// };
// let eyeBg = document.querySelectorAll('.eye_bg')
// let pupils = document.querySelectorAll('.pupil_big');
// let pupils1 = document.querySelectorAll('.pupil');
// let pupilsS = document.querySelectorAll('.pupil_bigS');
// let eyeBgWidth = [];
// let eyeBgHeight = [];
// let pupilsWidth = [];
// let pupilsHeight = [];
// let lengthDifferenceWidth = []
// let lengthDifferenceHeight = []
// let pupilsX = []
// let pupilsY = []
// let clientWidth = document.documentElement.clientWidth
// let clientHeight = document.documentElement.clientHeight
// let coefX = [], coefY = []
// let pupilsDisplacementX = [], pupilsDisplacementY = []
// let cursorContainer = document.querySelector('.custom-cursor-container')
// let cursor = document.getElementById('cursor')
// let veinsPseudo = document.querySelectorAll('.veins-pseudo')
// let veins = document.querySelectorAll('.veins')
// let x, y
// let isVein = false
// setTimeout(
//     document.onmousemove = (event) => {
//         x = event.clientX
//         y = event.clientY
//         eyeMove()
//         if (isVein === true) {
//             cursorMove()
//         }
//     }, 2000)
// function eyeMove() {
//     for (let i = 0; i < eyeBg.length; i++) {
//         eyeBgWidth[i] = Math.round(veins[i].getBoundingClientRect().width)
//         eyeBgHeight[i] = Math.round(veins[i].getBoundingClientRect().height)
//     }
//     for (let i = 0; i < pupils.length; i++) {
//         pupilsWidth[i] = Math.round(eyeBg[i].getBoundingClientRect().width)
//         pupilsHeight[i] = Math.round(eyeBg[i].getBoundingClientRect().height)
//     }
//     for (let i = 0; i < eyeBg.length; i++) {
//         lengthDifferenceWidth[i] = eyeBgWidth[i] - pupilsWidth[i]
//         lengthDifferenceWidth[i] = lengthDifferenceWidth[i] - lengthDifferenceWidth[i] / 2
//         lengthDifferenceHeight[i] = eyeBgHeight[i] - pupilsHeight[i]
//         lengthDifferenceHeight[i] = lengthDifferenceHeight[i] - lengthDifferenceHeight[i] / 2
//     }
//     for (let i = 0; i < pupils.length; i++) {
//         pupilsX[i] = Math.round(pupils[i].getBoundingClientRect().left) + Math.round(pupilsWidth[i] / 2)
//         pupilsY[i] = Math.round(pupils[i].getBoundingClientRect().top) + Math.round(pupilsHeight[i] / 2)
//     }
//     for (let i = 0; i < pupils.length; i++) {
//         coefX[i] = lengthDifferenceWidth[i] / clientWidth
//         coefY[i] = lengthDifferenceHeight[i] / clientHeight
//     }

//     for (let i = 0; i < pupils.length; i++) {
//         pupilsDisplacementX[i] = (x - 400) * coefX[i]
//         pupilsDisplacementY[i] = y * coefY[i]
//         eyeBg[i].style.transform = "translate(" + pupilsDisplacementX[i] + "px," + pupilsDisplacementY[i] + "px  )";
//         pupils[i].style.transform = "translate(" + (1.2 * pupilsDisplacementX[i]) + "px," + (1.3 * pupilsDisplacementY[i]) + "px  )";
//         pupils1[i].style.transform = "translate(" + (1.5 * pupilsDisplacementX[i]) + "px," + (1.5 * pupilsDisplacementY[i]) + "px  )";
//     }
// }

// for (const veinP of veinsPseudo) {
//     veinP.onmouseenter = function () {
//         cursorContainer.style.opacity = '1'
//         veinP.style.cursor = 'none'
//         veinP.parentNode.firstElementChild.style.opacity = '0'
//     }
//     veinP.onmouseover = () => {
//         isVein = true
//     }

//     veinP.onmouseout = function () {
//         cursorContainer.style.opacity = '0'
//         isVein = false
//         veinP.parentNode.firstElementChild.style.opacity = '1'
//     }
// }
// function cursorMove() {
//     cursor.style.transform = "translate(" + x + "px, " + y + "px)"
// }
// function mouseOnBtn() {
//     for (let i = 0; i < pupils.length; i++) {
//         // pupils[i].style.scale = '1.1'
//         pupilsS[i].className += " scalle"
//     }
// }
// function mouseOutBtn() {
//     for (let i = 0; i < pupils.length; i++) {
//         // pupils[i].style.scale = '1'
//         pupilsS[i].className = pupilsS[i].className.replace(" scalle", "");
//     }
// }
// document.getElementById("register_btn1").onmouseenter = function () {
//     mouseOnBtn()
// }
// document.getElementById("register_btn2").onmouseenter = function () {
//     mouseOnBtn()
// }
// document.getElementById("register_btn1").onmouseout = function () {
//     mouseOutBtn()
// }
// document.getElementById("register_btn2").onmouseout = function () {
//     mouseOutBtn()
// }

// function openTab(evt, tabid) {
//     // Declare all variables
//     let i, tablinks;
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.querySelectorAll(".tabs-item")
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     evt.currentTarget.className += " active";
// }
