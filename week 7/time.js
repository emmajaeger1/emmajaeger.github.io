function updateTime(){
var timeHolder=
document.querySelector("#time")

var date = new Date()

timeHolder.innerHTML =
date.getseconds()

if(date.getseconds)() <30) {
  console.log("less than 30")
} else{
  console.log("more than 30")
}
}
updateTime()
setInterval (updateTime,1000)
