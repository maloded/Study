const TelegramBot = require('node-telegram-bot-api');

const token = '5669420243:AAGK1EtBF1NJ6my4jPZkZRmLz3BSVYkJaTg';

const webAppUrl = 'https://www.youtube.com';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Add info', {
      reply_markup: {
        keyboard: [
          [{text: 'Add text'}]
        ]
      }
    }); 

    await bot.sendMessage(chatId, 'Enter on inst', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Create order', web_app: {url: webAppUrl}}]
        ]
      }
    }); 
    
  }




  bot.sendMessage(chatId, 'Received your message');
});