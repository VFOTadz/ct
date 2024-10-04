const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`generate_winners`)
    .setDescription(`Coming Soon`),
    async execute (interaction) {}
}