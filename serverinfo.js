module.exports = {
    name: 'serverinfo',
    descriprion: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField('<:white_arrow:888150168380243998> Server ID:', `<:reply:888137869170987008> **${(message.guild.id)}**`)
        .addFields (
            {name: `<:white_arrow:888150168380243998> Owner:`, value: `<:reply:888137869170987008> **${message.guild.owner.user.tag}**`},
            {name: `<:white_arrow:888150168380243998> Owner ID:`, value: `<:reply:888137869170987008> **(${message.guild.owner.id})**`},
            {name: `<:white_arrow:888150168380243998> Members Count:`, value: 
            `<:reply:888137869170987008> ${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size} (${message.guild.members.cache.filter(m=>m.user.bot).size} bots)`},
            

        )
        .addField('<:white_arrow:888150168380243998> Server Region:',  message.guild.region)
        .addField('<:white_arrow:888150168380243998> Created on:', message.guild.createdAt.toLocaleString())
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.guild.name)
        message.channel.send(newEmbed);
    }
}