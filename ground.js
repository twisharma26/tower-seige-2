class Ground {
    constructor(x, y, w, h) {
         //make a random variable for any given object that you've created so that you can add all the properties it follows in it
            var abc = { 
            isStatic: true
            }
        this.body = Bodies.rectangle(x, y, w, h, abc); //creating an object
        this.width = w;
        this.height = h; 
        World.add(world, this.body); //adding the object to our world and the World, repeat for every object
        //console.log(body); to see all the properties a given object can have
    }
    display() {
        rectMode(CENTER)
        fill("brown")
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}