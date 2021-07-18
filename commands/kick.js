const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'bots kick command!',
    commandOptions: [{
            type: 6,
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
        const user = interaction.data.options[0].value
        const reason = interaction.data.options[1].value
        client.guilds.fetch(interaction.guild_id).then(guild => {
            guild.members.kick(user, reason).then(user => {
                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content: `Successfully kicked **${user.username}** for ${reason}`
                        }
                    }
                })
            })
        })
    }
}