var typed = new Typed(".text",{
    strings:["Fullstack Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function sendEmail() {
    window.location.href = "mailto:sandaruaberathne@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your services.";
  }