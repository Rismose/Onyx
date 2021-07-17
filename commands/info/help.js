const Discord = require('discord.js')
const fs = require('fs');

module.exports = {
	name: 'help',
	description: 'View bot info.',
	commandOptions: null,
    global: false,
	execute(interaction) {
        const dir = './commands';

        fs.readdir(dir, (err, files) => {
            const infoembed = new Discord.MessageEmbed()
                .setColor('#3371FF')
                .setTitle('Help Menu')
                .setThumbnail(client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .addFields(
                    { name: `Fun Commands`, value: "`/imgsearch`\n`/meme`\n`/ping`\n`/wiki`", inline: true },
                    { name: `Info Commands`, value: "`/botinfo`\n`/help`", inline: true},
                    { name: `Mod Commands`, value: "undefined", inline: true}
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