function preLoad()
{

}

function setup()
{
    canvas = createCanvas(2000,1000); 
    canvas.position(110, 250); 
    video = createCapture(VIDEO); 
    video.hide();

    tint_color="";
}

function draw()
{
    image(video , 0 , 0 , 2000,1000)

    fill("red")
    stroke("blue") 
    circle(50,50,100)
    circle(50,650,100)
    circle(1150,650,100)
    circle(1150,50,100)

    fill("green")
    stroke("red") 
rect(0,100,100,500)
rect(100,600,1000,100)
rect(1100,100,100,500)
rect(100,0,1000,100)

tint(tint_color)
}

function applyFilter()
{
tint_color = document.getElementById("color").value;
}

function take_snapshot()
{
save("Me.png") 
}

function touchStarted () 
{ var fs = fullscreen(); if (!fs) { fullscreen(true); } }
function windowResized() 
{ resizeCanvas(windowWidth, windowHeight); }
document.ontouchmove = function(event) { event.preventDefault(); };