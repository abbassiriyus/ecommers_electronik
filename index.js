const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")
const pool = require("./db")
const fs=require('fs')
// const user =require('./router/user.js')
const bodyParser = require('body-parser');
const path = require('path'); 
app.use(fileUpload())
app.use(cors())
app.use(express.static("Images"))
app.use(bodyParser.json());

// app.get('/verify/:token', (req, res)=>{
//     const {token} = req.params;
//     jwt.verify(token, 'ourSecretKey', function(err, decoded) {
//         if (err) {
//             console.log(err);
//             res.send("Email verification failed,possibly the link is invalid or expired");
//         }
//         else {
//             res.send("Email verifified successfully");
//         }
//     });
// });

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/doc.html'));
//   });
  
//  app.use("/auth" , user )
app.listen(5000, () => {
    console.log("Localhost is Running");
})

