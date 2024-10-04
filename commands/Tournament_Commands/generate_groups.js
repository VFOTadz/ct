const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`generate_groups`)
    .setDescription(`Coming Soon`),
    async execute (interaction) {

        const embed = new EmbedBuilder()
        .setColor(`Aqua`)
        .setTitle(`TEST`)
        .setDescription(`test`)
        .addFields(
            { name: `this is a test`, value: `test` }
        )
        
        const scores = new ButtonBuilder()
        .setCustomId(`Enter-Scores`)
        .setLabel(`Enter-Scores`)
        .setStyle(ButtonStyle.Success)

        const changescores = new ButtonBuilder()
        .setCustomId(`Change-Scores`)
        .setLabel(`Change-Scores`)
        .setStyle(ButtonStyle.Danger);

        const settings = new ButtonBuilder()
        .setCustomId(`Team-Settings`)
        .setLabel(`Team-Settings`)
        .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder()
        .addComponents(scores, changescores, settings);

        await interaction.reply({
            components: [row],
        });
    },
}