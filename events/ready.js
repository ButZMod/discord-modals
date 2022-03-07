module.exports = async (client) => {
    client.user.setStatus("idle");
    var oyun = [
      `/yardım | ${client.guilds.cache.size} Sunucuya hizmet veriyoruz!`,
      "Destek Sunucusu discord.gg/botlist",
      "Yapımcım : But'ZMod#0001",
      `/yardım | ${client.users.cache.size} Kullanıcıya hizmet veriyoruz `,
      `#Electus Her Daim`
    ];
  
    setInterval(function() {
      var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
  
      client.user.setActivity(oyun[random], "");
    }, 2 * 2500);
    client.functions.log("Bot giriş yaptı.", "READY");
    let usersCountjust = client.guilds.cache.reduce((a,b) => a + b.memberCount, 0).toLocaleString()
    let users2Count = client.users.cache.size;
    let guild = client.guilds.cache.size;
    let channel = client.channels.cache.size;
    let emojis = client.emojis.cache.size;
    let role = client.guilds.cache.reduce((a,b) => a + b.roles.cache.size, 0)
    client.functions.log(`Kullanıcı: [${usersCountjust}]`, "READY");
    client.functions.log(`Kullanıcı: [${users2Count}]`, "READY");
    client.functions.log(`Sunucu: [${guild}]`, "READY");
    client.functions.log(`Kanal: [${channel}]`, "READY");
    client.functions.log(`Emoji: [${emojis}]`, "READY");
    client.functions.log(`Rol: [${role}]`, "READY");
};
