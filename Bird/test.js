var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var context = canvas.getContext("2d");

var boardSize = 8;
var padding = 5;
var caseEdge = (canvas.height - (boardSize + 1) * padding) / boardSize;
var board = [];

var grey = "#cccccc";

//Initialise the board
for (c = 0; c < boardSize; c++) {
    board[c] = [];
    for (r = 0; r < boardSize; r++) {
        board[c][r] = {
            x: c * (caseEdge + padding) + padding,
            y: r * (caseEdge + padding) + padding,
            color: grey,
            mine: false,
            value: ""
        };
        ctx.beginPath();
        ctx.rect(board[c][r].x, board[c][r].y, caseEdge, caseEdge);
        //ctx.strokeStyle = "#333333";
        //ctx.stroke();
        ctx.fillStyle = board[c][r].color;
        ctx.fill();
        ctx.closePath();
    }
}

function draw() {
    //Clean the canvas when called
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Draw the current state of the board
    //drawBoard();

    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height) //to show image


}
/*
function drawBoard() {
    for(c=0; c<boardSize; c++) {
        for(r=0; r<boardSize; r++) {
            board[c][r].x = c * (caseEdge + padding) + padding;
            board[c][r].y = r * (caseEdge + padding) + padding;

            ctx.beginPath();
            ctx.rect(board[c][r].x , board[c][r].y, caseEdge, caseEdge);
            //ctx.strokeStyle = "#333333";
            //ctx.stroke();
            ctx.fillStyle = "#cccccc";
            ctx.fill();
            ctx.closePath();
        }
    }
}
*/

canvas.addEventListener('mousemove', function (evt) {
    eventHandler(canvas, evt);
});
canvas.addEventListener('click', function (evt) {
    alert(getMousePos(canvas, evt).x + ", " + getMousePos(canvas, evt).y);
}, false);

function eventHandler(canvas, evt) {
    var pos = getMousePos(canvas, evt);

    for (c = 0; c < boardSize; c++) {
        for (r = 0; r < boardSize; r++) {
            if (isInside(pos, board[c][r]) == true) {
                board[c][r].color = "gold";
            } else {
                board[c][r].color = grey;
            }

            ctx.beginPath();
            ctx.rect(board[c][r].x, board[c][r].y, caseEdge, caseEdge);
            ctx.fillStyle = board[c][r].color;
            ctx.fill();
            ctx.closePath();
        }
    }
}

//Check if a point coordinate is inside a square from the board
function isInside(pos, square) {
    if (pos.x >= square.x && pos.x <= square.x + caseEdge && pos.y >= square.y && pos.y <= square.y + caseEdge) {
        return true;
    } else {
        return false;
    }
}

function hover(board) {

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
    };
}

function draw() {
    //Clean the canvas when called
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Draw the current state of the board
    //drawBoard();



}

//setInterval(draw, 1000);




/*
console.log(canvas.width);
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();*/



/*
http://stackoverflow.com/questions/16628184/add-onclick-and-onmouseover-to-canvas-element
http://jsfiddle.net/m1erickson/sAFku/

window.onload = function() {
    // To load the script after the webpage is loaded
}


var rect = function () {
    //Create a class for our cases
    function rect(id,x,y,width,height,fill,stroke) {
        this.id=id;
        this.x=x;
        this.y=y;
        this.width=width||caseEdge;
        this.height=height||caseEdge;
        this.fill=fill||"#333333";
        this.stroke=stroke||"#cccccc";
    }

    //So that our class can draw itself
    rect.prototype.draw(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle=this.fill;
        ctx.strokeStyle=this.stroke;
        ctx.rect(x,y,this.width,this.height);
        ctx.stroke();
        ctx.fill();
        //for the text
        //con.fillStyle = "red";
        //con.font = "20pt sans-serif";
        //con.fillText("Canvas Rocks!", 5, 100);
        ctx.restore();
    }

    // accept a point (mouseposition) and report if it’s inside the rect
    rect.prototype.isPointInside = function(x,y){
        return( x>=this.x
                && x<=this.x+this.width
                && y>=this.y
                && y<=this.y+this.height);
    }

}

var myRedRect = new rect("Red-Rectangle",15,35,65,60,"red","black");
myRedRect.draw();

var myBlueRect = new rect("Blue-Rectangle",125,85,100,100,"blue","orange");
myBlueRect.draw();

// listen for click events and trigger handleMouseDown
canvas.click(handleMouseDown);

// calc the mouseclick position and test if it's inside the rect
function handleMouseDown(e){

    // calculate the mouse click position
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // test myRedRect to see if the click was inside
    if(myRedRect.isPointInside(mouseX,mouseY)){

        // we (finally!) get to execute your code!
        alert("Hello from the "+myRedRect.id);
    }
}

**/
