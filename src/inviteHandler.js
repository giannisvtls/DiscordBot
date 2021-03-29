var myEmbeds = require('./messageEmbeds.js')
var bot, message;
var modChannel = "", userChannel = "";


module.exports = {
    init: (...args) => {
        bot = args[0];
        message = args[1];
    },
    modAccept: (...args) => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:','$modAccept <Text Channel ID>'));
            let channel = bot.channels.cache.find(channel => channel.id === args[0]);
            if(channel.isText()) {
                modChannel = args[0];
            }
            message.react('👌');
        }
    },
    userInvite: (...args) => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$userInvite <Text Channel ID>'));
            let channel = bot.channels.cache.find(channel => channel.id === args[0]);
            if(channel.isText()) {
                userChannel = args[0];
            }
            message.react('👌');
        }
    },
    accept: (...args) => {
        if(message.member.hasPermission('CREATE_INSTANT_INVITE')){
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:','$accept <UserID> <No. of uses> <Expire Time(in hours)>'));
            const member = message.guild.members.cache.get(args[0]);
            if(member) {
                sendInvite(args[0], args[1], args[2], bot,message);
            }else{
                message.channel.send(myEmbeds.simpleText('UserID not found','Just right click copy 4Head'))
            }
        }
    },
    invite: (...args) => {
        if(message.channel.id === userChannel) {
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:','$invite <No. of uses>'));
            let channel = bot.channels.cache.find(channel => channel.id === modChannel);
            if(channel.isText()){
                channel.send(myEmbeds.simpleText(`User ${message.author.tag}, requested ${args[0]} invites`, `ID: ${message.author.id}`));
            }
            message.react('👌');
        }
    },
    remove: (...args) => {
        if(message.guild.me.hasPermission('ADMINISTRATOR') && message.member.hasPermission('CREATE_INSTANT_INVITE')){
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:','$remove <Invite ID>'));                
            message.guild.fetchInvites()
            .then
            (invites =>
                {
                const userInvites = invites.array();
                    for(var i=0; i < userInvites.length; i++)
                    {
                        if(userInvites[i].code === args[0]) {
                            userInvites[i].delete(myEmbeds.simpleText('Expired'));
                            message.react('👌');
                        }
                    }
                }
            )
        }else if(message.member.hasPermission('CREATE_INSTANT_INVITE')){
            message.channel.send(myEmbeds.simpleText('I don\'t have permission to do that :('));
        }
    },
}

function sendInvite(id, uses, time, bot, message) {
    if(time === '0' || time === undefined) time = 24;
    if(uses === '0' || uses === undefined) uses = 1;
    let customInvite = message.channel.createInvite(
        {
            unique: true,
            maxAge: time*60*60,
            maxUses: uses
        }
    ).then(invite => {
    bot.users.cache.get(id).send(myEmbeds.simpleText("Your invite is ready! https://discord.gg/" + invite.code, "It can be used up to " + uses + " times and will expire in " + time + " hours"));
    message.channel.send(myEmbeds.simpleText("Invite send to user: " + id, "Invite code: " + invite.code));
    })
}