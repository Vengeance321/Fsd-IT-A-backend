const fs=require('fs')
const write=()=>{
    fs.writeFile('./data.txt',"new data",(err)=>{
        if(err) console.log(err)
        else console.log("file update sucesfully ")    
    }
)}
write()