//  import node mailer.
const nodemailer = require("nodemailer");

//  Configure email and send it.
async function sendMail() {
 
    // create an email Transporter. 
    //  SMTP (Simple Mail Tranfer Protocol)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: "kumardinesh1908@gmail.com",
        pass: "uxyt xzhy ixop hfne"        
        }
    })

    //  Configure email content
    const mailOptions = {
        from: "kumardinesh1908@gmail.com",
        to: "kumardinesh1908@gmail.com",
        subject: "Test Email",
        text: "This is a test email-2"
    }

    // Send an email
    try{
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent");
    }catch (err){
        console.log(err);
    }
    
}

sendMail();
