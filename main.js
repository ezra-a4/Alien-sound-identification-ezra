
// SOUND IDENTIFICATION WEB APP
// STUDENT STARTER CODE
// Complete all 9 tasks.

let classifier;

// TASK 1: Load the Teachable Machine sound model.
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);

    // Use ml5.soundClassifier()
    // Model URL:
    // https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json
    // Callback function: modelReady


}

// TASK 2: Start sound classification.
function modelReady() {
    classifier.classify(gotResults);

    // Use classifier.classify()
    // Connect it to gotResults()


}

// TASK 3: Process the classification results.
function gotResults(error, results) {

    if (error) {
        console.error(error);
    }
    else {

        console.log(results);

        // TASK 4: Generate three random RGB values.
        // Create:
        // random_number_r
        // random_number_g
        // random_number_b
        //
        // Use Math.random() and Math.floor().
        // Values should be between 1 and 255.
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;



        // TASK 5: Display the detected sound.
        // Use results[0].label
        // Update the element with id: result_label
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;



        // TASK 6: Display the confidence percentage.
        // Use results[0].confidence
        // Multiply by 100.
        // Use toFixed(2).
        // Update the element with id: result_confidence
        document.getElementById("result.confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";



        // TASK 7: Change the text color.
        // Use style.color.
        // Apply the RGB values to both result elements.
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")" ;
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")" ;



        // TASK 8: Connect all four alien images.
        // Use document.getElementById().
        //
        // Image IDs:
        // alien1
        // alien2
        // alien3
        // alien4
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');





        // TASK 9: Animate the correct alien.
        // Use if, else if, and else statements.
        //
        // Sound: "Clap"
        // Animate aliens-01.gif
        // Reset the other images to .png
        //
        // Sound: "Bell"
        // Animate aliens-02.gif
        // Reset the other images to .png
        //
        // Sound: "Snapping"
        // Animate aliens-03.gif
        // Reset the other images to .png
        //
        // Any other sound
        // Animate aliens-04.gif
        // Reset the other images to .png
        if (results[0].label == "Clap") {
            img.src = 'aliens-01.gif' ; 
            img1.src = 'aliens-02.png' ;
            img2.src = 'aliens-03.png' ;
            img3.src = 'aliens-04.png' ;
        } else if (results[0].label == "Bell") {
            img.src = 'aliens-01.png' ;
            img1.src = 'aliens-02.gif' ;
            img2.src = 'aliens-03.png' ;
            img3.src = 'aliens-04.png' ;
        } else if (results[0].label == "Snapping") {
            img.src = 'aliens-01.png' ;
            img1.src = 'aliens-02.png' ;
            img2.src = 'aliens-03.gif' ;
            img3.src = 'aliens-04.png' ;
        } else {
            img.src = 'aliens-01.png' ;
            img1.src = 'aliens-02.png' ;
            img2.src = 'aliens-03.png' ;
            img3.src = 'aliens-04.gif' ;
        }

    }
}
