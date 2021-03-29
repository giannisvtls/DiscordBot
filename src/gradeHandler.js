var myEmbeds = require('./messageEmbeds.js')
var bot;
var message;
var gradeCh;
var POGGERS;
var nameList = ['ΕΠΙΛΟΓΗΣ'];
/*var classes =[{'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766340829052938, 'chName': 'αλληλεπίδραση-ανθρώπου-υπολογιστή', 'semester': 'w', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766425084362772, 'chName': 'ανάλυση-επίδοσης-συστημάτων-και-δικτύων', 'semester': 'e', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766461729734687, 'chName': 'ανάπτυξη-εφαρμογών-πληροφοριακών-συστημάτων', 'semester': 'e', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766544702111784, 'chName': 'αξιολόγηση-επενδύσεων-με-εφαρμογές-στην-πληροφορική', 'semester': 'w', 'module': 5},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766728537931806, 'chName': 'αρχιτεκτονική-υπολογιστών', 'semester': 'e', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766773991997481, 'chName': 'ασύρματα-δίκτυα-και-κινητές-επικοινωνίες', 'semester': 'w', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766864593027082, 'chName': 'ασφάλεια-δικτύων', 'semester': 'e', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766945395900436, 'chName': 'ασφάλεια-πληροφοριακών-συστημάτων', 'semester': 'w', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763766983841284107, 'chName': 'γραφικά-υπολογιστών', 'semester': 'w', 'module': 1},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767019270307891, 'chName': 'δίκτυα-υπολογιστών', 'semester': 'e', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767041165230110, 'chName': 'ειδικά-θέματα-αλγορίθμων', 'semester': 'w', 'module': 1},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767071422677032, 'chName': 'ειδικά-θέματα-διακριτών-μαθηματικών', 'semester': 'w', 'module': 6},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767119262515220, 'chName': 'ειδικά-θέματα-επιχειρησιακής-έρευνας', 'semester': 'w', 'module': 5},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767205518901288, 'chName': 'εννοιολογική-μοντελοποίηση-συστημάτων', 'semester': 'e', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767251677085716, 'chName': 'εξόρυξη-γνώσης-από-βάσεις-δεδομένων-τον-παγκόσμιο-ιστό', 'semester': 'w', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767310036762684, 'chName': 'επαλήθευση-επικύρωση-και-συντήρηση-λογισμικού', 'semester': 'e', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767376763158559, 'chName': 'επιχειρησιακή-πολιτική-και-στρατηγική', 'semester': 'e', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767403111907369, 'chName': 'επιχειρησιακή-έρευνα', 'semester': 'e', 'module': 5},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767455117475880, 'chName': 'εφαρμοσμένες-πιθανότητες-και-προσομοίωση', 'semester': 'w', 'module': 6},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767480296275969, 'chName': 'εφαρμοσμένη-αριθμητική-ανάλυση', 'semester': 'e', 'module': 6},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767505893851136, 'chName': 'θεωρία-παιγνίων-και-αποφάσεων', 'semester': 'e', 'module': 5},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767539624575046, 'chName': 'θεωρία-πληροφορίας', 'semester': 'e', 'module': 1},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767580694937650, 'chName': 'λογική', 'semester': 'w', 'module': 1},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767627176607754, 'chName': 'λογιστικά-πληροφοριακά-συστήματα-μέσω-διαδικτύου', 'semester': 'e', 'module': 3},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767650270576680, 'chName': 'μαθηματικός-προγραμματισμός', 'semester': 'e', 'module': 5},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767683082485761, 'chName': 'μεταγλωττιστές', 'semester': 'w', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767712999800852, 'chName': 'μηχανική-μάθηση', 'semester': 'e', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767760382984192, 'chName': 'οικονομικά-δικτύων', 'semester': 'w', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767810681077791, 'chName': 'στατιστική-στην-πληροφορική', 'semester': 'w', 'module': 6},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767843703357540, 'chName': 'στοιχεία-δικαίου-της-πληροφορίας', 'semester': 'e', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767872937787452, 'chName': 'συνδυαστική-βελτιστοποίηση', 'semester': 'w', 'module': 1},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767903722930186, 'chName': 'συστήματα-ανάκτησης-πληροφοριών', 'semester': 'e', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767934899716136, 'chName': 'σχεδιασμός-βάσεων-δεδομένων', 'semester': 'e', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763767963714060318, 'chName': 'τεχνητή-νοημοσύνη', 'semester': 'w', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763768010602184765, 'chName': 'τεχνολογία-πολυμέσων', 'semester': 'w', 'module': 2},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763768051103432784, 'chName': 'τεχνολογίες-και-προγραμματισμός-εφαρμογών-στον-ιστό', 'semester': 'e', 'module': 4},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763768099275014145, 'chName': 'τεχνολογική-καινοτομία-και-επιχειρηματικότητα', 'semester': 'e', 'module': 5},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763768137283010570, 'chName': 'υπολογισιμότητα-και-πολυπλοκότητα', 'semester': 'e', 'module': 1},
                {'cat': 763765756323430450, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': 763768159060099073, 'chName': 'χρονολογικές-σειρές-και-προβλέψεις', 'semester': 'w', 'module': 6}];*/
var classes = [{'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '821784160728645652', 'chName': 'this', 'semester': 'e', 'module': 2, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '821784172552257646', 'chName': 'that', 'semester': 'w', 'module': 1, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083670931636284', 'chName': 'tht', 'semester': 'w', 'module': 2, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083724546506752', 'chName': 'tht2', 'semester': 'w', 'module': 2, 'tag': 2},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083762740363264', 'chName': 'tht3', 'semester': 'w', 'module': 2, 'tag': 3},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '821784186116505632', 'chName': 'then', 'semester': 'w', 'module': 5, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083797963997214', 'chName': 't', 'semester': 'e', 'module': 1, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083828155121724', 'chName': 'tat', 'semester': 'e', 'module': 5, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '821784197802754069', 'chName': 'when', 'semester': 'w', 'module': 3, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083872639254568', 'chName': 'pep', 'semester': 'e', 'module': 4, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083920194273311', 'chName': 'pep0', 'semester': 'e', 'module': 4, 'tag': 2},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '823083950938914830', 'chName': 'pep1', 'semester': 'e', 'module': 4, 'tag': 3},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '821784208883318814', 'chName': 'kek', 'semester': 'e', 'module': 3, 'tag': 1},
                {'cat': 821784138692296744, 'catName': 'ΕΠΙΛΟΓΗΣ', 'chID': '821784222036787283', 'chName': 'lul', 'semester': 'w', 'module': 4, 'tag': 1}];
                

module.exports = {
    gradeCh,
    init: (...args) => {
        bot = args[0];
        message = args[1];
    },
    class: (...args) => {
        if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$addClasses <year1 ID> <year2 ID> <year3 ID>'));
        for(var i=args.length-1; i>=0; i--){
            let category = bot.channels.cache.find(c => c.id === args[i] && c.type == "category");
            let name = bot.channels.cache.find(c => c.id === args[i] && c.type == "category").name;
            nameList.unshift(name);
            let arr = category.children.array();
            arr.sort((a,b) => a.rawPosition - b.rawPosition);
            let counter = 0;
            for(var j=0; j< arr.length && name !=='ΕΠΙΛΟΓΗΣ'; j++){
                let sem;
                let temp;
                if(j<arr.length/2){
                    sem = 'w'
                    counter++;
                }else{
                    sem = 'e'
                    counter++;
                }
                if(j===arr.length/2) counter = 1;
                temp = {'cat': category, 'catName': name, 'chID': arr[j].id, 'chName': arr[j].name, 'semester': sem, 'module': 0, 'tag': counter}   
                classes.push(temp);
            }            
        }
    },
    grade: (...args) => {
        if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$grade <semester(e/w)>'));
        if(message.member.hasPermission('ADMINISTRATOR')){
            POGGERS = message;
            if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$addGrades <Text Channel ID> <w>/<s>/<a>'));
            let channel = bot.channels.cache.find(channel => channel.id === args[0]);
            if(channel.isText()) {
                gradeCh = args[0];
            }
            message.react('👌');
        }
        for(var i=0; i< nameList.length;i++){       
            myEmbeds.grade(classes, nameList[i], gradeCh, args[1]); 
        }
    },
    vathmoi: (...args) => {
        if(args.length === 0) return message.reply(myEmbeds.simpleText('Wrong Format, use:', '$vathmoi <platform(eclass/grammateia)>'));
        if(message.member.hasPermission('CREATE_INSTANT_INVITE')){
            var msgSent = myEmbeds.mesCh;
            var msgID = myEmbeds.mesID;
            let temp = 0
            for(var i=0; i<msgSent.length;i++){
                if(msgSent[i].tag===1){
                    var temp2 = msgID[temp]
                    temp++;
                }
                msgSent[i].mesID = temp2;
            }
            for(var i=0; i<msgSent.length;i++){
                if(message.channel.id === msgSent[i].chID){
                    for(var j=0; j<classes.length;j++){
                        if(classes[j].chID === msgSent[i].chID){
                            var currentClass = classes[j];
                        }
                    }
                    POGGERS.channel.messages.fetch(msgSent[i].mesID)
                        .then(mes => {
                            let users = mes.reactions.cache.map(async (reaction) => {
                                let usersThatReacted = [];
                                let reactedUsers = await reaction.users.fetch();
                                let reactedEmoji = await reaction.emoji.name;
                                reactedUsers.map((user) => {
                                    usersThatReacted.push((user.id));
                                })
                                let currentTag;
                                switch (reactedEmoji){
                                    case '1️⃣':
                                        currentTag = 1;
                                        break;
                                    case '2️⃣':
                                        currentTag = 2;
                                        break;
                                    case '3️⃣':
                                        currentTag = 3;
                                        break;
                                    case '4️⃣':
                                        currentTag = 4;
                                        break;
                                    case '5️⃣':
                                        currentTag = 5;
                                        break;
                                }
                                for(var j=0; j<usersThatReacted.length;j++){
                                    if(usersThatReacted[j]!==bot.user.id && currentClass.tag === currentTag){
                                        bot.users.cache.get(usersThatReacted[j]).send(myEmbeds.simpleText('Grades for ', currentClass.chName + ' @' + args[0]));
                                    }
                                }
                            })
                        })
                        .catch(console.error);
                }
            }
        }
    }
}