//generate the random number
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceeImage1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "./images/"+randomDiceeImage1;

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceeImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "./images/"+randomDiceeImage2;

var firstImage = document.querySelectorAll('img')[0];
var secondImage = document.querySelectorAll('img')[1];


firstImage.setAttribute('src',randomImageSource1);
secondImage.setAttribute('src',randomImageSource2);
 

var heading = document.querySelector('h1');


 
//processing
if(randomNumber1>randomNumber2){
    //output
    heading.innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    //output
    heading.innerHTML = "Player 2 Wins! 🚩";
}
else{
    //output
    heading.innerHTML = "Draw!😁";
    
}