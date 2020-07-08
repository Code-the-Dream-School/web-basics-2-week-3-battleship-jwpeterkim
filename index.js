
const battleship = () => {
  //2 player info using objects
  let player1 = 
  {name: prompt("Type in player1's name.") , shipCount: 0, gameBoard: 
  [['0', '0', '0', '0'],
  ['0', '0', '0', '0'],
  ['0', '0', '0', '0'],
  ['0', '0', '0', '0']]
};
let player2 = {name: prompt("Type in player2's name.") , shipCount: 0, gameBoard:
  [['0', '0', '0', '0'],
  ['0', '0', '0', '0'],
  ['0', '0', '0', '0'],
  ['0', '0', '0', '0']] 
};

  //loop that randomly assigns 4 battle ships to each player
  for(let i = 0; i < 4; i++){
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    if (player1.gameBoard[x][y] === '0') {
      player1.gameBoard[x][y] = 1;
      player1.shipCount++;
    }
    }
    for(let i = 0; i < 4; i++){
      let x = Math.floor(Math.random() * 4);
      let y = Math.floor(Math.random() * 4);
      if (player2.gameBoard[x][y] === '0') {
        player2.gameBoard[x][y] = 1;
        player2.shipCount++;
      }
      }
      console.log(player1.gameBoard.flat());
      console.log(player2.gameBoard.flat());
  //Ask the player how to strike using prompt
  let turn = player1;
  if (turn = player1){
  while (player2.shipCount > 0 ){
    let guessX = parseInt(prompt("Player 1, type in a random X coordinate to strike."));
    let guessY = parseInt(prompt("Plyaer 1, type in a random Y coordinate to strike."));
  //determine if the user sank the opponent's ship using conditionals
   if(player2.gameBoard[guessX][guessY] ==  '1'){
    player2.gameBoard[guessX][guessY] = '0';
    player2.shipCount--;
    alert('You hit a ship!');
   }
  //use another conditionals to see if there are any ships left or not.
   else if (player2.gameBoard[guessX][guessY] ==  '0') {
    alert('Miss!');
  } else if(player2.shipCount == '0'){
    alert('You won!');
  }
    turn = player2;
  }
}
//Do the same for player 2 to strike?
if (turn = player2){
  while (player1.shipCount > 0 ){
    let guessX = parseInt(prompt("Player 2, type in a random X coordinate to strike."));
    let guessY = parseInt(prompt("Plyaer 2, type in a random Y coordinate to strike."));
  //determine if the user sank the opponent's ship using conditionals
   if(player1.gameBoard[guessX][guessY] ==  '1'){
    player1.gameBoard[guessX][guessY] = '0';
    player1.shipCount--;
    alert('You hit a ship!');
   }
  //use another conditionals to see if there are any ships left or not.
   else if (player1.gameBoard[guessX][guessY] ==  '0') {
    alert('Miss!');
  } else if(player1.shipCount == '0'){
    alert('You won!');
  }
    turn = player1;


    //return `The winner is...${player1}`
}
  }
  //return `The winner is...${player1}`
console.log(player1.gameBoard.flat());
console.log(player2.gameBoard.flat());
}
const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult