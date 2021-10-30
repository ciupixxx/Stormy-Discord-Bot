module.exports = {
    name: 'help-fun',
    description: '',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#070707')
        .setTitle('<:white_arrow:888150168380243998> Fun Commands:')
        .setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
        .addFields(
            {name: '<:white_arrow:888150168380243998> s/banall', 
            value: '<:reply:888137869170987008> Pretend to ban all Server Members.'},

            {name: '<:white_arrow:888150168380243998> s/say', 
            value: '<:reply:888137869170987008> Send a public message to all server members.'},

            {name: '<:white_arrow:888150168380243998> s/slap', 
            value: '<:reply:888137869170987008> Slap someone.'},

            {name: '<:white_arrow:888150168380243998> s/kiss', 
            value: '<:reply:888137869170987008> Kiss someone.'},

            {name: '<:white_arrow:888150168380243998> s/hug', 
            value: '<:reply:888137869170987008> Hug someone.'},

            {name: '<:white_arrow:888150168380243998> s/kill', 
            value: '<:reply:888137869170987008> Kill someone.'},

            {name: '<:white_arrow:888150168380243998> s/slots', 
            value: '<:reply:888137869170987008> Slots machine.'},

            {name: '<:white_arrow:888150168380243998> s/gayrate', 
            value: '<:reply:888137869170987008> Gayrate machine.'},

            {name: '<:white_arrow:888150168380243998> s/simprate',
            value: '<:reply:888137869170987008> Simprate machine.'},

            {name: '<:white_arrow:888150168380243998> s/gamerrate', 
            value: '<:reply:888137869170987008> Gamerrate machine.'},

            {name: '<:white_arrow:888150168380243998> s/roll', 
            value: '<:reply:888137869170987008> Send a random number between 1 and 100.'},

            {name: '<:white_arrow:888150168380243998> s/cat', 
            value: '<:reply:888137869170987008> Send random pictures of cats.'},

            {name: '<:white_arrow:888150168380243998> s/meme', 
            value: '<:reply:888137869170987008> Post a random meme in chat.'},

            {name: '<:white_arrow:888150168380243998> s/porn', 
            value: '<:reply:888137869170987008> Post a random porn content in chat. Only works in NSFW channels.'},
            
            {name: ':shield: If you need more help, join our Support Server:', 
            value: '<:reply:888137869170987008> https://discord.io/stormysupport'}
        )
        .setFooter('Vex Bot. All Rights Reserved')
        message.channel.send(newEmbed);
    }
}