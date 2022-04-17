function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(130, 150);

    canvas = createCanvas(550, 500);
    canvas.position(850, 150);

    poseNet = ml5.poseNet(video, modelDone);
    poseNet.on('pose', gotposes);
}

function draw() {
    background('#969A97');
}

function modelDone() {
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error) {
    if(error) {
        console.error(error);
    }
    if(results.length > 0) {
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}