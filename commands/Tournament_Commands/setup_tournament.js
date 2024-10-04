const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder,
     ButtonStyle, Component, EmbedBuilder, ModalBuilder, Events,
    TextChannel, TextInputStyle, 
    PermissionFlagsBits,
    Options} = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`setup_tournament`)
    .setDescription(`Coming Soon`)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute (interaction) {

        const embed = new EmbedBuilder()
        .setColor(`DarkGold`)
        .setTitle(`*Competing  Teams*`)
        .addFields(
            { name: `🔔Starts At...`, value: `*XX/XX/XX*`},
            { name: `🎮Console`, value: `Crossplay`},
            { name: `🚫Rules`, value: `**Please note** that CT Premium get pirority entry if entered before *18:30*`},
            { name: `⚜️Infomation`, value: `Simply click **Enter** to join the tournamrnt or **Pull-out** to exit. You can also select **More Options** to report bugs, change your team name or even report bot issues !`}
        )
        const signup = new ButtonBuilder()
        .setCustomId(`sign-up`)
        .setLabel(`Sign Up`)
        .setStyle(ButtonStyle.Success)

        const pullout = new ButtonBuilder()
        .setCustomId(`pull-out`)
        .setLabel(`Pull Out`)
        .setStyle(ButtonStyle.Danger);

        const moreoptions = new ButtonBuilder()
        .setCustomId(`moreoptions`)
        .setLabel(`More Options`)
        .setStyle(ButtonStyle.Primary)
        .setDisabled(true);

        

        const row = new ActionRowBuilder()
        .addComponents(signup , pullout, moreoptions);

        await interaction.reply({ embeds:[embed], components:
        [row]});
    },
        
};