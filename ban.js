module.exports = {
    name: 'ban',
    description: 'Ban a member from server',
    execute(message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply
        (':warning: You need BAN_MEMBERS Permission!');
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply
        (':warning: I need BAN_MEMBERS Permission!')
        if (!args[0]) return message.reply(":x:  Usage: ``s/ban <@Member>``"); 
        if(message.mentions.users.first().id === "835607381467201576") return message.reply
        (':x:  Something went wrong!'); 
        
        const member = message.mentions.users.first();
        if(member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`:white_check_mark:  User has been banned from server.`)
        }
    }
}
