module.exports = {
    name: 'clear',
    description: "Delete/Clear messages with a simple command",
    async execute(message, args) {
        if (message.member.permissions.has("MANAGE_MESSAGES")) {
            if (!args[0]) return message.reply(":x:  Please enter the amount of messages to clear!");

            if (isNaN(args[0])) return message.reply
            (":x:  Please type a real number!");

            if (args[0] > 100) return message.reply(
                ":x:  You can't remove more than 100 messages at once!");

            if (args[0] < 1) return message.reply(":x:  You have to delete at least one message!");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
                message.channel.send
                (":white_check_mark:  **Successfully deleted " + "`" + args[0] + " messages`**")
                    .then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
            });
        } else {
            message.channel.send(":x:  You need MANAGE_MESSAGES Permission to use this!");
        }
    }
}
