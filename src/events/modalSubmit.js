const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction, client) {
        if(!interaction.isModalSubmit()) return;
        const trello = interaction.fields.getTextInputValue('trellouser')
        const timezone = interaction.fields.getTextInputValue('timezone')
        const questions = interaction.fields.getTextInputValue('questions')
        const username = interaction.fields.getTextInputValue('username')
        console.log("hey")
        interaction.reply("Thanks for your submission. The data you entered were sent to the HR team and will be processed soon.")
        const dataembed = new MessageEmbed()
        .setTitle(`${username}'s Profile`)
        .setDescription(`**Trello Username**: ${trello}\n**Timezone**: ${timezone}\n**Questions**: ${questions}`)
        .setFooter({text: "This is raw data submitted by the user and have not been processed in any way."})
        .setColor('#E6CA62')
        client.guilds.cache.get('958450796737990656').channels.cache.get('999229869923778560').send({embeds: [dataembed]})
	},
};