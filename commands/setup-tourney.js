const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(command => command.setName(`set up tournament`).setDescription(`Coming Soon`).setRequired(true)),
    async execute (interaction) {

        async function sendMessage(message) {
            const embed = new EmbedBuilder()
            .setColor("DarkNavy")
            .setDescription(message);

            await interaction.reply({ embeds: [embed], ephemeral: true });
        }  
    }
}