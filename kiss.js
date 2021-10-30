module.exports = {
    name: 'kiss',
    description: '',
    async execute(message, args, Discord) {
        if (!message.mentions.users.first()) return message.reply(":x:  You need to mention someone to kiss!"); //if no one is mentions , lets reply as
   await message.channel.send(`:kiss: **${message.mentions.users.first().username} has been kissed by ${message.author.username}!**`)
         message.channel.send('https://tenor.com/view/gif-gif-19826141')        
    }
}