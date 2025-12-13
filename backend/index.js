require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bot = require("./bot");
const { getChatId } = require("./chatId");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/request", async (req, res) => {
  const { name, email, message } = req.body;
  const chatId = getChatId();

  if (!chatId) {
    return res.status(400).json({
      error: "Бот не активирован. Напиши /start боту",
    });
  }

  const text = `
📩 <b>Yangi Заявка</b>

👤 <b>name:</b> ${name}
📧 <b>email:</b> ${email}

💬 <b>message:</b>
${message || "—"}
  `;

  try {
    await bot.sendMessage(chatId, text, {
      parse_mode: "HTML",
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка Telegram" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Backend запущен на порту", process.env.PORT);
});
