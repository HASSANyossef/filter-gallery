let allBtn = document.querySelector(".all");
let cameraBtn = document.querySelector(".cameras");
let headphoneBtn = document.querySelector(".headphones");
let mobileBtn = document.querySelector(".mobiles");
let shoeBtn = document.querySelector(".shoes");
let watchBtn = document.querySelector(".watchs");

let cameraItems = document.querySelector(".camera");
let headphoneItems = document.querySelector(".headphone");
let mobileItems = document.querySelector(".mobile");
let shoeItems = document.querySelector(".shoe");
let watchItems = document.querySelector(".watch");

let loading = document.querySelector(".loading");
let gallery = document.querySelector(".fi-gallery");



function stopLoading()
{
    loading.style.display = "none";
}

function loadTime()
{
    setInterval(stopLoading, 5000);
}
window.onload = loadTime();


function showItimes()
{
    gallery.style.transform = "scale(1)";
}
function items()
{
    setInterval(showItimes, 5000);
}
window.onload = items();


allBtn.addEventListener("click",showAll)

function showAll()
{
    cameraItems.style.display = "flex";
    headphoneItems.style.display = "flex";
    mobileItems.style.display = "flex";
    shoeItems.style.display = "flex";
    watchItems.style.display = "flex";
}


cameraBtn.addEventListener("click", showCamera)

function showCamera()
{
    cameraItems.style.display = "flex";
    headphoneItems.style.display = "none";
    mobileItems.style.display = "none";
    shoeItems.style.display = "none";
    watchItems.style.display = "none";
}

headphoneBtn.addEventListener("click", showHeadphone)

function showHeadphone()
{
    headphoneItems.style.display = "flex";
    cameraItems.style.display = "none";
    mobileItems.style.display = "none";
    shoeItems.style.display = "none";
    watchItems.style.display = "none";
}

mobileBtn.addEventListener("click", showMobile)

function showMobile()
{
    mobileItems.style.display = "flex";
    headphoneItems.style.display = "none";
    cameraItems.style.display = "none";
    shoeItems.style.display = "none";
    watchItems.style.display = "none";
}

shoeBtn.addEventListener("click", showShoe)

function showShoe()
{
    shoeItems.style.display = "flex";
    headphoneItems.style.display = "none";
    mobileItems.style.display = "none";
    cameraItems.style.display = "none";
    watchItems.style.display = "none";
}

watchBtn.addEventListener("click", showWatch)

function showWatch()
{
    watchItems.style.display = "flex";
    headphoneItems.style.display = "none";
    mobileItems.style.display = "none";
    shoeItems.style.display = "none";
    cameraItems.style.display = "none";
}