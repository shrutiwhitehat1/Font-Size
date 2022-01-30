noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
text="text";

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(700,700);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized! ');
}

function draw() {
    background('#90ee90');

    document.getElementById("square_side").innerHTML = "Font size is" + difference+"px";
    fill('#00FFFF');
    stroke('#F90093');
    textSize(difference);
    text('text',10,400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " +difference);

    }
}
