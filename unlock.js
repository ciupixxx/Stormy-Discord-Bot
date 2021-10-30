module.exports = {
    name: 'unlock',
    description: '',
    async execute(message, args) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply
        (':warning: You need MANAGE_CHANNELS Permission to use this!');
        if(!message.guild.me.hasPermission('ADMINISTARTOR')) return message.reply
        (':warning: I need MANAGE_CHANNELS Permission to use this!')

        let msg = await message.channel.send('Loading...')

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == '@everyone'), {
                SEND_MESSAGES: true,
                ADD_REACTIONS: true
            })
            msg.edit(':white_check_mark:  Channel successfully unlocked.')
        }catch(e) {
            console.error(message.channel.send(':x:  Something went wrong, the channel was not locked.'));
        }

    }
}