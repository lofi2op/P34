class Superhero extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("superhero.png");
    this.x = x;
    this.y = y;
  }

  display() {
    super.display();

  }
}
