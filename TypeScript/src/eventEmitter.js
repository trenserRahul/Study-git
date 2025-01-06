const EventEmitter = require ("events");
const event = new EventEmitter();
event.on('myName',()=> {
    console.log("My  ");
})

//we can call mltiple callback function with a single event

event.on('myName',()=> {
    console.log("My name  ");
})
event.on('myName',()=> {
    console.log("My name is ");
})
event.emit('myName');

//passing parameter 

event.on('parameter',(code,msg)=>{
    console.log(`STATUS CODE IS ${code} THE PAGE IS ${msg}`)
})

event.emit('parameter','200','ok');