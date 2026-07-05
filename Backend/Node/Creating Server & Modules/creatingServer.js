const http=require("http");
const PORT=3000;

server=http.createServer((req,res)=>{
    res.end("This is my first server\n This is new Line\n This is new update.")
})

server.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})
