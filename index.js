const discord = require("discord.js");

const client = new discord.Client;

client.on("message", message => {
    console.log(message.author.username, " Mesaj: ", message.content);

    if (message.content == "sa") {
        message.channel.send(":wave:Aleyküm Selam!:wave:");
    }
    if (message.content == "sil") {
        message.channel.bulkDelete(100, true);
    }
    if (message.content == "yee") {
        message.channel.send("Yeeeeeee!");
    }
    if (message.content == "ping") {
        message.channel.send("Pong!");
    }
    if (message.content == "amk") {
        message.channel.bulkDelete(1, true);
        message.channel.send(message.author, " Küfür Etme!");
        message.channel.send("Küfür Etme!");
    }
    if (message.content == "!Bug") {
        message.member.setNickname("Buglandın", true);
    }
    if (message.content == "kanki" || message.content == "knk") {
        message.channel.send("Buyur Yeğen Kodlarım: \n sa -> Selam! \n Bug -> Adını Buglandın Yapar \n yee -> Seviniriz \n ping -> ping pong oynarız \n sil -> 100 Mesajı Silerim \n prenses -> Adın Prenses Olur \n bok -> Bok Emojisi Kısa Yolu \n türkiye -> Türkiye Bayrağı Kısa Yolu \n code -> kodlama & bilgisayar Emojisi Kısa Yolu \n kalp -> kalp Emojisi Kısa Yolu \n korona -> aşı Emojisi Kısa Yolu \n parti -> parti Emojisi Kısa Yolu");
    }
    if (message.content == "prenses") {
        message.member.setNickname("Prenses de Burada", true);
    }
    if (message.content == "bok") {
        message.channel.bulkDelete(1, true);
        message.channel.send(":poop:");
    }
    if (message.content == "türkiye") {
        message.channel.bulkDelete(1, true);
        message.channel.send(":flag_tr:");
    }
    if (message.content == "code") {
        message.channel.bulkDelete(1, true);
        message.channel.send(":computer:");
    }
    if (message.content == "kalp") {
        message.channel.bulkDelete(1, true);
        message.channel.send(":heart:");
    }
    if (message.content == "korona") {
        message.channel.bulkDelete(1, true);
        message.channel.send(":syringe:");
    }
    if (message.content == "parti") {
        message.channel.bulkDelete(1, true);
        message.channel.send(":partying_face:");
    }

});


client.login('NzUwNzE4MTUzOTI3MTYzOTc0.X0-mww.H1BWSgiNuDIV2Fl2NY9Ix_YFII8');