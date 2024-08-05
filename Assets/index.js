

// auto-Slider code started

let count = 1;
const removebg = () => {
  let radioBtn = document.getElementById("radio-btn" + count);
  radioBtn.style.backgroundColor = "#eef4fa";
};

setInterval(function () {
  let radioBtn = document.getElementById("radio-btn" + count);
  radioBtn.style.backgroundColor = "#1566d6";
  document.getElementById("btn" + count).checked = true;
  count++;
  if (count > 2) {
    count = 1;
  }
  removebg();
}, 5000);
// auto-Slider code end









let broker1=document.querySelector("#class-1");
broker1.addEventListener("click",function(){
    broker1.classList.toggle("blue-color");
})

let broker2=document.querySelector("#class-2");
broker2.addEventListener("click",function(){
    broker2.classList.toggle("blue-color");
})

let broker3=document.querySelector("#class-3");
broker3.addEventListener("click",function(){
    broker3.classList.toggle("blue-color");
})

let broker4=document.querySelector("#class-4");
broker4.addEventListener("click",function(){
    broker4.classList.toggle("blue-color");
})

let broker5=document.querySelector("#class-5");
broker5.addEventListener("click",function(){
    broker5.classList.toggle("blue-color");
})

let broker6=document.querySelector("#class-6");
broker6.addEventListener("click",function(){
    broker6.classList.toggle("blue-color");
})


let getBtn=document.querySelector("#start-button");
getBtn.addEventListener("click",function(){

})
