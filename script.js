function setup()
{
    var canvas=createCanvas(600,600);
    canvas.position((windowWidth-width)/2,(windowHeight-height)/2);
    background(255);
}

function draw()
{
    
}

function circle()
{
    ellipse(random(500),random(500),90,90);
}