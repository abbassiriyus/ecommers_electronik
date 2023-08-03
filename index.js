const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")
const fs=require('fs')
const nodemailer =require("nodemailer")
const product=require('./router/product')
const img=require('./router/img')
const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "webabbas9@gmail.com",
      pass: "hftxvfnsdklodkwh"
   }
});

const mailOptions = {
   from: "webabbas9@gmail.com",
   to: "nodirbeklider12@gmail.com",
   subject: "Nodemailer Test",
   html: "Test <button>sending</button> Gmail using Node JS"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error,"error");
   }else{
      console.log("Email sent: " + info.response);

   }
});

//  app.use("/auth" , user )
app.use("/api",product)
app.use("/api",img)
app.listen(5001, () => {

    console.log("Localhost is Running");
})

