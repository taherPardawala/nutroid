let instance = require('rtsocketclient')({url:"http://localhost:3000",userId:'userid'});
let client = instance.defineClient();
client.say("HI!");

instance.on('text',function(data){
    console.log("YAY",data);
})
