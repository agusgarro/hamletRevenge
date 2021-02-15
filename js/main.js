let bg ;
let soundClassifier;


console.log ("this works");
const game = new Game ();

function preload () {
  const options = {probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier ('SpeechCommands18w', options)
  bg = loadImage ('assets/16a6a8f5da3eeaec86fa92f4765b26aa.jpg');
game.preloadGame();
}

function setup () {
createCanvas (700,400);
game.setupGame();
soundClassifier.classify(gotCommand);
}
function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  if (results [0].label == 'up'){
    game.player.jump();
  }
}

function draw () {
    
    clear();
    background (bg);
    game.drawGame();

  

}
function keyPressed () {
    if (keyCode === 32) {
        game.player.jump();
      
      }
    }
  
