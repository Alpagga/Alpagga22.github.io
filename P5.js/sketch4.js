function sketch4(p) {

    let gif;
    let number_of_gifs = 2;

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);   
        p.noLoop(); 
    };

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);  // Resize canvas on window resize
    };

    p.preload = function() {

        gif = p.createImg('../Assets/Gifs/2.gif');
        gif.position(0,0);
        gif.size(p.windowWidth,p.windowHeight);
      }

    p.draw = function() {
        p.background(255);
        p.scale(2);
    }
}
// Create and return a new p5 instance
currentP5Instance = new p5(sketch4);






