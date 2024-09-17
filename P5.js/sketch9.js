function sketch1(p) {

    let sizes = [];

    let size = p.random(70,120);
    
    let cols; 
    let rows; 
    
    let xoff = 0; 
    let yoff = 0; 
    let inc = p.random(20,150);
    let zoff = 0;

    let colorMode = p.random(1);
    let randomR = p.random(255);
    let randomG = p.random(255);
    let randomB = p.random(255);

    let randomXtop = p.random(15, 45);
    let randomXbottom = p.random(-45, -15);
    let topOrBottom = p.random(1);
    let randomY = p.random(-50,50);

    p.setup = function() {
        p.createCanvas(p.windowWidth , p.windowHeight, p.WEBGL);    

        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);

        cols = p.windowWidth/size;
        rows = cols

        p.print(randomXtop)
    };

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);  // Resize canvas on window resize
    };

    p.draw = function() {
        p.background(0);
  
        if(topOrBottom>0.5){
            p.rotateX(randomXtop);
        }else{
            p.rotateX(randomXbottom);
        }

        p.rotateY(randomY);
        
        xoff = 0;
        for (let i=0; i<cols; i++){
            sizes[i] = [];
            yoff = 0;
            for (let j=0; j<rows; j++){
            sizes[i][j] = p.map(p.noise(xoff, yoff, zoff), 0, 1, 0, 100);
            yoff += inc;
            
            if(colorMode>0.5){
                let r = p.noise(zoff) * 255;
                let g = p.noise(zoff+15) * 255;
                let b = p.noise(zoff+30) * 255;
                p.fill(r, g, b);
            }else{
                p.fill(randomR, randomG, randomB);
            }


            p.push();
            p.translate(i*size - p.windowWidth/2 , sizes[i][j], j*size - 100);
            // You can also put the second argument 100 with sizes[i][j] in the box() function instead of the translate function 
            p.box(size, 100, size); 
            p.pop();
            

            }
            xoff += inc;
            zoff += 0.0004;
        }
    }
};

// Create and return a new p5 instance
currentP5Instance = new p5(sketch1);

