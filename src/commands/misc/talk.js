const { SlashCommandBuilder, ButtonBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('talk')
		.setDescription('Talk as the bot.')
        .addStringOption(option => 
            option.setName("message")
            .setDescription("The message you want to say.")
            .setRequired(true)
        )
        .addChannelOption(option => 
            option.setName("channel")
            .setDescription("The channel you want the message to be sent to. (Optional)")
            .setRequired(false)
        ),
	async execute(interaction) {
        if(interaction.member.roles.cache.has("813372011748261919") || interaction.member.roles.cache.has("813372044787580968")) {
            interaction.reply({content: "Message sent.", ephemeral: true})
            const messageembed = new MessageEmbed()
            .setTitle("Cosso Assistant")
            .setDescription(interaction.options.getString('message'))
            .setTimestamp(Date.now())
            .setColor('#E6CA62')
            const channel = interaction.options.getChannel('channel')
            if(channel) {
                channel.send({embeds: [messageembed]})
            } else {
                interaction.channel.send({embeds: [messageembed]})
            }
        } else {
            interaction.reply({content: "You do not have enough permissions!", ephemeral: true})
        }

	},
};