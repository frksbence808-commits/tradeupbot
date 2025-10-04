require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
    console.log(`✅ Bejelentkezve mint ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith("!tradeup")) {
        const skinName = message.content.replace("!tradeup ", "").trim();

        if (!skinName) {
            return message.reply("Adj meg egy skin nevet! Példa: `!tradeup AWP PAW`");
        }

        // Demo válasz
        message.reply(`🔍 Ezt a skint adtad meg: **${skinName}**. (Itt majd input skineket fog visszaadni!)`);
    }
});

client.login(process.env.DISCORD_TOKEN);
