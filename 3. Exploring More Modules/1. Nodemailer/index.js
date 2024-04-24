// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';
const Solution = () => {
  // Write your code here
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter your email: ", (email) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj"
      }
    });

    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: email,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!"
    }
    
    try {
      const info = transporter.sendMail(mailOptions);
      console.log("Email sent");
    } catch (err) {
      console.log(err);
    }
  });
  // rl.close();
};
export default Solution;
