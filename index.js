import express from "express"
import path from "path";
import { checkValuation } from "./utils/utils.js";
const server = express();
const port = 5173;

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(),"source" , "views"))

var data = [];

(async function getData(){
    try{
        const res = await fetch("http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639")
        if(res.ok){
            const result = await res.json()
            data = [result]
        }
    }catch(err){
        console.log(err)
    } 
})()

server.get("/", (req,res)=>{
    const result = checkValuation(data)
    res.render("home", {result})
})

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})