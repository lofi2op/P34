class Monster extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("monster.png");
      this.x = x;
      this.y = y;
    }
  
    display() {
      super.display();
  
    }
  }
  