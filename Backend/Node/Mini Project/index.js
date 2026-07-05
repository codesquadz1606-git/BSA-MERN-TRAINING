/*
    Want to create a server
    Where I want to create the QR CODE,
    From a url
*/

// const inquirer=require("inquirer")
import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"

inquirer.prompt([
        {
            message:"Enter the url/text for qr-image",
            name:"URL"
        },
        {
            message:"Enter file Name :",
            name:"filename"
        }
    ])
    .then((answers)=>{
        const {URL , filename}= answers;
        // console.log(ans);
        var qr_png=qr.image(URL, {type:"png"});
        qr_png.pipe(fs.createWriteStream(`${filename}_url.png`));

        fs.appendFile("totalUrls",URL,(err)=>{
            if (err) throw err;
        })
    })
    .catch((err)=>{
        console.log(err)
    })