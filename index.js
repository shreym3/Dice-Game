var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var imageSrc = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute('src', imageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var imageSrc2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute('src', imageSrc2);

if(randomNumber1>randomNumber2){
  document.querySelector('h1').innerHTML = "Player 1 Wins✨🎉";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector('h1').innerHTML = "Player 2 Wins✨🎉";
}
else{
  document.querySelector('h1').innerHTML = "It's a draw";
}
