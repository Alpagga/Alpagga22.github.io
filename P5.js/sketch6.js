function sketch6(p) {

    var start = 0;

    var negPostitionY = p.random(-0.7, -0.01)
    var posPostitionY = p.random(0.01, 0.7)
    var choiceY = p.random(1);

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

        p.pixelDensity(1)
        p.angleMode(p.DEGREES)
        p.rectMode(p.CENTER)

        p.noiseDetail(1)

        p.print(negPostitionY);
        p.print(posPostitionY);
        p.print(choiceY);
    };

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);  // Resize canvas on window resize
    };

    p.draw = function() {
        p.background(0)
        p.noFill()
        p.stroke(255)
        p.strokeWeight(3)

        if(choiceY>0.5){
            p.translate(0, p.windowHeight*negPostitionY, 0);
        }else{
            p.translate(0, p.windowHeight*posPostitionY, 0)
        }

        p.rotateX(50)
    
        for (var n = 0; n < 20; n++) {
            p.push()
            p.beginShape()
            for (var i = 0; i < 360; i += 3) {
    
                var rad = n * p.windowHeight/20
                var x = rad * p.cos(i);
                var y = rad * p.sin(i);
                var z = p.map(p.cos(p.frameCount * 3 + n * 10), 0, 1, -50, 50)
    
                var g = p.map(z, -100, 100, 150, 200) + p.sin(p.frameCount * 2) * 50
                var b = p.map(n, 0, 500, 100, 150) + p.cos(p.frameCount / 2) * 100
                var r = p.map(n, 0, 500, 200, 150) - p.sin(p.frameCount / 4) * 50
    
                p.stroke(r, g, b)
    
                p.vertex(x, y, z)
                
            }
            p.endShape(p.CLOSE)
            p.pop()
        }
        start += 0.05
    }
}
// Create and return a new p5 instance
currentP5Instance = new p5(sketch6);
