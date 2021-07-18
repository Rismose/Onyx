const Discord = require('discord.js')

module.exports = {
    name: 'purge',
    description: 'bots purge command!',
	commandOptions: [
        {
            type: 3,
            name: "purge-amount",
            description: "How many messages to purge!",
            required: true
        }
    ],
    global: false,
    execute(interaction) {
    const channel = client.channels.cache.get(interaction.channel_id),
    amount = interaction.data.options[0].value;

    channel.bulkDelete(amount)

    function logResults(error, results) {
        if (error) {
            console.log(error);
            message.channel.send("An error occurred.")
        } else {

            if(!results[0]) {
                const resultembedn = new Discord.MessageEmbed()
                    .setColor("#3371FF")
                    .setTitle("Invalid.")
                    .setDescription("Invalid Arguments.")

                return client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                    type: 4,
                    data: {
                            embeds: [resultembedn]
                        }
                    }
                })
            }

            const resultembed = new Discord.MessageEmbed()
                .setColor("#3371FF")
                .setTitle(`Purged Successfully - ${search}`)
                .setFooter(amount + " messages purged")

            client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                type: 4,
                data: {
                        embeds: [resultembed]
                    }
                }
            })
        }
    }
    }
}