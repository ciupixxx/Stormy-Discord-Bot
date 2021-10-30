module.exports = {
    name: 'announce',
    description: '',
    execute(message, args) {
            if (!args[0]) return message.reply(':x:  Usage: ``s/announce <Message>``');
            if (message.guild && message.content.startsWith('s/announce')) {
            if (message.member.id != '835607381467201576') return message.reply
            (':x:  Only Developers can use this!');
              let text = message.content.slice('s/announce'.length); // cuts off the /private part
              message.guild.members.cache.forEach(member => {
              member.send(text)});
              message.react('✅')
            }
    }
}