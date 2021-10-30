module.exports = {
    name: 'support',
    description: 'Support server or contact the owner',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Vex Bot Support')
        .setColor('#070707')
        .addFields(
            {name: '<:white_arrow:888150168380243998> If you need Support, join our Support Server', value: '<:reply:888137869170987008> https://discord.io/stormysupport'},
            {name: '<:white_arrow:888150168380243998> If you need Support, you can contact the owner of Bot', value: '<:reply:888137869170987008> Discord: ciupixzx#0001'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        message.channel.send(newEmbed);
    }
}