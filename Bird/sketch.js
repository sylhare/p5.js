var bird;
var pipes = [];

function setup() {
    createCanvas(600, 600);
    bird = new Bird();
    pipes.push(new Pipe());

}

function draw() {
    background(51);
    bird.update();
    bird.show();

    if (frameCount % 125 == 0) {
        pipes.push(new Pipe());
    }

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].offscreen()) {
            pipes.splice(i, 1); //Splice deletes stuff of the array
        }
    }


}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}
