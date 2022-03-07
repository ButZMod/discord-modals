const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('öneri')
    .setDescription("Botun Destek Sunucusuna Öneri Gönderir");
module.exports.execute = async (client, interaction, db, config) => {

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
    ownerOnly: false,
};