module.exports = {
    name: 'info',
    description: 'Display all Bot commands.',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('Stormy Information:')
        .setThumbnail
        ('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        .addFields (
            {name: '<:white_arrow:888150168380243998> Name:', value: '```Stormy#9520```'},
            {name: '<:white_arrow:888150168380243998> Developer:', value: '```iD/Mention:``` <:white_arrow:888150168380243998> <@835607381467201576>', inline: true},
            {name: '<:white_arrow:888150168380243998> Bot prefix:', value: '```s! (Not Customizable)```'},
            {name: '<:white_arrow:888150168380243998> Bot ID:', value: '```888119142400557129```'},
            {name: '<:white_arrow:888150168380243998> Bot Status:', value: '```Online```'},
            {name: '<:white_arrow:888150168380243998> Bot version | EST:', value: '```1.0.0v EST. 17/09/21 22:00```'},
        )
        .setFooter('Stormy. All Rights Reserved')
        message.channel.send(newEmbed);
    }
}