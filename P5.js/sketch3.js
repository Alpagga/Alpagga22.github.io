function sketch2(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(200);
      p.line(0, 200, 100, 100);
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);  // Resize canvas on window resize
  };

  p.draw = function() {
      // Your drawing logic for sketch1
  };
}

// Create and return a new p5 instance
currentP5Instance = new p5(sketch2);