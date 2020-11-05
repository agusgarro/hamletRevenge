class Obstacle {
    constructor(calaveraImage) {
      this.image = calaveraImage;
      this.x = width;
      this.y = (Math.random() * height) / 2.5;
      this.width = 50;
      this.height = 50;
      
    }
  
    
    collision(playerInfo) {
      
      let obstacleX = this.x + this.width / 2;
      let obstacleY = this.y + this.height / 3;
      let playerX = playerInfo.x + playerInfo.width / 2 ;
      let playerY = playerInfo.y + playerInfo.height / 3 ;
  
      if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
        return false;
      } else {
        //game.player.score += 10;
        //console.log(game.player.score);
        return true;
      }
    }
  
    drawObstacle() {
      this.x--;
      this.collision(game.player);
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }
  