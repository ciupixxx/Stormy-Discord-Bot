module.exports = {
    name: 'help-general',
    description: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('<:white_arrow:888150168380243998> General Commands:')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        .addFields(
            {name: '<:white_arrow:888150168380243998> s/invite', value: 
            '<:reply:888137869170987008> Invite the bot in your server!'},

            {name: '<:white_arrow:888150168380243998> s/info', value: 
            '<:reply:888137869170987008> Display bot information.'},

            {name: '<:white_arrow:888150168380243998> s/support', value: 
            '<:reply:888137869170987008> If you need support, just type this command.'},

            {name: '<:white_arrow:888150168380243998> s/vote', value: 
            '<:reply:888137869170987008> Vote for Stormy on website!'},

            {name: '<:white_arrow:888150168380243998> s/botstats', value: 
            '<:reply:888137869170987008> Shows bot stats.'},

            {name: '<:white_arrow:888150168380243998> s/help-utility', value: 
            '<:reply:888137869170987008> Next page of commands.'},

            {name: ':shield: If you need more help, join our Support Server:', value: 
            '<:reply:888137869170987008> https://discord.io/stormysupport'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        message.channel.send(newEmbed);
    }
}