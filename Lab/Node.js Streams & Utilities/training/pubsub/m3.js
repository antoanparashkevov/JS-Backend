const {publish} = require('./observer')

let aim = 10 * 10;

setInterval(()=>{
    publish('content', aim);
    aim+=10;
},2000)