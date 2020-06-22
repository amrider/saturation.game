var slider

function setup() {
  createCanvas(400, 400)
  createP("")
  slider = createSlider(0, 255, 127)
  createElement ('h1',"Saturation Game")
  createP('Use the slider to make the circle as red as the square.')
  // put setup code here
}

function draw() {
  background(127)
  fill(255, 0, 0, slider.value())
  ellipse(width/4, height/2, 200, 200)
  fill(255, 0, 0)
  rect(width/2, height/4, 200, 200)

  text('Saturation = '+ slider.value()/255, 10, 20)
  // put drawing code here
}
