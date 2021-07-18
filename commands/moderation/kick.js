const Discord = require('discord.js')
const fs = require('fs');

module.exports = {
	name: 'kick',
	description: 'bots kick command!',
	commandOptions: null,
    global: false,
	execute(interaction) {
const args1 = interaction.data.options[0].value.split(" ")
const reason = args1
const args2 = interaction.data.options[1].mentions.users.first()
await args2.kick().then(mem => {
message.channel.send(`kicked ${mem.username}`)
return
})
}
}
