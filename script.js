emailjs.init("F_kPLptV-wo7VPNZG");

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {

const to = document.getElementById("to").value;
const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    
    emailjs.send("service_gxncw89", "template_u9recp9", {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Sähköpsti lähetetty!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Virhe tuli!";
            result.style.opacity = 1;
        });
    }