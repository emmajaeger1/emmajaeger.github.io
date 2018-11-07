function updateTime(){
  var timeHolder =
  document.querySelector("#time")

  var now = new Date()
  var time = now.toTimeString();
  var sec = now.getSeconds();
  var hr = now.getHours();

  var s1 = document.querySelector(".s1")
  var s2 = document.querySelector(".s2")
  var s3 = document.querySelector(".s3")
  var s4 = document.querySelector(".s4")
  var s5 = document.querySelector(".s5")

  //timeHolder.innerHTML =time;
  if(now.getSeconds()%2 !=1){
    s1.style.backgroundColor = "red";

  }else{
    s1.style.backgroundColor = "white";
  }
  if(sec == 15){
   s2.style.backgroundColor = "blue";

 }else{
   s2.style.backgroundColor = "white";
 }

  if(sec == 30){
    s4.style.backgroundColor = "purple";

  }else{
    s4.style.backgroundColor = "white";
  }

  if(now.getSeconds()%60 ==0){
    s3.style.backgroundColor = "yellow";

  }else{
    s3.style.backgroundColor = "white";
  }
  if(hr % 2 !=0){
    s5.style.backgroundColor = "teal";

  }else{
    s5.style.backgroundColor = "white";
  }
}
setInterval(updateTime, 1000)
