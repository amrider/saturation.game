var slider
var slider1


function setup() {
  createCanvas(400, 400)
  createP("")
  slider = createSlider(0, 255, 127)
  slider1 = createSlider(0,255,200)
  createElement ('h1',"Saturation Game")
  createP('Use the sliders to make the circle as red as the square.')
  // put setup code here
}

function draw() {
  background(127)
  fill(255, 0, 0, slider.value())
  ellipse(width/4, height/2, 200, 200)
  fill(255, 0, 0, slider1.value())
  rect(width/2, height/4, 200, 200)
  fill (255)
  textSize(20)

  text('Circle saturation = '+ slider.value()/255, 10, 20)
  text('Square saturation = '+ slider1.value()/255, 10, 40)
  text('Circle to square ratio = '+ slider.value()/slider1.value(), 10, 60)
  // put drawing code here
}
