img="";
status="";

function setup()
{
    canvas=createCanvas(640 , 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error("error");
    }
    else{
        console.log(results);
    }
}

function preload()
{
    img=loadImage("loin and deer image.jpg");
}

function draw()
{
    image(img,0,0,640,420);
    fill("#00008B");
    text("Lion",45,75);
    noFill();
    stroke("#00008B")
    rect(30,60,200,350);

    fill("#FFA500");
    text("Deer",430,110);
    noFill();
    stroke("#FFA500");
    rect(200,90,270,350);
}