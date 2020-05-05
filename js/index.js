// Your code goes here

const get = (sel) => document.querySelector(sel);
const getAll = (sel) => document.querySelectorAll(sel);

const header = get("header");
const mouseOver = (event) => header.style.backgroundColor = "blue"; // 1
header.addEventListener("mouseover", mouseOver);
const mouseLeave = (event) => header.style.backgroundColor = "white"; // 2
header.addEventListener("mouseleave", mouseLeave);

const body = get("body");
function background(event) {
    let colors = ["blue", "red", "pink", "orange", "white", "black", "green", "yellow"];
    let rand = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[rand];
}
body.addEventListener("dblclick", background); // 3

const esc = (event) => {
    if (event.key === "o") {
        get("h1").textContent = "HI!";
    }
}
document.addEventListener("keydown", esc); // 4

const textContainer = getAll(".text-content");
const textContainerArr = Array.from(textContainer);
const clik = (event) => {
    document.querySelector(".footer").style.backgroundColor = "aqua";
    event.stopPropagation();
}
textContainerArr.forEach(item => item.addEventListener("dblclick", clik)); // propagation + 3

const prevDef = (event) => {
    event.preventDefault();
}
const nav = getAll("nav a");
const navArr = Array.from(nav);
navArr.forEach(item => item.addEventListener("click", prevDef)); // preventDefault + 5

const windSize = (event) => {
    if (window.innerWidth < 700) {
        const imgs = Array.from(getAll("img"));
        imgs.forEach((item) => item.setAttribute("src", ""));
    }
}
window.addEventListener("resize", windSize); // 6

const contentPick = get(".content-pick");
const cop = (event) => {
    contentPick.style.backgroundColor = "turquoise";
}
window.addEventListener("copy", cop); // 7

const paste = (event) => {
    contentPick.style.backgroundColor = "white";
}
window.addEventListener("paste", paste); // 8

const allP = Array.from(getAll("p"));
const foc = (event) => {
    allP.forEach(item => item.style.color = "red");
}
const blr = (event) => {
    allP.forEach(item => item.style.color = "green");
}
window.addEventListener("focus", foc); // 9
window.addEventListener("blur", blr); // 10