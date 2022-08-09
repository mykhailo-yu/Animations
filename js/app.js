// let logo = document.querySelector('.logo');
// let eyeSlideUp = document.querySelectorAll('.eye-slide_up');
// let eyeSlideDown = document.querySelectorAll('.eye-slide_down');
// logo.addEventListener('onmouseover', function () {
//     eyeSlideUp.style.display = "none";
//     eyeSlideUp.style.transform = "translate-y(-30px)";
//     eyeSlideDown.style.transform = "translate-y(30px)";
// });
// let x, y;
// document.addEventListener('mousemove', (event) => {
//     x = event.x;
//     y = event.y;
//     console.log(x + ' ' + y);
//     console.log(window.innerWidth)
// });


// let pupils = document.querySelectorAll('.pupil_big')
// document.onmousemove = function (event) {
//     let x = event.clientX * 100 / window.innerWidth + "%"
//     let y = event.clientY * 100 / window.innerHeight + "%"
//     console.log(x + ' ' + y);
//     for (let i = 0; i < 2; i++) {
//         // pupils[i].style.left = x;
//         // pupils[i].style.top = y;
//         pupils[i].style.transform = "translate(" + x + "," + y + ")";
//     }
// }
let pupils = document.querySelectorAll('.pupil_big');
// pupils.forEach(element => {
//     element.style.transform = "translate(10px ,10px)";
// });
let arr = [2, 3, 5, 7]

arr.map();
let eyeBg = document.querySelectorAll('.eye_bg')
let eyeBgWidth;
// eyeBg.map(function (element) { eyeBgWidth = element.getBoundingClientRect().width });
// let eyeBgHeight = eyeBg.map().getBoundingClientRect().height;

// eyeBg.map(element => { eyeBgWidth = element.getBoundingClientRect().width; });
// eyeBg.map(element => { eyeBgHeight = element.getBoundingClientRect().height; });
// console.log(eyeBgHeight + ' ' + eyeBgWidth);
// let eyeBgHeight = eyeBg.getBoundingClientRect().width;
// eyeBgWidth.forEach(element => { console.log(element) })