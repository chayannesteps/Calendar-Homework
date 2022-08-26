// var dateTime = new Date();
// console.log(dateTime);
// document.getElementById("time").textContent = dateTime

// `use strict`;
// function refreshTime() {
//   const timeDisplay = document.getElementById("time");
//   const dateString = new Date().toLocaleString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
}
//   setInterval(refreshTime, 1000);

  const colorcode = document.getElementsByClassName("colorcode");
let currentHour = Date.now().getHours();//get current time hour

colorcode.forEach(function(colorcodedDiv){
    let colorcodeHour = parseInt(colorcodedDiv.id);
  if (colorcodeHour) {
    if (currentHour === colorcodeHour) {
      setColor(colorcodedDiv, "Red");
    } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
      setColor(colorcodedDiv, "Green");
    } else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
      setColor(colorcodedDiv, "LightGrey");
    } else {
      setColor(colorcodedDiv, "White");
    }
  }
});
function setColor(element, color) {
    element.style.backgroundColor = color;
}