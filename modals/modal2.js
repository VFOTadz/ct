const { Events } = require(`discord.js`)

module.exports = {
   customID: "RT1",
    async execute(interaction) {

         if (!interaction.isModalSubmit()) return;
     
             await interaction.reply({ content: "Team Name Changed", ephemeral: true})
         
     
         const teamname = interaction.fields.getTextInputValue(`RT2`);
     
         const member = interaction.user.id;
         const tag = interaction.user.tag;
     
         console.log(`NewTeamName: ${newteamname}`)
   },
};