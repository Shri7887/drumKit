let drumBtn = document.querySelectorAll(".drum");

for (let i = 0; i < drumBtn.length; i++) {
  drumBtn[i].addEventListener("click", function () {
    
    let txtInHtml = this.innerHTML;
    makeSound(txtInHtml);
    btnAnimation(txtInHtml);

  });
}

document.addEventListener("keydown", function(event){
    
    let btnPressed = event.key;
    makeSound(btnPressed);
        
    btnAnimation(btnPressed);

});


function makeSound(key){

    switch (key) {
        case "w":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "s":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
  
        case "k":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
  
        case "l":
          var kickBass = new Audio("./sounds/kick-bass.mp3");
          kickBass.play();
          break;
  
  
        default:
          console.log(this.innerHTML);
          break;
      }

}


function btnAnimation(currentKey){
  var activebtn = document.querySelector("."+currentKey);
  activebtn.classList.add("pressed");
  setTimeout(function(){
    activebtn.classList.remove("pressed");
  },100)
}