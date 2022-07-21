const { TextInputStyle } = require("discord-api-types/v10");
const {  Modal, TextInputComponent, MessageActionRow } = require("discord.js");


module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isButton()) return;
        const modal = new Modal()
        .setCustomId("collectdata")
        .setTitle("Your Information")
        const username = new TextInputComponent()
        .setCustomId('username')
        .setLabel("Your Roblox username")
        .setRequired(true)
        .setStyle(TextInputStyle.Short)
        const trello = new TextInputComponent()
        .setCustomId("trellouser")
        .setLabel("Your Trello username:")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        const email = new TextInputComponent()
        .setCustomId("timezone")
        .setLabel("Your timezone:")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        
        const questions = new TextInputComponent()
        .setCustomId("questions")
        .setLabel("Any last questions?")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true)
        const firstrow = new MessageActionRow().addComponents([username])
        const secondrow = new MessageActionRow().addComponents([trello])
        const thirdrow = new MessageActionRow().addComponents([email])
        const fourthrow = new MessageActionRow().addComponents([questions])
        modal.addComponents([firstrow, secondrow, thirdrow, fourthrow])
        await interaction.showModal(modal)
 
    }
}