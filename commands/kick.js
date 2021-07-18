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
    const user = interaction.data.options[1].mentions.users.first()
    const reason = interaction.data.options[0].value.split(" ")
    user.kick().then(mem => {

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