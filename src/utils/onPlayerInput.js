export default function onPlayerInput(event, gameInstance) {
  event.preventDefault();
  // console.log(gameInstance);
  switch (gameInstance.gameMode) {
    case 'prestart': {
      gameInstance.gameMode = 'running';
      break;
    }
    case 'running': {
      gameInstance.bird.velocityY = gameInstance.jumpAmount;
      break;
    }
    case 'over':
      if (new Date() - gameInstance.timeGameLastRunning > 1000) {
        gameInstance.resetGame();
        gameInstance.gameMode = 'running';
        break;
      }
  }
}
