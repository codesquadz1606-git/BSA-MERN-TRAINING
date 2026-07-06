import http from 'http';
let users=[
    {id:1,name:"Umesh"},
    {id:2,name:"Lokesh"}
]
const server=http.createServer((req,res)=>{

    // res.end("This is my new Server\nThis is new line\nThird line");
    if(req.url==="/users" && req.method==="GET"){
        res.writeHead(200,{
            'content-type':'application/json'
        })
        // res.end("This is my first api")
        return res.end(JSON.stringify(users));
    }

    else if(req.url==="/users" && req.method==="POST"){
        let body=""; // string
        req.on("data",chunk => {
            body+=chunk;
        });

        req.on("end",()=>{
            const user=JSON.parse(body); // string ko json 
            users.push({
                id:user.id,
                name:user.name
            })
            res.writeHead(201,{
                'Content-type':'application/json'
            });
            res.end({
                message:"Data Created",
                data : users
            });
        })

        return;
    }
})

server.listen(3000,()=>{
    console.log("Listening at 3000");
})