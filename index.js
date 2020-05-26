var numberOfdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonHTML = this.innerHTML;
    makeSounds(buttonHTML);
  addAnimaton(buttonHTML);
  });
}
//keyboardLIsteners

document.addEventListener("keyup", function(event) {
  makeSounds(event.key);
  addAnimaton(event.key);
});

    function makeSounds(key) {

        switch (key) {
          case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

          case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

          case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

          case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

          case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

          case "k":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

          case "l":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

          default:
            console.log(buttonHTML);
    }
  }

function addAnimaton(currentKey){
  var activeElement = document.querySelector("."+currentKey);
activeElement.classList.add("pressed");
setTimeout(function(){
  activeElement.classList.remove("pressed");
},100);

}
