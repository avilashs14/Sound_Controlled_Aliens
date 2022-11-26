function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/piuCDVGOD/model.json', modelReady);
}
function modelReady() {
    classifier.classify (gotresults);
}
function gotresults(error, results) {
   if (error) {
    console.log (error);
   }
   else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_number_g = Math.floor(Math.random() * 255) +1;
    random_number_b = Math.floor(Math.random() * 255) +1;
    document.getElementById("alien_result").innerHTML = 'I can hear -' + results[0].label;
    document.getElementById("alien_accuracy").innerHTML = 'Accuracy -' + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("alien_result").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("alien_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img1 = document.getElementById('alien_1')
    img2 = document.getElementById('alien_2')
    img3 = document.getElementById('alien_3')
    img4 = document.getElementById('alien_4')
    if (results[0].label=="Clap") {
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }
    else if(results[0].label == "Snap") {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }
    else if(results[0].label == "Tap") {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img4.src = "aliens-04.png";
    }
    else {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";
    }
   }
}