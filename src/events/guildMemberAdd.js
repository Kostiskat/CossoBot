const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'guildMemberAdd',
    async execute(interaction, client) {
        console.log("new member")
        const welcomeEmbed = new MessageEmbed()
        .setTitle(`Welcome to Cosso `)
        .setDescription(`Greetings, <@${interaction.user.id}>! If you haven't already, be sure to head over to <#813100198506004513> and read our guidelines! If you have any questions, don't be afraid to ask a High Rank! Otherwise, enjoy your stay!`)
        .setFooter("Cosso Assistant")
        .setTimestamp(Date.now())
        .setColor("#E6CA62")
        await client.guilds.cache.get("813099319321165835").channels.cache.get("886719990001184778").send({embeds: [welcomeEmbed]})
    }
}