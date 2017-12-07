var Ball = function (x, y) {
    var h = createVector(0, 0);
    var coord = createVector(x, y);
    var acc = createVector(0, 0);
    var speed = createVector(-10, 0);


    this.show = function () {
        noStroke();
        ellipse(coord.x, coord.y, h.x, h.y);
        fill(255);
    }

    this.update = function () {
        acc.x = accOnKey(acc.x, 'x');
        acc.y = accOnKey(acc.y, 'y');
        this.move();
        if (keyIsPressed == false) {
            this.stop();
        }
    }


    this.stop = function () {
        acc.x = 0;
        acc.y = 0;
    }

    this.move = function () {
        speed.x = constrain(speed.x + acc.x + backToZero(speed.x), -20, 20);
        speed.y = constrain(speed.y + +acc.y + backToZero(speed.y), -20, 20);

        console.log(rotation(speed.x, speed.y));

        coord.x = constrain(coord.x + speed.x, 0, width);
        coord.y = constrain(coord.y + speed.y, 0, height);


        this.stretch();
    }

    this.stretch = function () {
        var def = 20;
        var str = 10;
        var hsx = h.x * speed.x;
        var hsy = h.y * speed.y;
        h.x = constrain(def + (abs(hsx) - abs(hsy)) / str, 7.5, 80);
        h.y = constrain(def + (abs(hsy) - abs(hsx)) / str, 7.5, 80);
    }


}

function backToZero(value) {
    var cste = 0.5;
    if (value < -0.5) {
        return cste;
    } else if (value > 0.5) {
        return -cste;
    }
    return -value;
}

function accOnKey(acceleration, mode) {
    var cste = 0.1;

    if (mode == 'x') {
        if (keyIsDown(LEFT_ARROW)) {
            acceleration -= cste;
        } else if (keyIsDown(RIGHT_ARROW)) {
            acceleration += cste;
        }
        return acceleration;
    } else if (mode == 'y') {
        if (keyIsDown(UP_ARROW)) {
            acceleration -= cste;
        } else if (keyIsDown(DOWN_ARROW)) {
            acceleration += cste;
        }
        return acceleration;
    }
}

function rotation(x, y) {
    var alpha = 0;
    if (y == 0) {
        alpha = 0;
    } else {
        alpha = acos(constrain(x, -1, 1) / constrain(y, -1, -1));
    }
    return alpha;

}
