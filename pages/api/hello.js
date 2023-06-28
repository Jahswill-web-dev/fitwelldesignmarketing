// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default function handler(req, res) {

  if (req.method === 'POST') {
    // console.log(req)
    // console.log(req.body)

    const data = req.body;
    console.log(data)
    res.status(200).json({ message: "success" });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }






  // // if (req.method === 'POST') {
  //   const data = req.body;
  //   res.status(200).json(data);
  //   // console.log(data);
  // // } 
  // // else {
  // //   res.status(405).json({ message: 'Method Not Allowed' });
  // // }
}

