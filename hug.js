module.exports = {
    name: 'hug',
    description: '',
    async execute(message, args, Discord) {
        if (!message.mentions.users.first()) return message.reply(":x:  You need to mention someone to hug!"); //if no one is mentions , lets reply as
   await message.channel.send(`:smiling_face_with_3_hearts:  **${message.mentions.users.first().username} has been hugged by ${message.author.username}!**`)
         message.channel.send('https://tenor.com/view/mochi-peachcat-mochi-peachcat-hug-pat-gif-19092449')        
    }
}