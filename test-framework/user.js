let instance = require('./client')({url:"http://localhost:3000",userId:'userid'});
let client = instance.defineClient();
client.say("asdasd");

instance.on('text',function(data){
    console.log("YAY",data);
})
