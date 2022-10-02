//register with all subscribers
//associative array
//as a key - type of data
//as a value - an array with all subscribers that are interested with the specific type
const subscribers = {}


//callback or handler
function subscribe(type,callback){
    console.log('new subscriber for', type)
    if(subscribers[type] === undefined){
        subscribers[type] = []
    } 
    subscribers[type].push(callback)
}

function publish(type,data){
    //this can be undefined :)
    console.log('received', type)
    const currSubscribers = subscribers[type]//an array
    if(currSubscribers){
        //subs are callback functions from subscribe
        for(let subs of currSubscribers){
            subs(data)//this is a function
        }
    }
}

module.exports = {
    subscribe,
    publish,
    subscribers
}