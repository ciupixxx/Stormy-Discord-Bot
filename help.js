module.exports = {
    name: 'help',
    description: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('<:white_arrow:888150168380243998> Stormy Help Commands:')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        .addFields(
            {name: '<:white_arrow:888150168380243998> s/help-general', 
            value: '<:reply:888137869170987008> Shows general commands of bot.'},

            {name: '<:white_arrow:888150168380243998> s/help-utility', 
            value: '<:reply:888137869170987008> Shows utility commands of bot.'},

            {name: '<:white_arrow:888150168380243998> s/help-moderation', 
            value: '<:reply:888137869170987008> Shows moderation commands of bot.'},

            {name: '<:white_arrow:888150168380243998> s/help-fun', 
            value: '<:reply:888137869170987008> Shows fun commands of bot.'},

            {name: '<:white_arrow:888150168380243998> If you need more help, join our support server:', 
            value: '<:reply:888137869170987008> https://discord.io/stormysupport'},
        )
        .setFooter('Vex Bot. All Rights Reserved')
        message.channel.send(newEmbed);
    }
}