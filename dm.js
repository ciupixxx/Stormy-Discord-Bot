const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'dm',
    description: '',
    execute(message, args, Discord) {
        if (!args[0]) return message.reply(":x: Usage: **s/dm <id member> <message>**");

        const member = message.guild.members.cache.get(args[0]);
        member.user.send(
            new MessageEmbed()
            .setDescription(args.slice(1).join(' '))
            .setFooter(`From this server: ${message.guild.name}`)
            .setTimestamp()
            .setColor('#070707')
        ).then(() => message.channel.send('✅ DM was sent!'))
    }
}