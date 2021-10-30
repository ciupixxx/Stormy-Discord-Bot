module.exports = {
    name: 'help-moderation',
    description: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('<:white_arrow:888150168380243998> Moderation  Commands:')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        .addFields(
            {name: '<:white_arrow:888150168380243998> s/clear', value: 
            '<:reply:888137869170987008>  Clear a number of messages from channel. You can only delete messages that are under 14 days old.'},

            {name: '<:white_arrow:888150168380243998> s/ban', value: 
            '<:reply:888137869170987008> Ban a member from the server. It only works if the role of bot is higher than the last role of the member.'},

            {name: '<:white_arrow:888150168380243998> s/unban', value: 
            '<:reply:888137869170987008> Unban a member from server. It only works if the role of bot is higher than the last role of the member.'},

            {name: '<:white_arrow:888150168380243998> s/kick', value: 
            '<:reply:888137869170987008> Kick a member from the server. It only works if the role of bot is higher than the last role of the member.'},

            {name: '<:white_arrow:888150168380243998> s/addrole', value: 
            '<:reply:888137869170987008> Add roles to users.'},

            {name: '<:white_arrow:888150168380243998> s/removerole', value: 
            '<:reply:888137869170987008> Remove roles from users.'},


            {name: '<:white_arrow:888150168380243998> s/nukechannel', value: 
            '<:reply:888137869170987008> Delete and copy the same channel..'},

            {name: '<:white_arrow:888150168380243998> s/nukeall', value: 
            '<:reply:888137869170987008> Nuke all channels from server.'},

            {name: '<:white_arrow:888150168380243998> s/lock', value: 
            '<:reply:888137869170987008> Disable everyone to send messages in channel.'},

            {name: '<:white_arrow:888150168380243998> s/unlock', value: 
            '<:reply:888137869170987008> Enable everyone to send messages in channel..'},

            {name: '<:white_arrow:888150168380243998> s/mute', value: 
            '<:reply:888137869170987008> Mute someone from server.'},

            {name: '<:white_arrow:888150168380243998> s/unmute', value: 
            '<:reply:888137869170987008> Unmute someone from server.'},
            

            {name: '<:white_arrow:888150168380243998> s/help-fun', value: 
            '<:reply:888137869170987008> Next page of commands.'},

            {name: ':shield: If you need more help, join our Support Server:', value: 
            '<:reply:888137869170987008> https://discord.io/stormysupport'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        message.channel.send(newEmbed);
    }
}