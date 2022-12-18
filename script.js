const firstRandomNum = Math.floor(Math.random()*6)+1;
const firstDiceImage = 'assets/dice'+ firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);
const secondRandomNum = Math.floor(Math.random()*6)+1;
const secondDiceImage = 'assets/dice'+ secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

//logic for winner
if(firstRandomNum>secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is Player 1';}
else if(firstRandomNum<secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is Player 2';
}
else{
    document.querySelector('h1').innerHTML = "It's a Draw!";
}
