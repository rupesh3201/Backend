import express from 'express'

const app = express();
const Studnet = ["Rupesh", "Nilesh", "Harish"];
// app listing on something
app.get("/Student",(req, res)=>{
    console.log(req.query);
    res.json({
        sucess : true,
        data : Studnet,
        message : `Studnt fetch sucessfully  `,
    });
})
const port = 5001;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});

