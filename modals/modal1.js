const { Events } = require(`discord.js`)

module.exports = {
   customID: "teamname",
    async execute(interaction) {

         if (!interaction.isModalSubmit()) return;
     
             await interaction.reply({ content: "Signed Up !", ephemeral: true})
         
     
         const teamname = interaction.fields.getTextInputValue("TeamName2");
     
         const member = interaction.user.id;
         const tag = interaction.user.tag;
     
         console.log(`TeamName: ${teamname}`)
   },
};