var socket = io()

function setup() {
  var canvas = createCanvas(400, 400)
  canvas.parent('sketch-holder')

  background("lightblue")
  clientPos = {
    x: 0, 
    y: 0,
    color: "blue"
  }
}

function draw() {
  fill(clientPos.color)
  noStroke();
  ellipse(clientPos.x, clientPos.y, 10)
}


/****** DRAWING CODE  ******/



function mouseDragged() {

  clientPos.x = mouseX
  clientPos.y = mouseY

  socket.emit("new circle", clientPos)
}

function clearCanvas() {
  background("lightblue")
}

socket.on("new circle", function(newCircle) {
  clientPos.x = newCircle.x
  clientPos.y = newCircle.y
  clientPos.color = newCircle.color
})

