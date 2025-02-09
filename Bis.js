import express from 'express'

const app = express();
const Books = ["Rupesh", "Nilesh", "Harish"]
// app listing on something
app.get("/Student",(req, res)=>{
    console.log(req.query);
    res.json({
        message : `hellow ${req.query.name} `,
    });
})
const port = 5001;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});

