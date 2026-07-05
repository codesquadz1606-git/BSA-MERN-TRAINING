const fs=require("fs");

// UTF-8 it is a middleware , which converts BUFFER to the content

// fs.readFile("demo.txt","UTF-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })

// fs.writeFile("demo.txt","\nThis new line Added",(err)=>{ // purana remove karke new add kar detaa h.
//     if(err) throw err;
//     else console.log("Data has been written")
// })

// fs.appendFile("demo.txt","This is my append statement",(err)=>{ // add content in existing content.
//     if(err) throw err;
//     else console.log("Done.")
// })

// fs.unlink("demo.txt",(err)=>{ // for removing any file.
//     if(err) throw err;
//     else console.log("Removed")
// })

// CallBack Hell
// fs.readFile("data1.txt","UTF-8",(err,data1)=>{
//     if(err) throw err
//     fs.readFile("data2.txt","UTF-8",(err,data2)=>{
//         if(err) throw err;
//         fs.writeFile("Combined.txt",data1+data2,(err)=>{
//             if(err) throw err;
//             else console.log("Data Added");
//         })
//     })
// })

// Using Promises
const fsP=require("fs").promises;

fsP.readFile("data1.txt","UTF-8") // data 1
.then((data1)=> fsP.readFile("data2.txt","utf-8") // dat 2
.then((data2)=> fsP.writeFile("CT2.txt",data1+data2)))3
.catch((err)=> console.log(err));