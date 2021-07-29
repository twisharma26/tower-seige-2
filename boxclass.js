class boxes extends base{ //creating a class
    constructor(x, y, w, h){ //to help us make things (anything that is to be inputted by the user)
        super(x, y, w, h)
    }

    display() {
        if(this.body.speed < 3) {
            super.display()
        }
        else { 
            World.remove(world, this.body)
            push()
            this.Visiblity = this.Visiblity - 10 
            tint(255, this.Visiblity) 
            pop()
        }
    }
}