const Discord = require('discord.js');
const emojis = ['✔️','1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];
var bot;
var message;
const reactionArrow = [emojis[1], emojis[2],emojis[3]];
var mesCh = [];
var mesID = [];
const time = 60000; // time limit: 1 min

module.exports = {
  init: (...args) => {
    bot = args[0];
    message = args[1];
  },
  simpleText: (...args) => {
    const text = new Discord.MessageEmbed()
    .setColor('#800800')
    .setTitle("IT Cave")
    .setAuthor("InviteBot", "https://i.imgur.com/U2eqnYz.png")

    .setColor(0x00AE86)
    .setFooter("I made this :)", "https://i.imgur.com/U2eqnYz.png")

    .setTimestamp()
    .setURL("https://brrr.money/")
    .addField(args[0], args[1])
    .addField("For the documentation, use: ", '`$help`')
    .setTimestamp()
	  .setFooter('I made this :)', 'https://i.imgur.com/U2eqnYz.png');
    return text;
  },
  grade: (...args) => {
    var channelG = bot.channels.cache.find(channel => channel.id === args[2]);
    if(channelG.isText()){
      switch(args[1]){
        case 'year1':
          channelG.send(g(args[0],args[1],args[3], 0))            
            .then(msgReaction => {
              for(var i=1; i<=5;i++)msgReaction.react(emojis[i]);
              mesID.push(msgReaction.id);
            })
          break;
        case 'year2':
          channelG.send(g(args[0],args[1],args[3], 0))
            .then(msgReaction => {
              for(var i=1; i<=4;i++)msgReaction.react(emojis[i]);
              mesID.push(msgReaction.id);
            })              
          break;
        case 'year3':
          channelG.send(g(args[0],args[1],args[3], 0))
            .then(msgReaction => {
              for(var i=1; i<=2;i++)msgReaction.react(emojis[i]);
              mesID.push(msgReaction.id);
            })                       
          break;
        case 'ΕΠΙΛΟΓΗΣ':
          for(var j=1; j<=6;j++){
            channelG.send(g(args[0],args[1],args[3], j))
              .then(msgReaction => {
                for(var i=1; i<=5;i++)msgReaction.react(emojis[i]);
                mesID.push(msgReaction.id);
              })                          
          }
          break;
      }              
    }   
  },
  helpEmped: (mes) => {   
    mes.channel.send(getList(0))
    .then(msg => msg.react(emojis[1]))
    .then(msgReaction => msgReaction.message.react(emojis[2]))
    .then(msgReaction => msgReaction.message.react(emojis[3]))
    .then(msgReaction => createCollectorMessage(msgReaction.message, getList));
  },
  mesCh, mesID
}

function g(...args){
  const text = new Discord.MessageEmbed()
    .setColor('#800800')
    .setTitle("IT Cave")
    .setAuthor("InviteBot", "https://i.imgur.com/U2eqnYz.png")

    .setColor(0x00AE86)
    .setFooter("I made this :)", "https://i.imgur.com/U2eqnYz.png")

    .setURL("https://brrr.money/")
    .addField('Available Classes for ' + args[1], typeThis(args[0],args[1],args[2],args[3]))
	  .setFooter('I made this :)', 'https://i.imgur.com/U2eqnYz.png');
  return text;
}

function typeThis(...args){
  let counter = 1;
  let text = " ";
  if(args[3] === 0){
    for(let i=0; i<args[0].length; i++){
      if(args[0][i].catName === args[1] && args[0][i].semester === args[2]){
        text = text.concat(counter + ". " + args[0][i].chName + "\n");
        mesCh.push({'chID': args[0][i].chID, 'mesID': '0','tag': args[0][i].tag});
        counter++;
      }
    }
  }else{
    text = "ΚΥΚΛΟΣ " + args[3] + "\n"
    for(let i=1; i<=args[0].length; i++){
      if(args[0][i-1].module === args[3] && args[0][i-1].semester === args[2]){
        text = text.concat(counter + ". " + args[0][i-1].chName + "\n");
        mesCh.push({'chID': args[0][i-1].chID, 'mesID': '0', 'tag': args[0][i-1].tag});
        counter++;
      }
    }
  }
  return text;
}

function getList(i) {
  return list[i]().setFooter(`Page ${i+1}/${list.length}`); // i+1 because we start at 0
}

function filter(reaction, user){
  return (!user.bot) && (reactionArrow.includes(reaction.emoji.name)); // check if the emoji is inside the list of emojis, and if the user is not a bot
}

function onCollect(emoji, message, i, getList) {
  if (emoji.name === emojis[1]) {
    const embed = getList(0);
    if (embed !== undefined) {
      message.edit(embed);
      i--;
    }
  } else if (emoji.name === emojis[2]) {
    const embed = getList(1);
    if (embed !== undefined) {
      message.edit(embed);
      i++;
    }
  }
  else if (emoji.name === emojis[3]) {
    const embed = getList(2);
    if (embed !== undefined) {
      message.edit(embed);
      i++;
    }
  }
  return i;
}

function createCollectorMessage(message, getList) {
  let i = 0;
  const collector = message.createReactionCollector(filter, { time });
  collector.on('collect', r => {
    i = onCollect(r.emoji, message, i, getList);
  });
  collector.on('end', collected => message.delete());
}

const first = () => new Discord.MessageEmbed()
  .setColor('#800800')
  .setTitle("Documentation")
  .setAuthor("InviteBot", "https://i.imgur.com/U2eqnYz.png")
  .setColor(0x00AE86)
  .setDescription("Short explanation of the movie function.")
  .setFooter("I made this :)", "https://i.imgur.com/U2eqnYz.png")
  .setThumbnail("https://i.imgur.com/U2eqnYz.png")
  .setTimestamp()
  .setURL("https://brrr.money/")
  .addField("Administrator only commands",
    "Set movie night channel: \n`$movieChannel <Text Channel ID>`\n\nIf the bot has the Administrator role: \n`$removeMovie <IMDB Link>`")
  .addField("Moderator only commands", 
    "To start movie night vote: \n`$voteStart`")
  .addField("User commands", "To request a movie for movie night: \n`$movie <IMDB Link>`");

const second = () => new Discord.MessageEmbed()
  .setColor('#800800')
  .setTitle("Documentation")
  .setAuthor("InviteBot", "https://i.imgur.com/U2eqnYz.png")
  .setColor(0x00AE86)
  .setDescription("Short explanation of the invite function.")
  .setFooter("I made this :)", "https://i.imgur.com/U2eqnYz.png")
  .setThumbnail("https://i.imgur.com/U2eqnYz.png")
  .setTimestamp()
  .setURL("https://brrr.money/")
  .addField("Administrator only commands",
    "To set the mod channel: \n`$modAccept <Text Channel ID>`\n\nTo set the user invite request channel: \n`$userInvite <Text Channel ID>`\n\nIf the bot has the Administrator role: \n`$remove <Invite ID>`")

  .addField("Moderator only commands", 
  "To accept a user request: \n`$accept <UserID> <No. of uses> <Expire Time(0 if ∞)>`")

  .addField("User commands", "To send an invite request: \n`$invite <No. of uses>`");

const third = () => new Discord.MessageEmbed()
  .setColor('#800800')
  .setTitle("Documentation")
  .setAuthor("InviteBot", "https://i.imgur.com/U2eqnYz.png")
  .setColor(0x00AE86)
  .setDescription("Short explanation of the grade function.")
  .setFooter("I made this :)", "https://i.imgur.com/U2eqnYz.png")
  .setThumbnail("https://i.imgur.com/U2eqnYz.png")
  .setTimestamp()
  .setURL("https://brrr.money/")
  .addField("Administrator only commands",
    "To set the class channels: \n`$addClasses <year1 ID> <year2 ID> <year3 ID>`\n\nTo set the grade channel: \n`$grade <semester(e/w)>`")

  .addField("Moderator only commands", 
  "To send message about grades being published: \n`$vathmoi`")
const list = [first, second, third];