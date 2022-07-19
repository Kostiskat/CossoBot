const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('Message someone.')
        .addUserOption(option => 
            option.setName("user")
            .setDescription("The user you wish to message.")
            .setRequired(true)
        )
        .addStringOption(option => 
            option.setName("message")
            .setDescription("The message you want to send out.")
            .setRequired(true)
        )
        .addBooleanOption(option => 
            option.setName("sendcopy")
            .setDescription("Send a copy of that message in your DMs.")
            .setRequired(false)
        ),
	async execute(interaction) {
        if(interaction.member.roles.cache.has("813372011748261919") || interaction.member.roles.cache.has("813372044787580968")) {
            const user = interaction.options.getUser('user')
            const message = interaction.options.getString('message')
            const sendcopy = interaction.options.getBoolean('sendcopy')
            const confirmationembed = new MessageEmbed()
            .setTitle(`Message sent`)
            .setDescription(`Your message has been successfuly delivered to ${user}. ${(sendcopy ? "A copy has also been sent to your inbox." : "")}`)
            .setFooter("Cosso Assistant")
            .setTimestamp(Date.now())
            .setColor("#E6CA62")
            const dmembed = new MessageEmbed()
            .setTitle(`Incoming Message`)
            .setDescription(message)
            .setFooter("Cosso Assistant | This is an official bot message sent by the High ranks.")
            .setTimestamp(Date.now())
            .setColor("#E6CA62")
            user.send({embeds: [dmembed]})
            if(sendcopy == true) {
                interaction.user.send({embeds: [dmembed]})
            }
            interaction.reply({embeds: [confirmationembed], ephemeral: true})
        } else {
            interaction.reply({content: "You do not have enough permissions!", ephemeral: true})
        }

	},
};