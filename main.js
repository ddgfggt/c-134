function setup(){
canvas=createCanvas(400,400);
canvas.position(550,250);
}
function preload(){
    video=createVideo("video.mp4");
}
function draw(){
    image(video,0,0,400,400);
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}
function modelLoaded(){
    console.log("model is loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
}