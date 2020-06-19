var randomNumber1 = Math.floor(Math.random() *6)+1;
var RandomDiceImg = "dice"+randomNumber1+".png";
var RandomImgSource = "images/"+RandomDiceImg;
var img1 = document.querySelector("img.img1");
img1.setAttribute("src",RandomImgSource);
var randomNumber2 = Math.floor(Math.random() *6)+1;
var RandomDiceImg2 = "dice"+randomNumber2+".png";
var RandomImgSource2 = "images/"+RandomDiceImg2;
var img2 = document.querySelector("img.img2");
img2.setAttribute("src",RandomImgSource2);

if (randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!"
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins1"
}else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
