import express from 'express'

const server = express();

server.get("/hi",( req, res) =>{
    res.send("hellow Our first server created good ")
});
server.listen(5000);
