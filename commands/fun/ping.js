const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'showping',
    
    run: async(client, interaction, args) => {
        interaction.editReply({content : `Ping : ${client.ws.ping}`})
    }
}