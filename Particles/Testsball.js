var ball;

function setup() {
    createCanvas(500, 400);
    ball = new Ball(360, 200);
    frameRate(20);

}

function draw() {
    background(51);



    /*if (keyIsDown(DOWN_ARROW))    
      ball.update();*/
    //ball.update();  

    ball.move();
    ball.show();
    /**/



}
var Ball = function (x, y) {
    this.hx = 20;
    this.hy = 20;
    this.x = x;
    this.y = y;

    this.show = function () {
        noStroke();
        ellipse(this.x, this.y, this.hx, this.hy);
        fill(255);
    }

    this.xSpeed = 10;
    this.ySpeed = 0;



    this.move = function () {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 5;
            console.log(this.x);

        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 5;
            console.log(this.x);

        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= 5;

        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += 5;
        }
    }

    this.update = function () {
        if ((this.x < width - 10 || this.x > -10) /*|| this.x==2*/ ) {
            // this.x=this.x+this.xSpeed;
            this.hx = this.hx + (this.hx * this.xSpeed) / 1000;
            this.hy = this.hy - (this.hy * this.xSpeed) / 1000;

            this.hx = constrain(this.hx, 7.5, 80);
            this.hy = constrain(this.hy, 7.5, 80);
            /*console.log(this.hy);
            console.log(this.hx);*/
            //  this.y=this.y+this.ySpeed;
            /*} else if ((this.y<height-10 || this.y>-10) {
                 console.log(this.hx)      
            */
        }
    }
}

/*
   this.move = function(){
        if (keyIsDown(LEFT_ARROW)){
            this.a.accelerate(-1,0);
            this.x-=this.a.fx-1;
            console.log('x'+this.a.x);

        } 
        if (keyIsDown(RIGHT_ARROW)){
            this.a.accelerate(1,0);
            this.x+=this.a.fx+1;
            console.log('x'+this.a.x);

        }
        if (keyIsDown(UP_ARROW)) {
            this.y-=5;
            console.log('y'+this.a.y);

        } 
        if (keyIsDown(DOWN_ARROW)) {
            this.y+=5;
            console.log('y'+this.y);
        }
    }
    
    
var Acceleration = function(){
    this.fx=0;
    this.fy=0;
    
     this.accelerate = function(dirx,diry){
         this.fx=dirx*2+this.fx;
         this.fy=diry*2+this.fy;

        //(0,-1) -> North / UpArrowKey
        //(0,1) -> South / Down
        //(-1,0) -> West / Left
        //(1,0) -> East / Right
    }
}
    */
