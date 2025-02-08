import express from 'express'

const app = express();
// app listing on something
app.get("/home",(req, res)=>{
    console.log(req.query);
    res.json({
        message : `hellow ${req.query.name} and your age is ${age}`,
    });
})
// get is method  /about is route and endpoint controller its has two objet req and res
// app.get("/about",(req, res)=>{
//     res.send("hellow i'm on About page ")
// })
// app.get("/hi",(req, res)=>{
//     res.send("Bye")
// })
// app.get("/result",(req, res)=>{
//     console.log(req);
//     console.log(res);
//     res.json({
//         sucess : true ,
//         message :" result ",
//         data : {
//             class : 10 ,
//             sub : "Hindi" ,
//             marks : 85   ,
//             result: "PASS"
//         }
//     })
// })
const Port = 5001;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});

//installing a postmon

// why we use npm run dev 
// log in postmon saved 
// Working well creayted colletion fot all 
// http://localhost:5001/home?name=panakj&age=21