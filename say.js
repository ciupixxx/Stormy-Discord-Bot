const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'say',
    description: 'say something',
    execute(message, args, Discord) {
        if (!args[0]) return message.reply(':x:  Usage: ``s/say <Message>``');
        const newEmbed =  new Discord.MessageEmbed()
        .setAuthor(message.author.tag , message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(args.join(" "))
        .setColor('#070707')
        .setTimestamp()
        .setFooter('Vex Bot. All Rights Reserved')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        message.channel.send(newEmbed);
    }
}
