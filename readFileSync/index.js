const fs=require("fs")
const data=fs.readFileSync("b.txt","utf-8")
console.log(data) 

fs.readFile("a.txt","utf-8",(res,error)=>{
    if(error){
        console.log(error)
    }
   else{
        console.log(res)
    }
})