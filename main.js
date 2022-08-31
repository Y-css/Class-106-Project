function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cnP9Er_hT/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('Dog');
        img1 = document.getElementById('Cat');
        img2 = document.getElementById('Lion');
        img3 = document.getElementById('Cow');

        if (results[0].label == "Barking") {
            img.src = 'Doggif.gif';
            img1.src = 'Cat.png';
            img2.src = 'Lion.png';
            img3.src = 'cow.png';
        } else if (results[0].label == "Meowing") {
            img.src = 'Dog.png';
            img1.src = 'Catgif.gif';
            img2.src = 'Lion.png';
            img3.src = 'cow.png';
        } else if (results[0].label == "Roaring") {
            img.src = 'Dog.png';
            img1.src = 'Cat.png';
            img2.src = 'Liongif.gif';
            img3.src = 'cow.png';
        } else if (results[0].label == "Mooing") { 
            img.src = 'Dog.png';
            img1.src = 'Cat.png';
            img2.src = 'Lion.png';
            img3.src = 'cowgif.gif';
        }
    }

}