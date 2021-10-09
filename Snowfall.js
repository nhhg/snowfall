class Snowfall
{
    constructor(xpos,ypos)
    {
        var snow_options = 
        {
            restitution: 0.1,
            friction: 0.1
        }
     this.image = loadImage("snow5.webp")
     this.body = Bodies.circle(xpos,ypos,20,snow_options)
     this.radius = 50
     World.add(world,this.body)   
    }

    display()
    {
      var position = this.body.position;

     // ellipseMode(RADIUS);
      //ellipse(position.x,position.y,this.radius)
      imageMode(CENTER)
      image(this.image, position.x, position.y, this.radius, this.radius)

    }

    update()
    {
      if(this.body.position.y > height)
      {
        Matter.Body.setPosition(this.body, {x: random(0,900), y: random(0,500)})
      }
    }
}