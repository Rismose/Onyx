const Discord = require('discord.js')

module.exports = {
    name: 'purge',
    description: 'bots purge command!',
    commandOptions: [{
        type: 4,
        name: "purge-amount",
        description: "How many messages to purge!",
        required: true
    }],
    global: false,
    async execute(interaction) {
        const channel = await client.channels.fetch(interaction.channel_id),
        amount = interaction.data.options[0].value;

        if (isNaN(amount)) {
            const resultembedn = new Discord.MessageEmbed()
                .setColor("#3371FF")
                .setTitle("Invalid.")
                .setDescription("Invalid Arguments.")

            return client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        embeds: [resultembedn]
                    }
                }
            })
        }

        channel.bulkDelete(amount)
            .then(() => {
                const resultembed = new Discord.MessageEmbed()
                    .setColor("#3371FF")
                    .setTitle(`Purged Successfully`)
                    .setFooter(amount + " messages purged")

                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            embeds: [resultembed]
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err);
                channel.send("An error occurred.")
            })
    }
}