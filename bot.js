const SlackBot = require('slackbots');

module.exports = function(params) {
	this.bot = null;
	var self = this;
	self.connect = function(){
		self.bot=new SlackBot(params);
		self.bot.on('start',self.onStart);
	}
	self.onStart = function(){
		self.bot.postMessageToUser('hananechara', 'Je suis là!!');
		self.bot.on('message',self.onEvent);
	}
	self.onEvent= function(event){
		console.log(event);
	}
}
