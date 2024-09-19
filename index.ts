const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(command => command.setName(`set up tournament`).setDescription(`Coming Soon`).setRequired(true)),
    async execute (interaction) {

        async function sendMessage(message) {
            const Embed = new EmbedBuilder()
            .setColor("DarkNavy")
            .setTitle(`CT Tournaments`)
            .setDescription(message)
            .addFields(
                { name: `Test`, value:  `Test`}
            )

            await interaction.reply({ embeds: [Embed], ephemeral: true });
        }  
    }
}