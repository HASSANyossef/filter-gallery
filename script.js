
var img= document.getElementsByClassName("img")

function getImg(){
    for (let i= 0; i<img.length; i++) {
        document.getElementsByClassName("img")[i];
    }
}

var camera= document.getElementsByClassName("camera");

function getCamera(){
    var temp='';
    for (let i= 0; i<camera.length-1; i++) {
        temp+= camera[i];
    }
    document.getElementById("count").innerHTML=temp;
}


document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    getImg();
})


document.getElementsByClassName("btn")[1].addEventListener("click",function(){
    getCamera();
    
})