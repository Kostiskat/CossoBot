module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
            setInterval(() => {
                client.user.setActivity("Medium Rank Applications")
                setTimeout(() => {
                    client.user.setActivity("with cocoa powder")
                    setTimeout(() => {
                        client.user.setActivity("with cocoa powder")
                    }, 10000);  
                }, 10000);
            }, 10000);
	},
};