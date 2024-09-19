const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);
const notes = require(`../Schemas/releasenotes.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`release-notes`)
    .setDescription(`Release notes`)
    .addSubcommand(command => command.setName(`publish`).setDescription(`Add new release notes developers only)`).addStringOption(option => option.setName(`updated-notes`).setDescription(`The notes to publish`).setRequired(true)))
    .addSubcommand(command => command.setName(`view`).setDescription(`view the most recent release notes`)),
    async execute (interaction) {

        const { options } = interaction;
        const sub = options.getSubcommand();
        var data = await notes.find();

        async function sendMessage(message) {
            const embed = new EmbedBuilder()
            .setColor("DarkNavy")
            .setDescription(message);

            await interaction.reply({ embeds: [embed], ephemeral: true });
        }

        async function updateNotes(update, version) {
            await notes.create({
                Updates: update,
                Date: Date.now(),
                Developer: interaction.user.username,
                Version: version
            });

            await sendMessage(`I have updated your release notes`)
        }

        switch (sub) {
            case `publish`:
                if (interaction.user.id !== `1273801711924023316`) {
                    await sendMessage(`Sorry only Tadzy can use this`)
                } else {
                    const update = options.getString(`updated-notes`);
                    if (data.length > 0) {
                        await notes.deleteMany();

                        var version = 0;
                        await data.forEach(async value => {
                            version += value.version;
                        });

                        await updateNotes(update, version+0.1);
                    } else {
                        await updateNotes(update, 1.0);
                    }
                }
            break;
            case `view`:
                if  (data.length == 0) {
                    await sendMessage(`There are no public release notes yet`);
                } else {
                    var string = ``;
                    await data.forEach(async value => {
                        string += `\`${value.version}\` \n\n**Update Imfomation:**\n\`\`\`${value.Updates}\`\`\`\n\n**Updating Developer:** ${value.Developer}\n**Update Date:** <t:${Math.floor(value.Date / 1000)}:R>`;
                    });

                    await sendMessage(` **Release Nottes** ${string}`);
                }
        }
    }
}