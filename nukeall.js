module.exports = {
    name: 'nukeall',
    description: 'Nuke all channels from server.',
    async execute(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply
        (':x:  You need Administrator Permission to use this!');
        if(!message.guild.me.hasPermission('ADMINISTARTOR')) return message.reply
        (':x:  I need Administrator Permission to use this!')

        message.guild.channels.cache.forEach
        (channel => channel.delete());

        message.guild.roles.cache.forEach(role => role.delete());

        await message.guild.channels.create(`servernuked`, {
            type: 'text'
        }).then(async channel => {
            channel.send(':white_check_mark:  The server has been nuked by an Administaror!')
        })

    }
}
