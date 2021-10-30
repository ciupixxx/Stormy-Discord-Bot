module.exports = {
    name: 'kill',
    description: '',
    async execute(message, args, Discord) {
        if (!message.mentions.users.first()) return message.reply(":x:  You need to mention someone to kill!"); //if no one is mentions , lets reply as
   await message.channel.send(`:skull_crossbones: **${message.mentions.users.first().username} died**`)  
    }
}