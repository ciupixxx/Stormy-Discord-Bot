module.exports = {
    name: 'banall',
    description: 'Fake ban all server members',
    execute(message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply
        (':x:  You need Administrator Permission to use this.');
        message.channel.send(':white_check_mark:  Banned all Server Members..');
    }
}
