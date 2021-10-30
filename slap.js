module.exports = {
    name: 'slap',
    description: '',
    async execute(message, args, Discord) {
        if (!message.mentions.users.first()) return message.reply(":x:  You need to mention someone to slap them"); //if no one is mentions , lets reply as
    if(message.mentions.users.first().id === "835607381467201576") return message.reply(':x:  You cant slap the Developer!'); //if they mentions you , lets reply as
    const newEmbed = new Discord.MessageEmbed() //once discordjs is updated to 12.2.0 , richembed is removed , they replaced as MessageEmbed Method
   await message.channel.send(`<:vexbot_slap:879172966884188223> **${message.mentions.users.first().username} has been slaped by ${message.author.username}!**`)
         message.channel.send('https://cdn.discordapp.com/attachments/872043264981762059/879170842737639424/slap-smack-face.gif')        
    }
}