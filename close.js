module.exports = {
    name: 'close',
    description: '',
    execute(message, args) {
        if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
        }
        console.error(message.channel.send(':x: Please use this command in your ticket channel.'));
    }
}