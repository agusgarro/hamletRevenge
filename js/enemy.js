class Enemy  {
constructor (enemyImage) {
    this.image = enemyImage;
    this.height = 60;
    this.width = 50;
    this.x = width - 100;
    this.y = height - this.height;
    
      
}

collision(enemyInfo) {
      
    let enemyX = this.x + this.width / 2;
    let enemyY = this.y + this.height / 3;
    let playerX = enemyInfo.x + enemyInfo.width / 2 ;
    let playerY = enemyInfo.y + enemyInfo.height / 3 ;

    if (dist(enemyX, enemyY, playerX, playerY) > 5) {
     
      return false;
    } else {
      //game.player.score += 10;
      //console.log(game.player.score);
      return true;
    }
  }


drawEnemy () {
    this.x-=4;
    this.collision(game.player);
    //console.log (game);
    image(this.image, this.x, this.y, this.height, this.width);
}
}