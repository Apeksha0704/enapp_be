const express=require("express");
const cors=require("cors");
const nodemailer=require("nodemailer");

const app=express();
app.use(cors())
app.use(express.json())

function sendEmail(name,phone,query)
{

 let transporter=nodemailer.createTransport({
 service:"gmail",
 auth:{
        user:"apekshadongare2003@gmail.com",
        pass:"ofmakuhxxxhwhdbh"
    }
});
let mailOption={
      from:"apekshadongare2003@gmail.com",
       to:"sakshidongare2000@gmail.com",
      subject:"Enquiry from"+name,
     text:phone+""+query
}


transporter.sendMail(mailOption,(err,info)=>{
if(err)
 console.log("mail err",err);
else
 console.log("mail send",info.response);
})
}


app.post("/save",(req,res)=>{
  const name=req.body.name;
  const phone=req.body.phone;
  const query=req.body.query;
  console.log(name+""+phone+""+query);
  sendEmail(name,phone,query);
  res.send("success");
})

app.listen(9000,()=>{console.log("ready@9000")})
