module.exports = {
    customID: 'PO1',
    async execute(interaction) {
        await interaction.reply({ content: `Pulled out`, ephemeral: true });
    },
};