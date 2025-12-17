const TelegramBot = require("node-telegram-bot-api");
const { setChatId } = require("./chatId");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  setChatId(msg.chat.id);

  bot.sendMessage(
    msg.chat.id,
    "✅ Bot ishlamoqda"
  );
});

module.exports = bot;
