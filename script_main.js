var highscore = 0;

function AssignCookies(cname,cvalue,date){

    date.setDate(date.getDate() + 7);
    document.cookie = cname + "="+cvalue+";expires="+date;
    //The reason for the code below is that if I want to use the same date variable anywhere else
    //the date would be the date I had assigned earlier which would be 1 week in the future
    date.setDate(date.getDate() - 7);
}

function ShowUserName()
{
    console.log(document.cookie);
    //replaces the New User button with the username
    let user = document.cookie
    let locUsername = user.search("username");
    locUsername = locUsername + 9;
    let username = user.slice(locUsername,);
    let User = document.getElementById("messageUser");
    let NewUser = document.getElementById("NewUser");
    let ForgetUser = document.getElementById("ForgetUser");
    //This code below is to increase the validity of the cookie by 7 days if the user
    //visits the website again in between the week
    let date = new Date();
    AssignCookies("username",username,date);
    //the code below is self-explanatory
    NewUser.style.display = "none";
    console.log(username);
    User.innerHTML = "Hello " + username;
    User.style.display = "block";
    User.style.backgroundColor = "#0d6efd";
    User.style.color = "white";
    User.style.fontWeight = "bold";
    User.style.borderRadius = "5px";
    ForgetUser.style.display = "block";
}



function EnterDetails()
{
    alert("Hello There fellow visitor, This website uses cookies to remember you the next time you visit. Please enter the name by which we may address you. If you do not want to use our cookies, click on Cancel in the input form coming up");
    let userLength = 11;
    while(userLength>10){
        var username = prompt("Hello (Name less than 10 letters. If you have a big name, go creative with an awesome username having less than 10 characters) ");
        userLength = username.length;
        if(userLength>10)
            alert("Seems like you have entered a name > 10 characters, Please enter another username less than 10 characters");
    }
    if(username != "" && username!=null){
        alert("The website will remeber you for 7 days from now. Visit within 7 days to extend the validity of your Visit");
        let date = new Date();
        AssignCookies("username",username,date);
        //now I have to replace the New User with a custom Hello User message
        ShowUserName();
    }
}

function UserDisplay()
{
    let username = document.cookie;
    //if there is a cookie stored then it will show that else it will show the NewUser button.
    if(username!="")
        ShowUserName();
}
function ForgetUser()
{
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    //now I have to remove the forget User and replace the message with the New User Button
    let User = document.getElementById("messageUser");
    let NewUser = document.getElementById("NewUser");
    let ForgetUser = document.getElementById("ForgetUser");
    User.style.display = "none";
    NewUser.style.display = "block";
    ForgetUser.style.display = "none";
}
