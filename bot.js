const SlackBot = require('slackbots');
const axios = require('axios');


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
		console.log(event.type);
		if(event.type == 'message') {	
			if ( !event.bot_id){
				self.onMessage(event);
			}
		}
	}
	

	self.onMessage= function(event){
			axios.get('http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1').then(
				function(resp){
					self.bot.postMessage(event.channel,resp.data[0].fact);
				});
			}
}
