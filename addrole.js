module.exports = {
    name: 'addrole',
    description: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply
        (':warning: You need MANAGE_ROLES Permission to use this!');
        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply
        (':warning: I need MANAGE_ROLES Permission!')

        let target = message.mentions.members.first();

        if(!target) return message.reply(':x: Usage: **s/addrole <@user> <@role>**');

        let role = message.mentions.roles.first();

        if(!role) return message.reply(':x: Usage: **s/addrole <@user> <@role>**');

        return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#070707')
            .setDescription(`:white_check_mark:  Added ${role} to ${target.user.username}`)
        ).then(target.roles.add(role));

    }
}