const fs = require('fs').promises

async function solve(){
  const data =  await fs.readFile('./text.txt')
    console.log(data.toString())
}

solve()
