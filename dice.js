let player1 = 0;
let player2 = 0; 
Play();
document.querySelector('button').addEventListener('click', ()=>{
  Play();
})

function Play(){
  let randomNumber1 = Math.ceil(Math.random() * 6);
  let randomNumber2 = Math.ceil(Math.random() * 6);

  document.querySelector('.img1').setAttribute('src', `./images/dice${randomNumber1}.png`);

  document.querySelector('.img2').setAttribute('src', `./images/dice${randomNumber2}.png`);


  let result = document.querySelector('h1');

  if(randomNumber1 > randomNumber2){
    result.innerHTML = '🚩 Player 1 Wins!';
    player1++;
  }
  else if(randomNumber1 < randomNumber2){
    result.innerHTML = 'Player 2 Wins! 🚩';
    player2++;
  }
  else result .innerHTML = 'Draw 🏳️';

  updateScore(player1, player2);
}
function updateScore(player1, player2){
  document.querySelector('.score').innerHTML = `
  Player 1: <span class = "scoreNum">${player1}</span> <br/>
  Player 2: <span class = "scoreNum">${player2}</span>
  `
}
