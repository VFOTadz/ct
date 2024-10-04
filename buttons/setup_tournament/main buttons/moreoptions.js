const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require(`discord.js`);

module.exports = {
    customID: 'moreoptions',
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setColor(`DarkGold`)
        .setTitle(`Select an option`)
        .addFields(
            { name: `Rename Team`, value: `Once selected youll have the option to change the team name you entered into the tournament - you will also be given the option to make this your new team name / nickname`},
            { name: `Add Co Manager`, value: `Once selected you will be able to add and remove co managers from the entered team ! please note that co managers wont have access to group chats unless the main manager cant respond / no active`},
            { name: `Troubleshoot`, value: `please note that this is a staff only command ! if your having issues with the bot please contact a member of staff`},
            { name: `Report a Bug`, value: `please use this command to report bugs and bugs only - any false reports can result in concequences`}
        )

        const renameteam = new ButtonBuilder()
        .setCustomId(`CN1`)
        .setLabel(`Rename Team`)
        .setStyle(ButtonStyle.Secondary)

        const AddCoManager = new ButtonBuilder()
        .setCustomId(`ACM1`)
        .setLabel(`Add Co Manager`)
        .setStyle(ButtonStyle.Secondary)

        const Troubleshoot = new ButtonBuilder()
        .setCustomId(`T1`)
        .setLabel(`Troubleshoot`)
        .setStyle(ButtonStyle.Secondary)

        const BugReport = new ButtonBuilder()
        .setCustomId(`BR1`)
        .setLabel(`Report Bug`)
        .setStyle(ButtonStyle.Secondary)

        const row = new ActionRowBuilder()
        .addComponents(renameteam, AddCoManager, Troubleshoot, BugReport);

        interaction.reply({ embeds:[embed], components:
        [row], ephemeral: true});
    },
};