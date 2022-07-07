var noseX=0;
var noseY=0;

var leftwristX=0;
var rightwristY=0;

var difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
    console.log("PoseNet is loaded");
    }
    
    function gotPoses(results){
    if(results.length>0){
    console.log(results);

   
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    
    difference=floor(leftwristX-rightwristX);
    
    }    
    }
    
    function draw(){
    background('#ffb700');
    document.getElementById("size").innerHTML="width and height of font will be: "+difference+"px";
    fill('#4287f5');
    stroke('#fcb103');

text('Hrishi',noseX,noseY);
textSize(difference);

    }
    
    
    