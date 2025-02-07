import express from 'express'

const app = express();
const Port = 5001;
app.listen(Port,()=>
{
    console.log(`server is running on ${Port}`);
});
