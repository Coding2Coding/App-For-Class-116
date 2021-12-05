function preload() {
    catImage = loadImage("https://i.postimg.cc/T3ZfhJK7/Remove-background.png");
    catEarImage = loadImage("https://i.postimg.cc/15mpYp5j/Remove-background-1.png");
}

var noseX = 0;
var noseY = 0;
var leftEarX = 0;
var leftEarY = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(400, 400);
    camera.hide();
    poseNet = ml5.poseNet(camera, modelLoaded);
    poseNet.on('pose', poses);
}

function draw() {
    image(camera, 0, 0, 400, 400);
    //fill(255, 212, 235);
    //stroke(255, 149, 232);
    //circle(noseX, noseY, 20);
    image(catImage, noseX - 30, noseY - 30, 70, 70);
    image(catEarImage, leftEarX - 120, leftEarY - 120, 140, 70);
}

function takePicture() {
    save("picture.png");
}

function modelLoaded() {
    console.log("inside modelLoaded function");
}

function poses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("the x coordinate of your nose is: " + results[0].pose.nose.x);
        console.log("the y coordinate of your nose is: " + results[0].pose.nose.y);
        console.log("the x coordinate of your left ear is: " + results[0].pose.leftEar.x);
        console.log("the y coordinate of your left ear is: " + results[0].pose.leftEar.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftEarX = results[0].pose.leftEar.x;
        leftEarY = results[0].pose.leftEar.y;
    }
}