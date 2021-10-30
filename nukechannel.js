module.exports = {
    name: 'nukechannel',
    description: 'Nuke a channel.',
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply
        (':x:  You need Administrator Permission to nuke a channel!');
        if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply
        (':x:  I need Administrator Permission to nuke a channel!')

        message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.setPosition);
            message.channel.delete()

            ch.send(':white_check_mark:  **This channel has been nuked by an Server Administrator!**')
        })
    }
}