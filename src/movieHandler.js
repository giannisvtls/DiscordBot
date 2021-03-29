var myEmbeds = require('./messageEmbeds.js')
var bot, message;
var movieChannel = "", movieList = [];

module.exports = {
    init: (...args) => {
        bot = args[0];
        message = args[1];
    },
    movieChannel: (...args) =>{
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$movieChannel <Text Channel ID>'));
            let channel = bot.channels.cache.find(channel => channel.id === args[0]);
            if(channel.isText()) {
                movieChannel = args[0];
            }
            message.react('👌');
        }
    },
    movie: (...args) =>{
        if(message.channel.id === movieChannel) {
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:','$movie <IMDB link>'));
            let temp = {"id": message.author.id, "link": args[0]};
            for(var i=0; i< movieList.length;i++){
                if(movieList[i].id === message.author.id){
                    movieList.splice(i,1);
                }
            }
            movieList.push(temp);
            message.react('👌');
        }
    },
    removeMovie: (...args) =>{
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$removeMovie <IMDB link>'));
            for(var i=0; i< movieList.length;i++){
                if(movieList[i].link === args[0]){
                    movieList.splice(i,1);
                }
            }
        }
    },
    voteStart: (...args) => {
        if(message.member.hasPermission('CREATE_INSTANT_INVITE')){
            let channel = bot.channels.cache.find(channel => channel.id === movieChannel);
            if(channel.isText()){
                for(var i=0; i< movieList.length;i++){
                    setTimeout(function(){}, 1000)
                    channel.send(movieList[i].link + ' By: <@' + movieList[i].id + '>').then((botMessage) => botMessage.react('👍'));
                }
                movieList = [];
            }
        }
    }
}
