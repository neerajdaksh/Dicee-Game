//second image
//generate the random number
var randomNumber1 = Math.floor(Math.random()*6)+1;
//generate random image
var randomDiceeImage1 = "dice"+randomNumber1+".png";
//generate random image source
var randomImageSource1 = "./images/"+randomDiceeImage1;
//select first image
var firstImage = document.querySelectorAll('img')[0];
//set attribute in image
firstImage.setAttribute('src',randomImageSource1);
//second image
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceeImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "./images/"+randomDiceeImage2;
var secondImage = document.querySelectorAll('img')[1];
secondImage.setAttribute('src',randomImageSource2);



 

 

 
//processing if player 1 is wins
if(randomNumber1>randomNumber2){
    //output
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    //output
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩";
}
else{
    //output
    document.querySelector('h1').innerHTML = "Draw!😁";
    
}