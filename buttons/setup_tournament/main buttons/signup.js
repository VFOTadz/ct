const { ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle, Events } = require("discord.js")

module.exports = {
    customID: 'sign-up',
    async execute(interaction, client) {

        const modal = new ModalBuilder()
        .setCustomId(`teamname`)
        .setTitle(`Team Name`)

        const TeamName2 = new TextInputBuilder()
        .setCustomId(`TeamName2`)
        .setLabel("Please Enter Your Team Name!")
        .setStyle(TextInputStyle.Short);

        const firstActionRow = new ActionRowBuilder().addComponents(TeamName2);

        modal.addComponents(firstActionRow);

        await interaction.showModal(modal);
    },
};

