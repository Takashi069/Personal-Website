function Focus()
{
    document.getElementById("Name_input").focus();
}

function Email(mail){
    var domain = String(mail);
    var emailID = document.getElementById("email_input");
    emailID.value = "@"+domain.toLowerCase()+".com";
}

function CheckMail(){
    var emailID = document.getElementById("email_input").value;
    if (emailID!="")
    {
        var domainStart = emailID.search("@")+1;
        var domainEnd = emailID.search(".com");
        var email = emailID.slice(domainStart,domainEnd);
        if(email=="gmail" || email=="yahoo" || email=="outlook")
        {
           ;
        }else{
            document.getElementById("email_input").value = "Please Choose among these";
        }
    }
}

function Submity() {
    var form = document.getElementById("Job_Details");
    form.style.display = "none";
    var Message = document.getElementById("Outer_Casing");
    var MessageStyle = Message.style;
    MessageStyle.fontSize = "2rem";
    MessageStyle.cursor = "progress";
    MessageStyle.fontFamily = "'Montserrat Alternates', sans-serif";
    MessageStyle.color = "darkblue";
    MessageStyle.textAlign = "center";
    MessageStyle.textShadow = "2px 2px 1px #5bfdd3"
    MessageStyle.display = "flex";
    MessageStyle.flexDirection = "column";
    MessageStyle.justifyContent = "center";
    Message.innerText = "Thank You for choosing me.\nI will contact you soon.\n\n\nYou will be redirected to the home page in 5 seconds";
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 5000);
}