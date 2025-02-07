import express from 'express'

const app = express();

app.get("/home",(req, res)=>{
    res.send("hellow i'm on Home Page ")
})
app.get("/about",(req, res)=>{
    res.send("hellow i'm on About page ")
})
app.get("/hi",(req, res)=>{
    res.send("Bye")
})
const Port = 5001;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});
