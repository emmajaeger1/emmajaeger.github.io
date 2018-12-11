//window.addEventListener("wheel", scroll)

window.onscroll = function(){scroll()};
function scroll(evt) {
    //var y = evt.deltaY;
    var y= Math.round(document.documentElement.scrollTop/100);
    //console.log(y);
    if(y%5==0){
      document.getElementById("image").src="flower1.png"
    }else if(y%5==1){
      document.getElementById("image").src="flower2.png"
    }else if (y%5==2){
      document.getElementById("image").src="flower3.png"
    }else if (y%5==3){
      document.getElementById("image").src="flower4.png"
    }else if (y%5==4){
      document.getElementById("image").src="flower5.png"
    }
}


window.addEventListener("mousemove", onMouseMove)

function onMouseMove(evt) {
    //console.log(evt)
}

var box = document.querySelector("#box")

window.addEventListener("mousemove",onMouseMove)
function onMouseMove(evt){
    console.log(evt.x + " " + evt.y)
    box.style.left = evt.x + "px"
    box.style.top = evt.y + "px"
  }
  
  var background = document.querySelector("background")

  window.addEventListener("onclick")
