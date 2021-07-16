module.exports = {
	name: 'ping',
	description: 'Ping!',
    usage: 'usage here',
	execute(message) {
		message.channel.send('Pong.');
	},
};
