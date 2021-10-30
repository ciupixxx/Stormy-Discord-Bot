
module.exports = {
    name: 'invite',
    description: '',
     execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .addFields(
            {name: '<:white_arrow:888150168380243998> Required Permission to add the bot: MANAGE_SERVER', value: 'https://discord.com/api/oauth2/authorize?client_id=888119142400557129&permissions=8&scope=bot'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        message.channel.send(newEmbed);
    }
}
