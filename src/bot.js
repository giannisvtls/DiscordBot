require('dotenv').config();

const { Client, Message, Emoji, Guild, CategoryChannel } = require('discord.js');

const bot = new Client();
var myEmbeds = require('./messageEmbeds.js')
var inv = require('./inviteHandler.js')
var mov = require('./movieHandler.js')
var grade = require('./gradeHandler.js')

const PREFIX = "$";

bot.on('ready', () => {
    console.log(`${bot.user.tag} has joined`);
});

bot.on('message', (message) => {
    if(message.author.bot) return;
    try {
        if(message.content.startsWith(PREFIX)){
            inv.init(bot, message);
            mov.init(bot, message);
            grade.init(bot, message);
            myEmbeds.init(bot, message);
            const [CMD_NAME, ...args] = message.content
                .trim()
                .substring(PREFIX.length)
                .split(/\s+/);
            switch(CMD_NAME){
                case "help":
                    myEmbeds.helpEmped(message);
                    break;
                case "modAccept":
                    inv.modAccept(args[0]);
                    break;
                case "userInvite":
                    inv.userInvite(args[0]);
                    break;
                case "invite":
                    inv.invite(args[0]);
                    break;
                case "accept":
                    inv.accept(args[0],args[1],args[2]);
                    break;
                case "remove":
                    inv.remove(args[0]);
                    break;
                case "movieChannel":
                    mov.movieChannel(args[0]);
                    break;
                case "movie":
                    mov.movie(args[0]);
                    break;
                case "removeMovie":
                    mov.removeMovie(args[0]);
                    break;
                case "voteStart":
                    mov.voteStart(args[0]);
                    break;
                case "addClasses":
                    grade.class(args[0], args[1], args[2]);
                    break;
                case "addGrades":
                    grade.grade(message.channel.id, args[0]);
                    break;
                case "vathmoi":
                    grade.vathmoi(args[0]);
                    break;

            }
        }
    }catch{        
        message.react('👎');        
    }
});

bot.login(process.env.DISCORDJS_BOT_TOKEN);