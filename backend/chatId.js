let chatId = null;

module.exports = {
  setChatId: (id) => {
    chatId = id;
  },
  getChatId: () => chatId,
};
