var slide = document.getElementById("slide");
var control1 = document.getElementById("control1");
var control2 = document.getElementById("control2");
var control3 = document.getElementById("control3");
var control4 = document.getElementById("control4");
var control5 = document.getElementById("control5");
var control6 = document.getElementById("control6");

control1.onclick = function(){
    slide.style.transform = "translateX(0px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
}

control2.onclick = function(){
    slide.style.transform = "translateX(-800px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
}

control3.onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
}

control4.onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.add("active");
    control5.classList.remove("active");
}

control5.onclick = function(){
    slide.style.transform = "translateX(-3200px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.add("active");
}

control6.onclick = function(){
    slide.style.transform = "translateX(-4000px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
    control6.classList.add("active");
}

control7.onclick = function(){
    slide.style.transform = "translateX(-4800px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
    control6.classList.remove("active");
    control7.classList.add("active");
}


function changetext(obj, text){
    obj.innerText = text;
}