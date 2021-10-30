module.exports = {
    name: 'vote',
    description: 'Vote for bot',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('<:white_arrow:888150168380243998> You can vote every 12h on top.gg')
        .addFields(
            {name: '<:white_arrow:888150168380243998> If you like this bot, you can vote for him on the site:', value: 
            '<:reply:888137869170987008> https://top.gg/bot/869045656172527636/vote'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        .setThumbnail
        ('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        message.channel.send(newEmbed);
    }
}