const fs = require('fs')


//sync operations
const txt = fs.readFileSync('./text.txt')
console.log(txt.toString())

const result = fs.readdirSync('.')//curr directory
console.log(result)//an array

for(let item of result){
    if(fs.statSync(`./${item}`).isDirectory()){
        console.log(item,'is directory')
    }else{
        console.log(item,'is file')
    }
}

fs.writeFileSync('./text.txt','Hello world part 2')

//async operations
fs.readFile('./text.txt',(err,data)=>{
    if(err!==null){
        return err.message;
    }
    console.log(data.toString())
})


