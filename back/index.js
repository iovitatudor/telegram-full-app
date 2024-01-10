const TelegramBot = require('node-telegram-bot-api');

const token = "6645065907:AAEWujoPnpqwMxzjpuOZDO7JiYEIkeGhqZk";
const bot = new TelegramBot(token, {polling: true});
const appUrl = "https://artcoin.media/";
// const newApp = "https://cute-kataifi-2a18e8.netlify.app";
const newApp = "https://app.artcoin.media?cache=1";

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;
    if (message === "/start") {
        // await bot.sendMessage(chatId, "Access our web app", {
        //     reply_markup: {
        //         inline_keyboard: [
        //             [{text: 'open web app', web_app: {url: appUrl}}]
        //         ],
        //     }
        // })

        await bot.sendMessage(chatId, "ARTCOIN Telegram webApp", {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'ARTCOIN Telegram webApp', web_app: {url: newApp}}]
                ],
            }
        })

        await bot.sendMessage(chatId, "/start", {
            reply_markup: {
                keyboard: [
                    [{text: '/start'}],
                ]
            }
        })
    }
});
