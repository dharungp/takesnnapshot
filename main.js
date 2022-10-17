function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(modelLoaded);
    video.position(670,270);
    video.size(300,300);

}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw() {
    image( 0,0,300,300, 
     
    rect(110, 65, 320, 30 ),   
    rect(110, 385, 320, 30),
    rect(65, 100, 30, 280),
    rect(450, 100, 30, 280),

    ellipse(80,80,80,80,fill(79, 48, 126)),
    ellipse(460,400,80,80,fill(79, 48, 126)),
    ellipse(80,400,80,80,fill(79, 48, 126)),
    ellipse(460,80,80,80,fill(79, 48, 126)),
    )
}

function take_snapshot(){
    save('dharun.png')
    
}
