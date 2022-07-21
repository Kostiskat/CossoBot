const { SlashCommandBuilder, ButtonBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('pass')
		.setDescription('Pass an application and send the prompt for user data submission.')
        .addUserOption(option => 
            option.setName("user")
            .setDescription("The user's application you wish to pass.")
            .setRequired(true)
        ),
	async execute(interaction) {
        if(interaction.member.roles.cache.has("813372011748261919") || interaction.member.roles.cache.has("813372044787580968")) {
            const confirmationembed = new MessageEmbed()
            .setTitle(`Message sent`)
            .setDescription(`Your message has been successfuly delivered to ${interaction.options.getUser('user')}.`)
            .setFooter("Cosso Assistant")
            .setTimestamp(Date.now())
            .setColor("#E6CA62")
            const dmembed = new MessageEmbed()
            .setTitle(`Applications passed`)
            .setDescription(`Hello ${interaction.options.getUser('user')} congratulations on passing Cosso's Medium Rank Applications! The Employment Department thought your application was great and appreciates your willingness to dedicate your time to Cosso. As we're still in-development, what we ask from you is very minimal. The Employment Department will be looking for staff who are...\n\n• Actively chatting in #community. This includes general conversations and answering questions. To keep this chat active, we are hoping you will post around **50 messages a week**. \n• Going on **alliance visitations**. Right now we do have minimal partnerships; however, are constantly looking for more and are hoping to increase this number as soon as possible. \n\nIn order to proceed, please click the buttom below and fill in the requested fields appropriately. If you have any questions, please forward them to a member of the Employment Department. We're extremely excited to welcome a brand new team of Medium Ranks. \n\n<@${interaction.user.id}>\n**High Rank**`)
            .setFooter("Cosso Assistant | This is an official bot message sent by the High ranks.")
            .setTimestamp(Date.now())
            .setColor("#E6CA62")
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('datasubmit')
                .setLabel("Submit Information")
                .setStyle("SUCCESS")
            )
            
            interaction.reply({embeds: [confirmationembed], ephemeral: true})
            interaction.options.getUser('user').send({embeds: [dmembed], components: [row]})
        } else {
            interaction.reply({content: "You do not have enough permissions!", ephemeral: true})
        }

	},
};