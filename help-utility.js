module.exports = {
    name: 'help-utility',
    description: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('<:white_arrow:888150168380243998> Utility Commands:')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        .addFields(
            {name: '<:white_arrow:888150168380243998> s/serverinfo', value: 
            '<:reply:888137869170987008> Shows server information.'},

            {name: '<:white_arrow:888150168380243998> s/userinfo <@Member>', value: 
            '<:reply:888137869170987008> Display user info from server!'},

            {name: '<:white_arrow:888150168380243998> s/ticket', value: 
            '<:reply:888137869170987008> Create a ticket. Only the owner can see the ticket.'},

            {name: '<:white_arrow:888150168380243998> s/close', value: 
            '<:reply:888137869170987008> Close an open ticket.'},

            {name: '<:white_arrow:888150168380243998> s/dm', value: 
            '<:reply:888137869170987008> Send a Direct Message to a user using the bot.'},

            {name: '<:white_arrow:888150168380243998> s/ping', value: 
            '<:reply:888137869170987008> Ping? Pong!'},

            {name: '<:white_arrow:888150168380243998> s/avatar', value: 
            '<:reply:888137869170987008> Display your Discord Avatar.'},

            {name: '<:white_arrow:888150168380243998> s/help-moderation', value: 
            '<:reply:888137869170987008> Next page of commands.'},

            {name: ':shield: If you need more help, join our Support Server:', value: 
            '<:reply:888137869170987008> https://discord.io/stormysupport'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        message.channel.send(newEmbed);
    }
}