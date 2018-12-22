// document to identify number of clicks and buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length

//need event listener to identify clicks


//Loop thru buttons
for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("button clicked")
  });
}
