
var Bot=require('./bot.js');
// create a bot
var bot = new Bot({
    token: process.env.slack_bot_token,
    name: 'hanane'
});

bot.connect();
