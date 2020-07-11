
const battleship = () => {
  //2 player info using objects and arrays
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
  while(player1.shipCount < 4){
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    if (player1.gameBoard[x][y] === '0') {
      player1.gameBoard[x][y] = 1;
      player1.shipCount++;
    } else {
      continue;
    }
    }
    while(player2.shipCount < 4){
      let x = Math.floor(Math.random() * 4);
      let y = Math.floor(Math.random() * 4);
      if (player2.gameBoard[x][y] === '0') {
        player2.gameBoard[x][y] = 1;
        player2.shipCount++;
      } else {
        continue;
      }
      }

    console.log(player1.gameBoard.flat());
    console.log(player2.gameBoard.flat());

  //Ask the players how to strike using prompt (asking x and y coordinates)
  let currentPlayer;
  while (player1.shipCount > 0 && player2.shipCount > 0){
    currentPlayer = player1;
    alert(`Current player is ${player1.name}`);
    let player1guessX = parseInt(prompt(`${player1.name}, type in a random X coordinate to strike. - choose one from 0 to 3`));
    let player1guessY = parseInt(prompt(`${player1.name}, type in a random Y coordinate to strike. - choose one from 0 to 3`));
  //determine if the user sank the opponent's ship using conditionals
   if(player2.gameBoard[player1guessX][player1guessY] ==  '1'){
    player2.gameBoard[player1guessX][player1guessY] = '0';
    player2.shipCount--;
    alert('You hit a ship!');
   }
   else if (player2.gameBoard[player1guessX][player1guessY] ==  '0') {
    alert('Miss!');
  } 
  //doing the same thing for player 2
    currentPlayer = player2;
    alert(`Current player is ${player2.name}`);
    let player2guessX = parseInt(prompt(`${player2.name}, type in a random X coordinate to strike. - choose one from 0 to 3`));
    let player2guessY = parseInt(prompt(`${player2.name}, type in a random Y coordinate to strike. - choose one from 0 to 3`));
   if(player1.gameBoard[player2guessX][player2guessY] ==  '1'){
    player1.gameBoard[player2guessX][player2guessY] = '0';
    player1.shipCount--;
    alert('You hit a ship!');
   }
   else if (player1.gameBoard[player2guessX][player2guessY] ==  '0') {
    alert('Miss!');
  } 
}
//showing final results
console.log(player1.gameBoard.flat());
console.log(player2.gameBoard.flat());
  //return `The winner is...${player1}`
  if(player2.shipCount == '0' && player1.shipCount > '0'){
    alert('The winner is...');
    return `The winner is...${player1.name}!!`
  } else if(player1.shipCount == '0' && player2.shipCount > '0'){
    alert('The winner is...');
    return `The winner is...${player2.name}!!`
  } else if(player1.shipCount == '0' && player2.shipCount == '0'){
    return "It's a Tie!"
  }
}
const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult