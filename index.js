require('dotenv').config()
const Discord = require('discord.js')

const testGuild = '813034684614311997'
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGES",
      ],
})

const getApp = (testGuild) => {
    const app = client.api.applications(client.user.id)
    if (testGuild) {
        app.guilds(testGuild)
    }
    return app
}

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const commands = await getApp(testGuild).commands.get()
console.log(commands)
});

client.login(process.env.token);