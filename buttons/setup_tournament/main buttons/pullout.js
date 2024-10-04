const { ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle, Events, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    customID: 'pull-out',
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setColor(`DarkGold`)
        .setTitle(`Are you sure you want to exit this tourney`)

        const pullout = new ButtonBuilder()
        .setCustomId(`PO1`)
        .setLabel(`Pullout`)
        .setStyle(ButtonStyle.Danger)

        const row = new ActionRowBuilder()
        .addComponents(pullout);

        await interaction.reply({embeds:[embed], components:
        [row], ephemeral: true});
    },
};