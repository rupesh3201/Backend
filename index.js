import express from 'express'

const server = express();

server.get("/hi",( req, res) =>{
    res.send("hellow")
});
server.listen(5000);
