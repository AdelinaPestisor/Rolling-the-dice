// I create a new variable called 
// randomNumber1 then set the value of this variable to a 
// random number between 1 and 6.

       var randomNumber1  = Math.floor(Math.random() * 6) + 1;
    
// I use the random number created in the last step 
// to pick out a random dice image between dice1.png 
// to dice6.png then place this image inside the left <img> element.

    if (randomNumber1 === 1){
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }else if(randomNumber1 === 2){
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }else if(randomNumber1 === 3){
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }else if(randomNumber1 === 4){
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }else if(randomNumber1 === 5){
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }else if(randomNumber1 === 6){
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
        var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice2.png

        var randomImageSource = "images/" + randomDiceImage;   //images/dice1.png - images/dice2.png

        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src", randomImageSource );

   // same for the right hand side image element.
        var randomNumber2  = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png" 

        var image1 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber2 === 1){
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }else if(randomNumber2 === 2){
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }else if(randomNumber2 === 3){
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }else if(randomNumber2 === 4){
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }else if(randomNumber2 === 5){
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }else if(randomNumber2 === 6){
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }

// I changed the text in the h1, (which currently says Refresh Me) 
// to show which user won or if there was a draw depending 
// on the dice values of player 1 (left) and player 2 (right)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}