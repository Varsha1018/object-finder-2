status="";
    
    function setup(){
        canvas=createCanvas(480, 440);
        canvas.center();
        canvas.position(520, 240);
        video=createCapture(VIDEO);
        video.hide();
    }

    function start(){
        objectDetector=ml5.objectDetector("cocossd", modelloaded);
        document.getElementById("status").innerHTML="Status : Detecting Objects";
    }
    
    function modelloaded(){
        console.log("Model Loaded!!");
    }
    
    function draw(){
        image(video, 0, 0, 480, 480);
    }
    