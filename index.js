const ticketSystem = require('djs-ticketsystem');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 's/';
const Levels = require('discord-xp')
const fs = require('fs');
const { execute } = require('./commands/info');
const { channel } = require('diagnostics_channel');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
// Bot Activity
client.on('ready', () => {
    client.user.setActivity(`s/help`);
})
// Console log
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
})
// Servers command
client.on('message', (message) => {
	if(message.content === 's/servers') {
		if(message.author.id !== "835607381467201576") return message.reply('Only Developer can use this command');
	 client.guilds.cache.forEach((guild) => {
		message.channel.send(guild.name)
		message.react('✅')
	})
}
});
// Anti invite
client.on('message', (message) => {
if (message.content.includes("discord.gg/")) {
	message.delete();
}
});
client.on('message', (message) => { 
	if (message.content.includes('https://steamcomminuty.com/give-nitro')) { 
	  message.delete()
		.then(message.channel.send
(`:x:  **Link deleted.** These links are not permitted on this server!\n <:reply:888137869170987008> **Member: ${message.author.tag}**`))
}
})
// Mute command
client.on("message", message => {
	if (message.content.startsWith(prefix + "mute")) {
	  
	  var muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"));
	  var muteUser = message.mentions.members.first();
	  var muteReason = message.content.slice(prefix.length + 27);
	  
	  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send
	  (":x:  You need MANAGE_MESSAGES Permission to use this!"); 
	  if (!muteUser) return message.channel.send
	  (":x:  Usage: ``s/mute <Member>``");
	  if (!muteRole) return message.channel.send
	  (":x:  There's no role called muted! Please create one!");
	  if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send
	  ("I Don't have permissions to use this.");
	  if (!muteReason) muteReason = "No reason given";
	  
	  var muteEmbed = new Discord.MessageEmbed() 
	  .setColor('#070707')
	  .setTitle("<:white_arrow:888150168380243998> Member has been muted.")
	  .addField("<:white_arrow:888150168380243998> Muted user:", muteUser)
	  .addField("<:white_arrow:888150168380243998> Reason:", muteReason)
	  .addField(`<:white_arrow:888150168380243998> Muted by`, `${message.author.tag}`)
	  .setTimestamp();
	  
	  muteUser.roles.add(muteRole);
	  message.channel.send(muteEmbed);
	}
})
// Unmute command
client.on('message', message => {
    if (message.content.startsWith(prefix + 'unmute')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply
		(':x:  You need MANAGE_MESSAGES Permission to use this!') 
            const role = message.guild.roles.cache.find(role => role.name === 'muted');
            const member = message.mentions.members.first();
            member.roles.remove(role);
            message.channel.send(':white_check_mark:  Member unmuted.');
    }
})
// Ticket System
client.on('message', message => {
    if (message.content == 's/ticket') {
        message.guild.createTicket({ owner: message.author })
		message.channel.send(':white_check_mark:  Ticket opened.', { fetchReply: true })
		.catch(console.error);
    };
});
// Roll command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'roll':
			rollmessage(message);

			function rollmessage(message) {
				var messages = 
				[
				'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', 
				'19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', 
				'36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', 
				'53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
				'70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', 
				'87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100',
			];
				var roll = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[roll]);
			}
			break;
	}
});
// Cat command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'cat':
			catmessage(message);

			function catmessage(message) {
				var messages = 
				[
				 'https://cdn.weeb.sh/images/B1xZmcVNKz.jpeg', 
				 'https://cdn.weeb.sh/images/B1zQqNEKM.jpeg', 
				 'https://cdn.weeb.sh/images/SJgaf5VEKf.jpeg', 
				 'https://cdn.weeb.sh/images/r1gxAtE4Fz.png', 
				 'https://cdn.weeb.sh/images/ryCAY44YM.gif', 
				 'https://cdn.weeb.sh/images/BkW6x54Etz.jpeg', 
				 'https://cdn.weeb.sh/images/HyQ-mcVEYG.jpeg', 
				 'https://cdn.weeb.sh/images/ryaM9VEFf.jpeg', 
				 'https://cdn.weeb.sh/images/HylcTFNEFz.png', 
				 'https://cdn.weeb.sh/images/HyGpgc44tG.jpeg', 
				 'https://cdn.weeb.sh/images/HyTTtN4Yf.png', 
				 'https://cdn.weeb.sh/images/rJl6ecEEKM.jpeg',
				 'https://cdn.weeb.sh/images/SyllQqVNKG.jpeg', 
				 'https://cdn.weeb.sh/images/rJVCKNNYG.jpeg', 
				 'https://cdn.weeb.sh/images/rJWTfqENKG.jpeg', 
				 'https://cdn.weeb.sh/images/B1ozc4EKf.jpeg', 
				 'https://cdn.weeb.sh/images/ByAzq4VYG.jpeg', 
				 'https://cdn.weeb.sh/images/SJV79NVFz.jpeg', 
				 'https://cdn.weeb.sh/images/rJl6ecEEKM.jpeg', 
				 'https://cdn.weeb.sh/images/HyTTtN4Yf.png',  
			];
				var cat = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[cat]);
			}
			break;
	}
});
// Slots command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'slots':
			slotsmessage(message);
			
			function slotsmessage(message) {
				var messages = 
				[
				//WIN SLOTS
				`------------------------ \n **>**🍎 **---** 🍎 **---** 🍎**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `, 
				`------------------------ \n **>**🍐 **---** 🍐 **---** 🍐**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `, 
				`------------------------ \n **>**🍊 **---** 🍊 **---** 🍊**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `, 
				`------------------------ \n**>**🍉 **---** 🍉 **---** 🍉**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `,
				`------------------------ \n**>**🍇 **---** 🍇 **---** 🍇**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `,
				`------------------------ \n**>**🍓 **---** 🍓 **---** 🍓**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `,
				`------------------------ \n**>**🍒 **---** 🍒 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `,
				`------------------------ \n**>**🫐 **---** 🫐 **---** 🫐**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `,
				`------------------------ \n**>**🍑 **---** 🍑 **---** 🍑**<**\n ------------------------ \n **${message.author.username}** You win! :partying_face: `,

				`------------------------ \n**>**🍎 **---** 🍎 **---** 🍐**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍐 **---** 🍐 **---** 🍎**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🍊 **---** 🍎**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍎 **---** 🍎 **---** 🍊**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🍒 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍇 **---** 🍇 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🍇 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍓 **---** 🍒 **---** 🍇**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍇 **---** 🍓 **---** 🍓**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍓 **---** 🍇 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🍇 **---** 🍓**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍑 **---** 🍑 **---** 🍐**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🫐 **---** 🍐 **---** 🫐**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🫐 **---** 🍎**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🫐 **---** 🍑 **---** 🍊**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🍒 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍇 **---** 🫐 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍊 **---** 🍇 **---** 🍒**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍑 **---** 🍒 **---** 🍇**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🫐 **---** 🍓 **---** 🍓**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍓 **---** 🫐 **---** 🫐**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**🍑 **---** 🍇 **---** 🫐**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**<:slots_seven:888151325009903637> **---** 🍓 **---** <:slots_seven:888151325009903637>**<**\n ------------------------ \n **${message.author.username}** You lost! :disappointed_relieved:`,
				`------------------------ \n**>**<:slots_seven:888151325009903637> **---** <:slots_seven:888151325009903637> **---** <:slots_seven:888151325009903637>**<**\n ------------------------ \n **${message.author.username}**  **JACKPOT!!** You win!`,

			];
				var slots = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[slots]);
			}
			break;
	}
});
// Gayrate command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'gayrate':
			gayratemessage(message);

			function gayratemessage(message) {
				var messages = 
				[
				'**You are 1% gay!** :rainbow_flag: ', '**You are 2% gay!** :rainbow_flag ',
				'**You are 3% gay!** :rainbow_flag: ', '**You are 4% gay!** :rainbow_flag: ',
				'**You are 5% gay!** :rainbow_flag: ', '**You are 8% gay!** :rainbow_flag: ',
				'**You are 9% gay!** :rainbow_flag: ', '**You are 10% gay!** :rainbow_flag: ',
				'**You are 11% gay!** :rainbow_flag: ', '**You are 12% gay!** :rainbow_flag: ',
				'**You are 13% gay!** :rainbow_flag: ', '**You are 14% gay!** :rainbow_flag: ',
				'**You are 15% gay!** :rainbow_flag: ', '**You are 16% gay!** :rainbow_flag: ',
				'**You are 17% gay!** :rainbow_flag: ', '**You are 18% gay!** :rainbow_flag: ',
				'**You are 19% gay!** :rainbow_flag: ', '**You are 20% gay!** :rainbow_flag: ',
				'**You are 21% gay!** :rainbow_flag: ', '**You are 22% gay!** :rainbow_flag: ',
				'**You are 23% gay!** :rainbow_flag: ', '**You are 24% gay!** :rainbow_flag: ',
				'**You are 25% gay!** :rainbow_flag: ', '**You are 26% gay!** :rainbow_flag: ',
				'**You are 27% gay!** :rainbow_flag: ', '**You are 28% gay!** :rainbow_flag: ',
				'**You are 29% gay!** :rainbow_flag: ', '**You are 30% gay!** :rainbow_flag: ',
				'**You are 31% gay!** :rainbow_flag: ', '**You are 32% gay!** :rainbow_flag: ',
				'**You are 33% gay!** :rainbow_flag:', '**You are 34% gay!** :rainbow_flag: ',
				'**You are 35% gay!** :rainbow_flag: ', '**You are 36% gay!** :rainbow_flag: ',
				'**You are 37% gay!** :rainbow_flag: ', '**You are 38% gay!** :rainbow_flag: ',
				'**You are 39% gay!** :rainbow_flag:', '**You are 40% gay!** :rainbow_flag: ',
				'**You are 41% gay!** :rainbow_flag: ', '**You are 42% gay!** :rainbow_flag: ',
				'**You are 43% gay!** :rainbow_flag: ', '**You are 44% gay!** :rainbow_flag: ',
				'**You are 45% gay!** :rainbow_flag: ', '**You are 46% gay!** :rainbow_flag: ',
				'**You are 47% gay!** :rainbow_flag: ', '**You are 48% gay!** :rainbow_flag: ',
				'**You are 49% gay!** :rainbow_flag: ', '**You are 50% gay!** :rainbow_flag: ',
				'**You are 51% gay!** :rainbow_flag: ', '**You are 52% gay!** :rainbow_flag: ',
				'**You are 53% gay!** :rainbow_flag:', '**You are 54% gay!** :rainbow_flag: ',
				'**You are 55% gay!** :rainbow_flag: ', '**You are 56% gay!** :rainbow_flag: ',
				'**You are 57% gay!** :rainbow_flag: ',	'**You are 58% gay!** :rainbow_flag: ',
				'**You are 59% gay!** :rainbow_flag: ', '**You are 60% gay!** :rainbow_flag: ',
				'**You are 61% gay!** :rainbow_flag: ', '**You are 62% gay!** :rainbow_flag: ',
				'**You are 63% gay!** :rainbow_flag: ', '**You are 64% gay!** :rainbow_flag: ',
				'**You are 65% gay!** :rainbow_flag: ', '**You are 66% gay!** :rainbow_flag: ',
				'**You are 67% gay!** :rainbow_flag: ', '**You are 68% gay!** :rainbow_flag: ',
				'**You are 69% gay!** :rainbow_flag: ', '**You are 70% gay!** :rainbow_flag: ',
				'**You are 71% gay!** :rainbow_flag: ', '**You are 72% gay!** :rainbow_flag: ',
				'**You are 73% gay!** :rainbow_flag: ', '**You are 74% gay!** :rainbow_flag: ',
				'**You are 75% gay!** :rainbow_flag: ', '**You are 76% gay!** :rainbow_flag: ',
				'**You are 77% gay!** :rainbow_flag: ', '**You are 78% gay!** :rainbow_flag: ',
				'**You are 79% gay!** :rainbow_flag: ', '**You are 80% gay!** :rainbow_flag: ',
				'**You are 81% gay!** :rainbow_flag: ', '**You are 82% gay!** :rainbow_flag: ',
				'**You are 83% gay!** :rainbow_flag: ', '**You are 84% gay!** :rainbow_flag: ',
				'**You are 85% gay!** :rainbow_flag: ', '**You are 86% gay!** :rainbow_flag: ',
				'**You are 87% gay!** :rainbow_flag: ', '**You are 88% gay!** :rainbow_flag: ',
				'**You are 89% gay!** :rainbow_flag: ', '**You are 90% gay!** :rainbow_flag: ',
				'**You are 91% gay!** :rainbow_flag: ', '**You are 92% gay!** :rainbow_flag: ',
				'**You are 93% gay!** :rainbow_flag: ', '**You are 94% gay!** :rainbow_flag: ',
				'**You are 95% gay!** :rainbow_flag: ', '**You are 96% gay!** :rainbow_flag: ',
				'**You are 97% gay!** :rainbow_flag: ', '**You are 98% gay!** :rainbow_flag: ',
				'**You are 99% gay!** :rainbow_flag: ', '**You are 100% gay!** :rainbow_flag: ',

			];
				var gayrate = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[gayrate]);
			}
			break;
	}
});
// Simprate command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'simprate':
			simpratemessage(message);

			function simpratemessage(message) {
				var messages = 
				[
				'**You are 1% simp!** <:vexbot_simp:879377142440402974> ', '**You are 2% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 3% simp!** <:vexbot_simp:879377142440402974> ', '**You are 4% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 5% simp!** <:vexbot_simp:879377142440402974> ', '**You are 6% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 7% simp!** <:vexbot_simp:879377142440402974> ', '**You are 8% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 9% simp!** <:vexbot_simp:879377142440402974>', '**You are 10% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 11% simp!** <:vexbot_simp:879377142440402974> ', '**You are 12% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 13% simp!** <:vexbot_simp:879377142440402974> ', '**You are 14% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 15% simp!** <:vexbot_simp:879377142440402974> ', '**You are 16% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 17% simp!** <:vexbot_simp:879377142440402974> ', '**You are 18% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 19% simp!** <:vexbot_simp:879377142440402974> ', '**You are 20% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 21% simp!** <:vexbot_simp:879377142440402974>', '**You are 22% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 23% simp!** <:vexbot_simp:879377142440402974> ', '**You are 24% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 25% simp!** <:vexbot_simp:879377142440402974> ', '**You are 26% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 27% simp!** <:vexbot_simp:879377142440402974> ', '**You are 28% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 29% simp!** <:vexbot_simp:879377142440402974> ', '**You are 30% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 31% simp!** <:vexbot_simp:879377142440402974> ', '**You are 32% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 33% simp!** <:vexbot_simp:879377142440402974> ', '**You are 34% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 35% simp!** <:vexbot_simp:879377142440402974> ', '**You are 36% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 37% simp!** <:vexbot_simp:879377142440402974> ', '**You are 38% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 39% simp!** <:vexbot_simp:879377142440402974> ', '**You are 40% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 41% simp!** <:vexbot_simp:879377142440402974> ', '**You are 42% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 43% simp!** <:vexbot_simp:879377142440402974> ', '**You are 44% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 45% simp!** <:vexbot_simp:879377142440402974> ', '**You are 46% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 47% simp!** <:vexbot_simp:879377142440402974>', '**You are 48% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 49% simp!** <:vexbot_simp:879377142440402974> ', '**You are 50% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 51% simp!** <:vexbot_simp:879377142440402974>', '**You are 52% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 53% simp!** <:vexbot_simp:879377142440402974> ', '**You are 54% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 55% simp!** <:vexbot_simp:879377142440402974> ', '**You are 56% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 57% simp!** <:vexbot_simp:879377142440402974> ', '**You are 58% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 59% simp!** <:vexbot_simp:879377142440402974> ', '**You are 60% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 61% simp!** <:vexbot_simp:879377142440402974> ', '**You are 62% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 63% simp!** <:vexbot_simp:879377142440402974> ', '**You are 64% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 65% simp!** <:vexbot_simp:879377142440402974> ', '**You are 66% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 67% simp!** <:vexbot_simp:879377142440402974> ', '**You are 68% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 69% simp!** <:vexbot_simp:879377142440402974>: ', '**You are 70% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 71% simp!** <:vexbot_simp:879377142440402974> ', '**You are 72% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 73% simp!** <:vexbot_simp:879377142440402974> ', '**You are 74% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 75% simp!** <:vexbot_simp:879377142440402974> ', '**You are 76% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 77% simp!** <:vexbot_simp:879377142440402974> ', '**You are 78% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 79% simp!** <:vexbot_simp:879377142440402974> ', '**You are 80% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 81% simp!** <:vexbot_simp:879377142440402974> ', '**You are 82% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 83% simp!** <:vexbot_simp:879377142440402974> ', '**You are 84% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 85% simp!** <:vexbot_simp:879377142440402974> ', '**You are 86% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 87% simp!** <:vexbot_simp:879377142440402974> ', '**You are 88% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 89% simp!** <:vexbot_simp:879377142440402974> ', '**You are 90% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 91% simp!** <:vexbot_simp:879377142440402974> ', '**You are 92% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 93% simp!** <:vexbot_simp:879377142440402974> ', '**You are 94% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 95% simp!** <:vexbot_simp:879377142440402974> ', '**You are 96% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 97% simp!** <:vexbot_simp:879377142440402974> ', '**You are 98% simp!** <:vexbot_simp:879377142440402974> ',
				'**You are 99% simp!** <:vexbot_simp:879377142440402974> ', '**You are 100% simp!** <:vexbot_simp:879377142440402974> ',

			];
				var simprate = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[simprate]);
			}
			break;
	}
});
// Gamerrate command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'gamerrate':
			gamerratemessage(message);

			function gamerratemessage(message) {
				var messages = 
				[
				'**You are 1% gamer!** :video_game:  ', '**You are 2% gamer!** :video_game:  ',
				'**You are 3% gamer!** :video_game:  ', '**You are 4% gamer!** :video_game:  ',
				'**You are 5% gamer!** :video_game:  ', '**You are 6% gamer!** :video_game:  ',
				'**You are 7% gamer!** :video_game:  ', '**You are 8% gamer!** :video_game:  ',
				'**You are 9% gamer!** :video_game: ', '**You are 10% gamer!** :video_game:  ',
				'**You are 11% gamer!** :video_game:  ', '**You are 12% gamer!** :video_game:  ',
				'**You are 13% gamer!** :video_game:  ', '**You are 14% gamer!** :video_game:  ',
				'**You are 15% gamer!** :video_game:  ', '**You are 16% gamer!** :video_game:  ',
				'**You are 17% gamer!** :video_game:  ', '**You are 18% gamer!** :video_game:  ',
				'**You are 19% gamer!** :video_game:  ', '**You are 20% gamer!** :video_game:  ',
				'**You are 21% gamer!** :video_game: ', '**You are 22% gamer!** :video_game:  ',
				'**You are 23% gamer!** :video_game:  ', '**You are 24% gamer!** :video_game:  ',
				'**You are 25% gamer!** :video_game:  ', '**You are 26% gamer!** :video_game:  ',
				'**You are 27% gamer!** :video_game:  ', '**You are 28% gamer!** :video_game:  ',
				'**You are 29% gamer!** :video_game:  ', '**You are 30% gamer!** :video_game:  ',
				'**You are 31% gamer!** :video_game:  ', '**You are 32% gamer!** :video_game:  ',
				'**You are 33% gamer!** :video_game:  ', '**You are 34% gamer!** :video_game:  ',
				'**You are 35% gamer!** :video_game:  ', '**You are 36% gamer!** :video_game:  ',
				'**You are 37% gamer!** :video_game:  ', '**You are 38% gamer!** :video_game:  ',
				'**You are 39% gamer!** :video_game:  ', '**You are 40% gamer!** :video_game:  ',
				'**You are 41% gamer!** :video_game:  ', '**You are 42% gamer!** :video_game:  ',
				'**You are 43% gamer!** :video_game:  ', '**You are 44% gamer!** :video_game:  ',
				'**You are 45% gamer!** :video_game:  ', '**You are 46% gamer!** :video_game:  ',
				'**You are 47% gamer!** :video_game: ', '**You are 48% gamer!** :video_game:  ',
				'**You are 49% gamer!** :video_game:  ', '**You are 50% gamer!** :video_game:  ',
				'**You are 51% gamer!** :video_game: ', '**You are 52% gamer!** :video_game:  ',
				'**You are 53% gamer!** :video_game:  ', '**You are 54% gamer!** :video_game:  ',
				'**You are 55% gamer!** :video_game:  ', '**You are 56% gamer!** :video_game:  ',
				'**You are 57% gamer!** :video_game:  ', '**You are 58% gamer!** :video_game:  ',
				'**You are 59% gamer!** :video_game:  ', '**You are 60% gamer!** :video_game:  ',
				'**You are 61% gamer!** :video_game:  ', '**You are 62% gamer!** :video_game:  ',
				'**You are 63% gamer!** :video_game:  ', '**You are 64% gamer!** :video_game:  ',
				'**You are 65% gamer!** :video_game:  ', '**You are 66% gamer!** :video_game:  ',
				'**You are 67% gamer!** :video_game:  ', '**You are 68% gamer!** :video_game:  ',
				'**You are 69% gamer!** :video_game: : ', '**You are 70% gamer!** :video_game:  ',
				'**You are 71% gamer!** :video_game:  ', '**You are 72% gamer!** :video_game:  ',
				'**You are 73% gamer!** :video_game:  ', '**You are 74% gamer!** :video_game:  ',
				'**You are 75% gamer!** :video_game:  ', '**You are 76% gamer!** :video_game:  ',
				'**You are 77% gamer!** :video_game:  ', '**You are 78% gamer!** :video_game:  ',
				'**You are 79% gamer!** :video_game:  ', '**You are 80% gamer!** :video_game:  ',
				'**You are 81% gamer!** :video_game:  ', '**You are 82% gamer!** :video_game:  ',
				'**You are 83% gamer!** :video_game:  ', '**You are 84% gamer!** :video_game:  ',
				'**You are 85% gamer!** :video_game:  ', '**You are 86% gamer!** :video_game:  ',
				'**You are 87% gamer!** :video_game:  ', '**You are 88% gamer!** :video_game:  ',
				'**You are 89% gamer!** :video_game:  ', '**You are 90% gamer!** :video_game:  ',
				'**You are 91% gamer!** :video_game:  ', '**You are 92% gamer!** :video_game:  ',
				'**You are 93% gamer!** :video_game:  ', '**You are 94% gamer!** :video_game:  ',
				'**You are 95% gamer!** :video_game:  ', '**You are 96% gamer!** :video_game:  ',
				'**You are 97% gamer!** :video_game:  ', '**You are 98% gamer!** :video_game:  ',
				'**You are 99% gamer!** :video_game:  ', '**You are 100% gamer!** :video_game:  ',

			];
				var gamerrate = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[gamerrate]);
			}
			break;
	}
});
// Porn command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	if (!message.content.startsWith(prefix)) return;
	if(!message.channel.nsfw) return;
	switch(args[0]) {
		case 'porn':
			pornmessage(message);

			function pornmessage(message) {
				var messages = 
				[
				'https://cdn.boob.bot/Gifs/16A5.gif', 'https://cdn.boob.bot/Gifs/16AF.gif',
				'https://cdn.boob.bot/Gifs/17AD.gif', 'https://cdn.boob.bot/Gifs/191A.gif',
				'https://cdn.boob.bot/Gifs/16F9.gif', 'https://cdn.boob.bot/Gifs/18BC.gif',
				'https://cdn.boob.bot/Gifs/1895.gif', 'https://cdn.boob.bot/Gifs/18C0.gif',
				'https://cdn.boob.bot/Gifs/1718.gif', 'https://cdn.boob.bot/Gifs/1876.gif',
				'https://cdn.boob.bot/Gifs/15E3.gif', 'https://cdn.boob.bot/Gifs/16FB.gif',
				'https://cdn.boob.bot/Gifs/15E8.gif', 'https://cdn.boob.bot/Gifs/1925.gif',
				'https://cdn.boob.bot/Gifs/1789.gif', 'https://cdn.boob.bot/Gifs/16A9.gif',
				'https://cdn.boob.bot/Gifs/18E8.gif', 'https://cdn.boob.bot/Gifs/17DF.gif',
				'https://cdn.boob.bot/Gifs/184D.gif', 'https://cdn.boob.bot/Gifs/1613.gif',
				'https://cdn.boob.bot/Gifs/1879.gif', 'https://cdn.boob.bot/Gifs/15E5.gif',
			];
				var porn = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[porn]);
			}
			break;
	}
});
// Meme command
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);

	switch(args[0]) {
		case 'meme':
			mememessage(message);

			function mememessage(message) {
				var messages = 
				[
				'https://i.redd.it/9jv8w6lgzhi71.gif', 'https://i.redd.it/imek7tnnjhi71.jpg', 
				'https://i.redd.it/sc068psk4hi71.png', 'https://i.redd.it/br2k2cnqkii71.jpg', 
				'https://i.redd.it/rf3isy3pvei71.jpg', 'https://i.redd.it/q1031d3i4hi71.png', 
				'https://i.redd.it/jbk1i19hkei71.jpg', 'https://i.redd.it/fg3kuaqq5gi71.gif', 
				'https://i.redd.it/62bcc8t8vgi71.jpg', 'https://i.redd.it/2d4rs0rb9fi71.jpg', 
				'https://i.redd.it/2o4v2tz47ei71.gif', 'https://i.redd.it/xwjva9k8mhi71.jpg',
				'https://i.redd.it/lqfy1ewhwii71.jpg', 'https://i.redd.it/g88722m0sei71.png',
				'https://i.redd.it/8kbkfjs0vei71.jpg', 'https://i.redd.it/7c5v46zcuii71.gif',
				'https://i.redd.it/jdex6s2azgi71.jpg', 'https://i.redd.it/yiu95ufbzii71.jpg',
				'https://i.redd.it/4lk9s9e08gi71.gif', 'https://i.redd.it/g88722m0sei71.png',
	   			'https://i.redd.it/ql8zenqtjii71.jpg', 'https://i.redd.it/anao04xnxii71.gif',
				'https://i.redd.it/sa4w2sab4fi71.jpg', 'https://i.redd.it/53l6fwsi1ji71.jpg',
				'https://i.redd.it/8u3j2bytjfi71.jpg', 'https://i.redd.it/gwu8pls73hi71.jpg',
				'https://i.redd.it/6iymyc0k5ei71.png', 'https://i.redd.it/fobacizgfii71.jpg',
		 		'https://i.redd.it/v4uiuwi2dii71.gif', 'https://i.redd.it/rzjt9i3rcgi71.gif',
				'https://i.redd.it/lm2zpbfr0gi71.jpg', 'https://i.redd.it/b8ue6jjb7ji71.jpg',
				'https://i.redd.it/8ovyzkxt5ei71.jpg', 'https://i.redd.it/17dlp226bii71.jpg',
				'https://i.redd.it/z9sur2rrnii71.png', 'https://i.redd.it/ebm7g58wphi71.jpg',
				'https://i.redd.it/o499nfw7zei71.jpg', 'https://i.redd.it/5zh11m4yvii71.gif',
				'https://i.redd.it/duqtkcrfqhi71.png', 'https://i.redd.it/lcw0ebi46ii71.gif',
				'https://i.redd.it/7jnkjs889ji71.jpg', 'https://i.redd.it/3eb2f7fqifi71.jpg',
				'https://i.redd.it/tntt32hz2ii71.jpg', 'https://i.redd.it/9aed6m1tmgi71.jpg',
				'https://i.redd.it/ymua6fceagi71.jpg', 'https://i.redd.it/a8kvd7qyaii71.jpg',
				'https://i.redd.it/ftu8a699xgi71.png', 'https://i.redd.it/ym1wys9zjii71.gif',
				'https://i.redd.it/7fu6lc4kzii71.jpg', 'https://i.redd.it/gkgi1ky5kgi71.jpg',
				'https://i.redd.it/1w40plgq3ii71.jpg', 'https://i.redd.it/qnaik2rflii71.jpg',
				'https://i.redd.it/kvf8t13luhi71.jpg', 'https://i.redd.it/blswqf1brhi71.jpg',
			];
				var meme = Math.floor(Math.random() * messages.length);

				message.channel.send(messages[meme]);
			}
			break;
	}
});
// Avatar command
client.on('message', message => {
	if (message.content === 's/avatar') {
		const embed = new Discord.MessageEmbed()
		.setTitle('<:white_arrow:888150168380243998> This is your Discord avatar:')
		.setDescription('<:reply:888137869170987008> This command only shows your stabile avatar.')
		.setFooter('Vex Bot. All Rights Reserved')
		.setThumbnail(message.author.displayAvatarURL())
		.setColor('#070707')
		message.reply(embed)
	}
});
// Bot stats command
client.on('message', message => {
	if(message.content === 's/botstats') {
		const embed = new Discord.MessageEmbed()
		.setColor('#070707')
		.setThumbnail('https://cdn.discordapp.com/attachments/872043264981762059/878754826853449758/vex_logo_purple.png')
		.addFields(
			{name: '<:white_arrow:888150168380243998> Vex Bot Counts', value: '----------------------------'},
			{name: `<:white_arrow:888150168380243998> Servers Count:`, value:`<:reply:888137869170987008> **${client.guilds.cache.size}** Total Servers`},
			{name: `<:white_arrow:888150168380243998> Total Members Count:`, value:`<:reply:888137869170987008> **${client.users.cache.size}** Total Members`}
		)
		message.channel.send(embed);
	}
})
// Command handler (Basic)
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
// All commands
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	} else if(command === 'help-general'){
		client.commands.get('help-general').execute(message, args, Discord);
	} else if(command === 'invite'){
		client.commands.get('invite').execute(message, args, Discord);
	} else if(command === 'info'){
	    client.commands.get('info').execute(message, args, Discord);
	} else if(command === 'banall'){
		client.commands.get('banall').execute(message, args);
	} else if(command === 'nukechannel'){
		client.commands.get('nukechannel').execute(message, args, Discord);
	} else if(command === 'ban'){
		client.commands.get('ban').execute(message, args, Discord);
	} else if(command === 'say'){
		client.commands.get('say').execute(message, args, Discord);
	} else if(command === 'clear'){
		client.commands.get('clear').execute(message, args, Discord);
	} else if(command === 'ban'){
		client.commands.get('ban').execute(message, args, Discord);
	} else if(command === 'kick'){
		client.commands.get('kick').execute(message, args, Discord);
	} else if(command === 'vote'){
		client.commands.get('vote').execute(message, args, Discord);
	} else if(command === 'support'){
		client.commands.get('support').execute(message, args, Discord);
	} else if(command === 'nukeall'){
		client.commands.get('nukeall').execute(message, args, Discord);
	} else if(command === 'unban') {
		client.commands.get('unban').execute(message, args);
	} else if(command === 'help-moderation') {
		client.commands.get('help-moderation').execute(message, args, Discord);
	} else if(command === 'help-fun') {
		client.commands.get('help-fun').execute(message, args, Discord);
	} else if(command === 'help') {
			client.commands.get('help').execute(message, args, Discord);
	} else if(command === 'help3') {
		client.commands.get('help3').execute(message, args, Discord);
	} else if(command === 'serverinfo') {
		client.commands.get('serverinfo').execute(message, args, Discord);
	} else if(command === 'lock') {
		client.commands.get('lock').execute(message, args, Discord);
	} else if(command === 'unlock') {
		client.commands.get('unlock').execute(message, args, Discord);
	} else if(command === 'slap') {
		client.commands.get('slap').execute(message, args, Discord);
	} else if(command === 'kiss') {
		client.commands.get('kiss').execute(message, args, Discord);
	} else if(command === 'hug') {
		client.commands.get('hug').execute(message, args, Discord);
	} else if(command === 'close') {
		client.commands.get('close').execute(message, args, Discord);
	} else if(command === 'kill') {
		client.commands.get('kill').execute(message, args, Discord);
	} else if(command === 'kill') {
		client.commands.get('kill').execute(message, args, Discord);
	} else if(command === 'slotss') {
		client.commands.get('slotss').execute(message, args, Discord);
	} else if(command === 'poll') {
		client.commands.get('poll').execute(message, args, Discord);
	} else if(command === 'userinfo') {
		client.commands.get('userinfo').execute(message, args, Discord);
	} else if(command === 'help-utility') {
		client.commands.get('help-utility').execute(message, args, Discord);
	} else if(command === 'help-utility') {
		client.commands.get('help-utility').execute(message, args, Discord);
	} else if(command === 'announce') {
		client.commands.get('announce').execute(message, args, Discord);
	} else if(command === 'addrole') {
		client.commands.get('addrole').execute(message, args, Discord);
	} else if(command === 'removerole') {
		client.commands.get('removerole').execute(message, args, Discord);
	} else if(command === 'dm') {
		client.commands.get('dm').execute(message, args, Discord);
	} else if(command === 'anti-invite') {
		client.commands.get('anti-invite').execute(message, args, Discord);
	}
});
// Bot login token
client.login('ODg4MTE5MTQyNDAwNTU3MTI5.YUODaA.SUPVnTgotYcSyjVs5ZZRFLAncS0');
