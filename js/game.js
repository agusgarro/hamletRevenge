
class Game {
    constructor() {}
    preloadGame() {
      console.log("this is the game preload");
      this.backgroundImage = loadImage("../assets/images.jpeg") 
    
      this.playerImage = loadImage("../assets/mrhamlet.gif");
      this.calaveraImage = loadImage("../assets/calavera.png");
      this.claudioImage = loadImage("../assets/claudio.png");
      this.loseImage = loadImage ("../assets/claudiuswin1.jpg");
      this.surviveImage = loadImage ("../assets/survive.jpg");
    }
    setupGame() {
        console.log("this is the game setup");
    
        this.player = new Player(this.playerImage);
        this.enemy = new Enemy (this.claudioImage);
        this.obstacles = [];
        this.enemies = [];
        console.log (this.enemy);
      }
    
      drawGame() {
        if (game.player.lives === 0){
          image(this.loseImage, 0, 0, width, height);
          frameRate (0);
        }
        if (game.player.score === 20) {
          console.log ("you got a life");
          image(this.surviveImage,0, 0, width, height);
          frameRate(0);
        }
       
        //this.enemy.drawEnemy();
        this.player.drawPlayer();
        if (frameCount % 200 === 0) {
         console.log ("this enemies");
         this.enemies.push (new Enemy (this.claudioImage));
        }
        this.enemies.forEach(function(enemy) {
          enemy.drawEnemy();
        });
        this.enemies = this.enemies.filter((enemy) => {
          if (enemy.collision(this.player)) {
            game.player.lives -= 1;
            console.log (game.player.lives);
            return false;
          } else {
            
            return true;
          }
        
        });

      
      
        if (frameCount % 140 === 0) {
          console.log("this will be the push event");
          this.obstacles.push(new Obstacle(this.calaveraImage));
          console.log(this.obstacles);
        }
    
        this.obstacles.forEach(function (obstacle) {
          obstacle.drawObstacle();
        });
        
        this.obstacles = this.obstacles.filter((obstacle) => {
          if (obstacle.collision(this.player) || obstacle.x < 0) {
            game.player.score += 1;
            return false;
          } else {
            return true;
          }
        
        });

      }
    
    }
          