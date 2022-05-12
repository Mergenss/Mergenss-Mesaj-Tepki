const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Giriş Yaptım");
});





client.on("ready", () => {
    client.user.setActivity("Mergenss ❤️ Phoenix")// Burayada Botun Durumunda ne Yazsın İstyorsan Onu Koy Atıyorum Yarrak <3 Am Mesela
});

client.on("message", msg => {
    if(msg.content === "Günaydın") // Buraya Sa, as fln yaz işte amk ne yanıtlamasını istiyorsan 
    msg.reply("Günaydın Sabah Şekeri")
}
);






client.login("OTc0MzM2NTUyMDYwNzQ3ODU3.GEyBcJ.WouGhH07iCPUDPHORUQItBFTw0rd7j2Wx4Tu9M")// Buraya Tokenini Yaz Yavrum
