const Discord = require('discord.js')
const fs = require('fs');

module.exports = {
	name: 'botinfo',
	description: 'View bot info.',
	commandOptions: null,
    global: false,
	execute(interaction) {
        const ram = process.memoryUsage().heapUsed / 1024 / 1024
        const dir = './commands/';

        fs.readdir(dir, (err, files) => {
            const infoembed = new Discord.MessageEmbed()
                .setColor('#3371FF')
                .setTitle('Bot information')
                .setThumbnail(client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .addFields(
                    { name: 'Bot name', value: 'Onyx', inline: true },
                    { name: 'Developer', value: `Rismose#0079`, inline: true },
                    { name: "RAM", value: `${Math.round(ram * 100) / 100}MB`, inline: true}
                )
                .addFields(
                    { name: 'Server count', value: client.guilds.cache.size + " server(s)", inline: true },
                    { name: 'User count', value: client.users.cache.size + " user(s)", inline: true},
                    { name: 'Uptime', value: client.uptime / 1000 + " seconds"}
                )
                .setFooter(client.user.tag, client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .setTimestamp()

            client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                type: 4,
                data: {
                        embeds: [infoembed]
                    }
                }
            })
        });
	},
};