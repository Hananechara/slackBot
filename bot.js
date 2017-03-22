const SlackBot = require('slackbots');



const Chuck = require('chucknorris-io'),
client = new Chuck();


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
			// Retrieve a random chuck joke
			var blague=client.getRandomJoke();
			
			self.bot.postMessage(event.channel,blague.value);

	 }
}
