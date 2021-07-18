const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'bots kick command!',
	commandOptions: [
        {
            type: 3,
            name: "user-tag",
            description: "User to kick!",
            required: true
        },
{
            type: 3,
            name: "reason",
            description: "why kick user!",
            required: true
        }
    ],
    global: false,
    execute(interaction) {
    const args1 = interaction.data.options[1].value.split(" ")
    const reason = args1
    const args2 = interaction.data.options[0].value.mentions.users.first()
    args2.kick().then(mem => {

    client.api.interactions(interaction.id, interaction.token).callback.post({data: {
            type: 4,
            data: {
                    content: `kicked ${mem.username} for ${reason}`
                }
            }
        })
})
}
}