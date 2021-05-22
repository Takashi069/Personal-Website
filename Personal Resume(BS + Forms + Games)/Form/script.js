function Submity() {
    console.log("Check1");
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
    console.log("Check2");
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 5000);
}