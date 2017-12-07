var ball;

function setup() {
    createCanvas(500, 400);
    ball = new Ball(360, 200);
    frameRate(20);

}

function draw() {
    background('#1f1f41');

    ball.update();
    ball.show();
}
