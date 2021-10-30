module.exports = {
    name: 'unban',
    description: '',
    execute(message, args) {
            if(!message.member.hasPermission("BAN_MEMBERS")) {
              return message.channel.send
              ('":x:  You need BAN_MEMBERS Permission to use this!')
            }
            if (!args[0]) return message.reply
            (":x:  Usage: ``s/unban <Member id>``");

            if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
              return message.channel.send
              ('":x:  I need BAN_MEMBERS Permission to use this!')
            }
            
            let userID = args[0]
              message.guild.fetchBans().then(bans=> {
              if(bans.size == 0) return 
              let bUser = bans.find(b => b.user.id == userID)
              if(!bUser) return
              message.guild.members.unban(bUser.user)
              message.channel.send(':white_check_mark:  User has been unbanned from server')
              
        })
    }
}