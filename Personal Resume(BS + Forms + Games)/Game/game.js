var arr = " ";
var finalscore = 0;

function DisplayNumbers() {
    var x = document.getElementById("Color_Green");
    var y = document.getElementById("Display_Numbers");
    x.style.backgroundColor = "#006400";
    //This is to disable clicking on the three buttons and the input box while the number is being
    //shown
    document.getElementById("Submit").disabled = true;
    document.getElementById("Reset").disabled = true;
    document.getElementById("Play").disabled = true;
    document.getElementById("Input").disabled = true;
    //I put a space to initialise the array as a string rather than a number so that I can 
    //concatnate it using the for loop below
    arr = " ";
    for (let i = 0; i < 7; i++) {
        let num = (Math.floor(Math.random() * 10));
        arr += num + " ";
    }

    y.innerHTML = arr; //this will display the question string number in the <div>
    /*
    I used a setTimeout() to make sure that after 5sec (5000 ms) the number that you see
    on  the div is replaced by the text described below.
    Also I used this oppurtunity to enable the buttons and textbox back, so the user can type in 
    information and click on the buttons again.
    The setTimeout() accepts two parameters, a function and the number of milliseconds after which the 
    function should be executed.
    */
    setTimeout(function() {
        document.getElementById("Display_Numbers").innerText = "Now Type the numbers you just saw";
        document.getElementById("Submit").disabled = false;
        document.getElementById("Reset").disabled = false;
        document.getElementById("Input").disabled = false;
    }, 5000);

}

//This function will determine whether the user-entered number is right or wrong and allocate the
//points accordingly
function FinalVerdict(arr) {
    var x = document.getElementById("Color_Green");
    var y = document.getElementById("Display_Numbers");
    var points = document.getElementById("Points");
    /*
    I disabled the submit button so that the user won't be able to submit the same answer multiple
    times, it will be re-enabled once you click the Play button
    */
    document.getElementById("Submit").disabled = true;
    //the arr.replace(/ /g, ' ') will remove all instances of white space in the string 
    arr = arr.replace(/ /g, '');
    console.log(arr + " This is the question");

    var user = document.getElementById("Input");
    var userAnswer = user.value;
    console.log(userAnswer + " This is the answer the User has provided");
    //the code below is the condition that checks if the answer is right or wrong and awards points
    //the second else if also checks if the points are 0 so that we do not go into negative scoring
    if (userAnswer == arr) {
        finalscore++;
        x.style.backgroundColor = "green";
        y.innerHTML = "Right Answer! Click Play to Play Again";
        points.innerText = "Points\n" + finalscore;
        console.log(finalscore + " This is the current score the user has");
    } else if ((userAnswer != arr) && (finalscore != 0)) {
        finalscore--;
        x.style.backgroundColor = "maroon";
        y.innerHTML = "Wrong Answer! Click Play to Play Again";
        points.innerText = "Points\n" + finalscore;
        console.log(finalscore + " This is the current score the user has");
    } else { //This is so that the message will get printed even if finalscore is 0
        x.style.backgroundColor = "maroon";
        y.innerHTML = "Wrong Answer! Click Play to Play Again";
    }
    document.getElementById("Play").disabled = false;
    user.value = 0; //This is to clear out the input text that has the previous answer
}

//This function resets all the points and the text message displayed
function Reset() {
    var x = document.getElementById("Color_Green");
    var y = document.getElementById("Display_Numbers");
    document.getElementById("Submit").disabled = true;
    document.getElementById("Play").disabled = false;
    var points = document.getElementById("Points");
    var input = document.getElementById("Input");
    input.value = 0;
    points.innerText = "Points\n" + 0;
    finalscore = 0;
    x.style.backgroundColor = "#006400";
    y.innerText = "Number Sequence Will Appear Here"


}