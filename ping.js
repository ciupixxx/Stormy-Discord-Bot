module.exports={
    name:'ping',
    description: "",
    execute(message, args){
        message.channel.send(`:ping_pong: **Pong!**`);
        }
      };