// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const dotenv = require('dotenv');
// dotenv.config();
const pass = process.env.PASS;
const email = process.env.NEMAIL;
let nodemailer = require('nodemailer');
export default async function handler(req, res){
  
  const transport = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: email,
      pass,
    },
    secure: true,
  });

 const mailData = {
    from: email,
    to:email,
    subject: `Message From ${req.body.name}`,
    html: <div>{req.body.message}</div>
   }

    try{
      await transport.sendMail({
        ...mailData,
        html:"<h1>this is a test</h1>",
        phone: req.body.phone,
      });
      console.log("Email sent successfully");
    return res.status(200).json({ message: "Email sent successfully" });
    } catch(error){
      console.log(error)
      return res.status(400).json({message: error.message})
    }

  //  transport.sendMail(mailData, function (err, info) {
  //   if(err)
  //     console.log(err)
  //   else
  //     console.log(info)
  // })


  console.log(req.body)
}



















// import { mailOptions, transporter } from '@/config/mailer';

//  async function handler(req, res) {
//   if (req.method === 'POST') {
//     const data = req.body;
//     console.log(data)
//     res.status(200).json({ message: "success" });

//   try {
//       await transporter.sendMail({
//         ...mailOptions,
//         subject:data.website,
//         text:"this is a text string",
//         html:"<h1>title</h1><p>some text</p>"
//       });
//       res.status(200).json({ message: "success" }); 
//   }
//   catch(error) {
//     console.log(error)
//     res.status(405).json({ message:error.message});

//   }

// }
//   else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

