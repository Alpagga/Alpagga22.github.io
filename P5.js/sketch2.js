function sketch2(p) {

  let astronaut;

  //Source: 
  //https://nasa3d.arc.nasa.gov/detail/astronaut
  //https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models
  p.preload = function(){
    astronaut = p.loadModel('../Assets/3D_Models/Astronaut/astronaut.obj');
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.background(200);
    p.line(200, 200, 100, 100);

    // Use a normal material, which uses color to illustrate
    // what direction each face of the geometry is pointing
    p.normalMaterial();

  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);  // Resize canvas on window resize
};

  p.draw = function() {
    p.background(250);

    // Plane
    p.push();
    p.translate(-250, -100, 0);
    p.rotateWithFrameCount();
    p.plane(70);
    p.pop();
  
    // Box
    p.push();
    p.translate(-75, -100, 0);
    p.rotateWithFrameCount();
    p.box(70, 70, 70);
    p.pop();
  
    // Cylinder
    p.push();
    p.translate(100, -100, 0);
    p.rotateWithFrameCount();
    p.cylinder(70, 70);
    p.pop();
  
    // Cone
    p.push();
    p.translate(275, -100, 0);
    p.rotateWithFrameCount();
    p.cone(50, 70);
    p.pop();
  
    // Torus
    p.push();
    p.translate(-250, 100, 0);
    p.rotateWithFrameCount();
    p.torus(50, 20);
    p.pop();
  
    // Sphere
    p.push();
    p.translate(-75, 100, 0);
    p.rotateWithFrameCount();
  
    // Show black stroke to help visualize movement
    p.stroke(0);
    p.sphere(50);
    p.pop();
  
    // Ellipsoid
    p.push();
    p.translate(100, 100, 0);
    p.rotateWithFrameCount();
    p.ellipsoid(20, 40, 40);
    p.pop();

    // Astronaut
    p.push();
    p.translate(275, 100, 0);
    p.rotateWithFrameCount();

    // Extra rotation to start model in upright position
    p.rotateZ(180);
    p.model(astronaut);
    p.pop();
  };

  p.rotateWithFrameCount = function(){
    p.rotateZ(p.frameCount);
    p.rotateX(p.frameCount);
    p.rotateY(p.frameCount);
  }

}

// Create and return a new p5 instance
currentP5Instance = new p5(sketch2);