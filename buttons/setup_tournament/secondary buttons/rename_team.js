const { EmbedBuilder } = require("discord.js");

module.exports = {
    customID:  `TN1`,
    async execute(interaction) {
        const modal = new ModalBuilder()
        .setCustomId(`RT1`)
        .setTitle(`Change Your Team Name`)

        const TeamName2 = new TextInputBuilder()
        .setCustomId(`RT2`)
        .setLabel("Please Enter Your New Team Name!")
        .setStyle(TextInputStyle.Short);

        const firstActionRow = new ActionRowBuilder().addComponents(TeamName2);

        modal.addComponents(firstActionRow);

        await interaction.showModal(modal);
    },
};