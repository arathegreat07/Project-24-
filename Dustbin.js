class Dustbin {

     constructor() {

        this.body = Bodies.rectangle(650, 600, 50, 10);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
     }

     display() {
         
         fill("blue");
         rect(650, 580, 200, 20);
         rect(540, 525, 20, 100);
         rect(760, 525, 20, 100);
     }
}