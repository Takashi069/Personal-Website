var arr = " ";
var finalscore = 0;
var highscore = 0;
var SignInChk = 0;


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
    y.innerText = "Number Sequence Will Appear Here";
    let date = new Date();
    if(SignInChk!=0){
        AssignCookies("highscore",0,date);
        highscore = 0;
        UpdateHighScore(highscore);
    }
}

//This function updates the High Score board
function UpdateHighScore(highscore)
{
    var DispHighScore = document.getElementById("HighScore");
    if(SignInChk==0){
        DispHighScore.style.fontSize = "15px";
        DispHighScore.innerHTML = "Warning User Not Signed In. High Score will not be saved";
        SignInChk = 0;
    }else{
    DispHighScore.innerHTML = "High Score: " + highscore;
    }
}
//This function assigns the highscore cookie
function AssignCookies(cname,cvalue,date){

    date.setDate(date.getDate() + 7);
    document.cookie = cname + "="+cvalue+";expires="+date;
    //The reason for the code below is that if I want to use the same date variable anywhere else
    //the date would be the date I had assigned earlier which would be 1 week in the future
    date.setDate(date.getDate() - 7);
}
//This function checks the highscore and updates the cookie
function Highscore(points,highscore){
    if(SignInChk!=0){

    let date = new Date();
    AssignCookies("highscore",highscore,date);
    var cookie = document.cookie;
    let highscoreLoc = cookie.search("highscore=");
    highscoreLoc = highscoreLoc + 10;
    highscore = (cookie.slice(highscoreLoc,12));
    if(highscore.search(";")==true)
    {
        highscore = Number(cookie.slice(highscoreLoc,11));
    }else{
        highscore = Number(cookie.slice(highscoreLoc,12));
    }
    if (highscore<points)
    {
        highscore = points;
        date = new Date();
        AssignCookies("highscore",highscore,date);
        UpdateHighScore(highscore);
    }
    }
}
//This function checks if there is any cookie available and does the necessary action
function CookieCheck(){
    //There are a couple of bugs I noticed, So fair warning to the users in advance
    alert("If you observe any abnormalities in the High Score, Please Click the Reset Button");
    let cookie = document.cookie;
    if (cookie.search("username")==-1)
    {   
        //If there is no Username the highscore cookie would be deleted
        document.cookie = "highscore=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        UpdateHighScore("No User Sign-In Detected");
    }else{
        SignInChk = 1;
        if(cookie.search("highscore")==-1)
        {
            let date = new Date();
            AssignCookies("highscore",0,date);
        }
        let highscoreLoc = cookie.search("highscore=");
        highscore = (cookie.slice(highscoreLoc,12));
        highscoreLoc = highscoreLoc + 10;
        if(highscore.search(";")!=-1)
        {
            highscore = Number(cookie.slice(highscoreLoc,11));
        }else{
            highscore = Number(cookie.slice(highscoreLoc,12));
        }
        UpdateHighScore(highscore);
    }
    
}

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

    var user = document.getElementById("Input");
    var userAnswer = user.value;
    //the code below is the condition that checks if the answer is right or wrong and awards points
    //the second else if also checks if the points are 0 so that we do not go into negative scoring
    if (userAnswer == arr) {
        finalscore++;
        if(finalscore<=50){
            x.style.backgroundColor = "green";
            y.innerHTML = "Right Answer! Click Play to Play Again";
            points.innerText = "Points\n" + finalscore;
        }else{
            x.style.backgroundColor = "green";
            y.innerHTML = "Well Done, You're too good for this game. You've beaten me.";
            points.innerText = "Points\n" + finalscore;
        }
    } else if ((userAnswer != arr) && (finalscore != 0)) {
        finalscore--;
        x.style.backgroundColor = "maroon";
        y.innerHTML = "Wrong Answer! Click Play to Play Again";
        points.innerText = "Points\n" + finalscore;
    } else { //This is so that the message will get printed even if finalscore is 0
        x.style.backgroundColor = "maroon";
        y.innerHTML = "Wrong Answer! Click Play to Play Again";
    }
    if(finalscore<=50)
        document.getElementById("Play").disabled = false;
    Highscore(finalscore,highscore);
    user.value = 0; //This is to clear out the input text that has the previous answer
}

