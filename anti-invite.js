module.exports = {
    name: 'anti-invite',
    description: '',
    execute(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply
        (':x:  You need ADMINISTRATOR Permission to use this!');
        message.channel.send
        (`:white_check_mark:  **Anti-Invite is enable. Invites will be deleted automatic.**`)
    }
}