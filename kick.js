module.exports = {
    name: 'kick',
    description: '',
    execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply
        (':x:  You need KICK_MEMBERS Permission to use this!');
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply
        (':x:  I need KICK_MEMBERS Permission to use this!')
        if (!args[0]) return message.reply(":x:  Usage: ``s/kick <@Member>``");
        if(message.mentions.users.first().id === "835607381467201576") return message.reply
        (':x:  Something went wrong!'); 
        const member = message.mentions.users.first();
        if(member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(':white_check_mark:  User has been kicked.');
        }
    }
}
