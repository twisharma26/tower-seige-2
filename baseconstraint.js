//a constraint is used to tie/join two objects together
class constraint {
    constructor(bodyA, pointB) { //in this case, our bird and slingshot log will be tied together
        var options = {
        bodyA: bodyA, 
        pointB: pointB,
        stiffness: 0.04, //how bouncy the string connecting them is
        length: 10 //supports the stiffness, max stretching of the string
        }

        this.pointB = pointB
        this.joint = Constraint.create(options) //the constraint itself is the joint
        World.add(world, this.joint)
    }

    launch() {
        this.joint.bodyA = null //to rid the bird of its contraint property (and all other properties)
    }

    attach(body) {
        this.joint.bodyA = body
    }

    display() {

        if (this.joint.bodyA) { // to make it only work when it isnt null
            var posA = this.joint.bodyA.position
            var posB = this.pointB
            push()
            strokeWeight(4)
            stroke(48, 22, 8)
            if (posA.x < 240) {
                line(posA.x - 20, posA.y, posB.x - 10, posB.y + 20) //showing a visible line between the two constrained objects
                line(posA.x - 20, posA.y, posB.x + 30, posB.y + 10)
                //image(this.image3, posA.x - 30, posA.y, 15, 30)
            }
            
            else {
                line(posA.x + 20, posA.y, posB.x - 10, posB.y + 20) //showing a visible line between the two constrained objects
                line(posA.x + 20, posA.y, posB.x + 30, posB.y + 10)
                //image(this.image3, posA.x + 30, posA.y, 15, 30)
            }
            pop()
        }
    }
}