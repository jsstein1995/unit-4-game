console.log("hello!");

// Put links to our images in this image array.
var images = ["assets/images/7ce4bd5486ac8d46b56b15a69eab0394.jpg", "assets/images/61Tbzr0ttSL._SY450_.jpg", "assets/images/download.jpg", "assets/images/ff52cf5abb542aec8bd0de5f47b52661.jpg"];

var winCounter = 0;

var lossCounter = 0;

var counter = 0;

var userScore = 0;

var crystalValue1 = 0;

var crystalValue2 = 0;

var crystalValue3 = 0;

var crystalValue4 = 0;

computerPick = 0;



function startGame() {

        $("#button-1").html("<img src=" + images[0] + " width='80px'>");
        $("#button-2").html("<img src=" + images[1] + " width='80px'>");
        $("#button-3").html("<img src=" + images[2] + " width='80px'>");
        $("#button-4").html("<img src=" + images[3] + " width='80px'>");



var computerPick = Math.floor(Math.random() * 101) + 19;

crystalValue1 = Math.floor(Math.random() * 12) + 1;
crystalValue2 = Math.floor(Math.random() * 12) + 1;
crystalValue3 = Math.floor(Math.random() * 12) + 1;
crystalValue4 = Math.floor(Math.random() * 12) + 1;

userScore= [];

$("#number-to-guess").text(computerPick);

    $("#button-1").on("click", function () {

        counter += crystalValue1;

        $("#user-score").text(counter);
       
    })

    $("#button-2").on("click", function () {

        counter += crystalValue2;

        $("#user-score").text(counter);
    })

    $("#button-3").on("click", function () {

        counter += crystalValue3;

        $("#user-score").text(counter);
    })

    $("#button-4").on("click", function () {

        counter += crystalValue4;

        $("#user-score").text(counter);
    })

    if (counter === computerPick) {
        alert("You win!");
        console.log("you win");
        winCounter++;
    }

    else if (counter >= computerPick) {
        alert("You lose!");
        lossCounter++;
        console.log("you lose!");
    }

    if (counter === computerPick){
        alert ("you won");
        winCounter++;
     }   

     else if (counter >= computerPick) {
         alert ("You lose!");
         lossCounter++;
     }
}

function roundComplete() {

    console.log("WinCount: " +winCounter + " | Loss Count: " + lossCounter);

}
  
  startGame();