const express = require('express');
const app = express();
const chalk = require("chalk");
//ALAE_444
app.get('/', (req, res) => {
  res.send('Hello made by Robert app!')
})
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.red.bold('The Bot Is Ready.'))
});
app.listen(() => console.log("I'm Ready To Work..!"));

const Discord = require("discord.js");

const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents } = require("discord.js");
const moment = require('moment');



const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  ws: {
    properties: { $browser: "Discord iOS" }
  },
});

///////////////
process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
//
const db = require("quick.db");
const ms = require("ms");

const prefix = "+";

client.on('ready', () => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot User name : ${client.user.username}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  client.user.setActivity(`${prefix}help`, { type: 'online' })
});
client.login('MTI0OTY4ODQ1MzA0MjQwOTQ5Mg.G6gkkq.FPyftYvA8GAIfIDjokoVzuCxphu75T_7Qvk_R0').catch((err) => {
  console.log(err.message)
});
/////////
// ========================== Const ======================== \\


let autotax = ['1145673417559912499'];// ايدي الروم بدل كلمة id

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (autotax.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    else if (args.endsWith("مليون")) args = args.replace(/مليون/gi, "") * 1000000;
    else if (args.endsWith("الف")) args = args.replace(/الف/gi, "") * 1000;
    else if (args.endsWith("ألف")) args = args.replace(/ألف/gi, "") * 1000;
    else if (args.endsWith("ك")) args = args.replace(/ك/gi, "") * 1000;
    else if (args.endsWith("م")) args = args.replace(/م/gi, "") * 1000000;
    else if (args.endsWith("آلاف")) args = args.replace(/آلاف/gi, "") * 1000;
    else if (args.endsWith("ألاف")) args = args.replace(/ألاف/gi, "") * 1000;
    else if (args.endsWith("الاف")) args = args.replace(/الاف/gi, "") * 1000;
    else if (args.endsWith("ملايين")) args = args.replace(/ملايين/gi, "") * 1000000;
    if (!args) return message.reply('> **يرجى كتابة الرقم صحيح**')
    let args2 = parseInt(args)
    if (args2 == 1) return message.reply(`> **يرجى كتابة رقم أكبر من \`1\`** ⚠️`);

    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let tax5 = Math.floor((2.5 / 100) * args)
    let tax6 = Math.floor(tax4 + args2 * (20) / (19) + (1) - (args2))
    let tax7 = Math.floor(tax + tax5)
    let tax8 = Math.floor(tax4 + tax5)
    let tax9 = Math.floor((5 / 100) * args - args * -0)
    let tax10 = Math.floor(tax - args)
    let tax11 = Math.floor(tax9 + tax10)
    let tax12 = Math.floor(tax - tax11)

    let embed = new Discord.MessageEmbed()

      .setColor("67c9c9")

      .setThumbnail(client.user.avatarURL({ dynamic: true }))

      .setFooter({
        text: `By  : ${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`
      })

      .addFields(
        {
          name: "> **المبلغ (Not Tax):**", value: `**\`${args}\`**`
        },
        {
          name: "> **المبلغ بالضريبة (1 Tax):**", value: `**\`${tax}\`**`
        },
        {
          name: "> **المبلغ مع نسبة الوسيط (2 Tax):**", value: `**\`${tax4}\`**`
        },
        {
          name: "**=============================**", value: `**=**`
        },
        {
          name: "> **(بدون ضريبة)المبلغ الي بيوصل (Not Tax):**", value: `**\`${tax12}\`**`
        },
        {
          name: "> **الضريبة الي بياخذها بروبوتTax:**", value: `**\`${tax9}\`**`
        },
        {
          name: "> **المبلغ (ضريبة بروبوت):**", value: `**\`${tax10}\`**`
        },
      )

      .setTimestamp()

    message.reply({ embeds: [embed] }).catch((err) => {
      console.log(err.message)
    });
  }
});

/////////////////
const rooms = ["1145673388543709204", "1145673393249714227", "1145673385012117594", "1145673383405695037", "1145673386828243034", "1145673398828154973", "1145673396210896896","1145673394679975969","1145673397456601198","1145673422022643812","1145673420667899945"];
// الصورة المحددة
const img = "https://media.discordapp.net/attachments/1145673442910281728/1147238373342326834/20230819_235009-11.png";

client.on('messageCreate', message => {
  if (rooms.includes(message.channel.id) && !message.author.bot) {
    message.channel.send({ files: [`${img}`] });
  }
});

/////////////////
// تعديل مهم
// Code 
let sug = ["1145673420667899945","","","",""]; // حط اي دي روم الفيدباك
let line = ""; // حط رابط الخط
client.on("messageCreate", function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
 message.author.avatarURL({dynamic:true})})
.setColor(`67c9c9`)
.setThumbnail(message.guild.iconURL({ dynamic: false }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react(`\<:Ra3d:1018920058161999952>`).then(() => {   // لو حابب تغيير اليموجي غير عادي
})
message.channel.send({files: [line]});
})
.catch(console.error) 
}
});
client.on("messageCreate" , async message => {
 let words = ["شراء","بيع","شوب","سعر","حساب","متوفر","نصاب","متجر","امك","اختك","نصايابن","سيرفر","دسكورد","نجب"]
 for (let s = 0;s < words.length;s++) {
   if(message.content.includes(words[s])) {
   if(!message.member.permissions.has("ADMINISTRATOR")) {  
   let member = message.member;
   let embed = new Discord.MessageEmbed()
   .setAuthor(message.author.username , message.author.displayAvatarURL())
   .setTitle("**لـقـد تـم اسـكات الـعضو | :white_check_mark:**")
   .setDescription(`**لـقد تـم اسـكاتــك من قبل الادارة \`${message.guild.name}\` لـقد تم اسكاتك message : \`${message.content}\`**`)
   .setThumbnail(message.guild.iconURL())
   .setFooter(message.guild.name , message.guild.iconURL())
   message.delete()
   await message.channel.send(`${message.member} **الرجاء عدم ارسال الروابط او الكلمات السيئه !**`)
   await member.timeout(300)
   await message.member.send({embeds:[embed]})
   }}
 }
})

//////////////
client.on("messageCreate", Aaa  => {
  if(Aaa.content ==  "خط") {
let role_id = "1145673291395239996" // الرول المسموح لها باستخدام الامر
let owner = ["1051525624042356806"] // الاشخاص المسموح لهم باستخدام الامر
const link ="https://media.discordapp.net/attachments/1145673442910281728/1147238373342326834/20230819_235009-11.png"  // لينك الخط
if(!Aaa.member.roles.cache.has(role_id))
if(!owner.includes(Aaa.author.id)) return Aaa.channel.send({ embeds: [new MessageEmbed().setDescription(`عفواً ليس لديك صلاحيات `)] }).then(m =>{
  setTimeout(() => m.delete().catch(e =>{return console.log(`message delte`)}), 3000) 
  setTimeout(() => Aaa.delete().catch(e =>{return console.log(`message delte`)}), 3000)
 })
 Aaa.channel.send(link),Aaa.delete()
  }})

/////////////
client.on('guildMemberAdd', member => {
  const guild = member.guild;
  const serverLogo = 'SR〡'; //مداك تغير الشعار للي تبيه
  const memberNickname = `${serverLogo}  ${member.user.username}`;
  member.setNickname(memberNickname);
});

/////////////////
client.on("messageCreate", async message => {

const args = message.content.split(" ")
const now = new Date()

const role = message.guild.roles.cache.find(r=>r.id == "1145673233140559964")

if(message.content.startsWith( prefix + 'sub')){
if(!message.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;
 let user = message.mentions.users.first()
 if(!user) return message.reply(`:x: | **${prefix}sub [ منشن الشخص ] [ مدة الروم ]**`)
 if (!args[2]) {
 return message.reply(`:x: | **${prefix}sub [ منشن الشخص ] [ مدة الروم ]**`);
 }
 if (!args[2].endsWith("s")) {
 if (!args[2].endsWith("d")) {
 if (!args[2].endsWith("h")) {
 if (!args[2].endsWith("m")) {
 return message.channel.send(`**\`m / h / d\` قم بكتابة وقت صالح للروم** | :x:`);
 }}}}
  if (isNaN(args[2][0])) {
 return message.channel.send(`:x: | **قم بكتابة رقم**`);
 }

let member = message.guild.members.cache.get(user.id)

member.roles.add(role).catch(error=>{})

message.reply(`✅ | **Done Created a room ,
for : ${user} 
By : ${message.author}**`)

let embed = new Discord.MessageEmbed()
.setAuthor(user.tag , user.displayAvatarURL({dynamic:true}))
.setTitle("Room has been created ✅ !")
.setDescription(`
**Room Owner : <@${user.id}>**

**Created By : ${message.author}**

**Created At : ${moment(now).format("M/D/YYYY")}**

**End At : ${moment(now).add(ms(args[2][0]), `${args[2][1]}`).format("M/D/YYYY")}**
`)

.setColor(`GREEN`)
.setFooter(message.guild.name , message.guild.iconURL({dynamic:true}))

let channel = message.guild.channels.create(`〢↯・${user.username}` , {type:"text"})

.then(m=> m.setParent("1145673323901112443"))

.then(m=> m.permissionOverwrites.edit(m.guild.roles.everyone,{
  SEND_MESSAGES: false
}))

.then(m=> m.permissionOverwrites.edit(user.id,{
  SEND_MESSAGES: true,
  MENTION_EVERYONE: true,
  ATTACH_FILES:true
}))

.then(m=> m.send({embeds:[embed]}))

}
});


client.on("messageCreate", message => {

const args = message.content.split(" ")
const now = new Date()

if(message.content.startsWith( prefix + 'renew')){
if(!message.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;
 let user = message.mentions.users.first()
 let channel = message.mentions.channels.first()
 if(!user) return message.reply(`:x: | **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**`)
 if(!channel) return message.reply(`:x: | **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**`)
 if (!args[3]) {
 return message.channel.send(`:x: | **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**`);
 }
 if (!args[3].endsWith("d")) {
 if (!args[3].endsWith("h")) {
 if (!args[3].endsWith("m")) {
 return message.channel.send(`**\`m / h / d\` قم بكتابة وقت صالح للروم** | :x:`);
 }}}
  if (isNaN(args[3][0])) {
 return message.channel.send(`:x: | **قم بكتابة رقم**`);
 }

message.reply(`✅ | **Done Renewd this room ,
for : ${user} 
By : ${message.author}**`)

let embed = new Discord.MessageEmbed()
.setAuthor(user.tag , user.displayAvatarURL({dynamic:true}))
.setTitle("Room has been renewed ✅ !")
.setDescription(`
**Room Owner : <@${user.id}>**

**Renewd By : ${message.author}**

**Renewed At : ${moment(now).format("M/D/YYYY")}**

**End At : ${moment(now).add(ms(args[3][0]), `${args[3][1]}`).format("M/D/YYYY")}**
`)

.setColor(`GREEN`)
.setFooter(message.guild.name , message.guild.iconURL({dynamic:true}))

channel.bulkDelete(100)
channel.send({embeds:[embed]})

}
});

client.on("messageCreate" , async message => {
  if(message.content.startsWith(prefix + "end")) {
  if(!message.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;
  let user = message.mentions.members.first()
  if(!user) return message.reply(`:x: | **${prefix}end [ منشن الشخص ] [ ايدي الروم الخاص ]**`)
  let args = message.content.split(" ").slice(2).join(" ")
  let channel = message.guild.channels.cache.get(args)
  if(!channel) return message.reply(`:x: | **${prefix}end [ منشن الشخص ] [ ايدي الروم الخاص ]**`)
  message.reply("✅ | **Done ending this room**")
  channel.bulkDelete(100)
  channel.permissionOverwrites.edit(user.id , {
    SEND_MESSAGES:false  
  })
  let embed = new Discord.MessageEmbed()
  .setTitle(`انتهت مدة الروم :no_entry:`)
  .setDescription("**سوف يتم حذف الروم بعد 24 ساعة في حال عدم التجديد**\nللتجديد تواصل مع الدعم الفني من هنا : <#>")
  .setColor(`RED`)
  .setThumbnail(message.guild.iconURL({dynamic:true}))
  .setFooter(message.guild.name)
  await channel.send({embeds:[embed]})
  }
});

client.on("messageCreate" , msg => {

if(msg.content.startsWith( prefix + 'close')){
if(!msg.member.roles.cache.some(r=>r.id == "1145673233140559964")) return;

let user = msg.mentions.members.first()
if(!user) return msg.reply(`:x: | **${prefix}close [ منشن الشخص ] [ ايدي الروم الخاص ]**`)
let args = msg.content.split(" ").slice(2).join(" ")
let channel = msg.guild.channels.cache.get(args)
if(!channel) return msg.reply(`:x: | **${prefix}close [ منشن الشخص ] [ ايدي الروم الخاص ]**`)
let role = msg.guild.roles.cache.find(r=>r.id == "1145673233140559964")
let member = msg.guild.members.cache.get(user.id)
member.roles.remove(role).catch(error=>{})
channel.delete()
msg.reply("✅ | **Done closed this room**")
}
});

client.on("messageCreate" , message => {
if(message.content.includes(client.user.id)) {
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username , message.author.displayAvatarURL())
  .setDescription(`> **${prefix}sub [ منشن الشخص ] [ مدة الروم ]**\n > **${prefix}renew [ منشن الشخص ] [ منشن الروم ] [ مدة الروم ]**\n > **${prefix}end [ منشن الشخص ] [ ايدي الروم الخاص ]**\n> **${prefix}close [ منشن الشخص ] [ ايدي الروم الخاص ]**`)
.setTimestamp()
.setColor("BLACK")
  message.reply({embeds:[embed]})
} 
});

client.login('MTI0OTY4ODQ1MzA0MjQwOTQ5Mg.G6gkkq.FPyftYvA8GAIfIDjokoVzuCxphu75T_7Qvk_R0')
//////////////////////
const GUILD_ID = '996872033872916581';
const LOG_CHANNEL_ID = '1145673366959829042';



client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === '+close') {
        if (message.author.id === '1051525624042356806' && message.guild.id === GUILD_ID) {
            const guild = client.guilds.cache.get(GUILD_ID);
            if (!guild) {
                console.log(`Guild with ID ${GUILD_ID} not found.`);
                return;
            }
            
            const channelsToHide = [
   
              '1145673388543709204',
                '1145673386828243034',
                '1145673385012117594',
                '1145673383405695037',  
                '1145673393249714227',
                '1145673397456601198',
                '1145673396210896896',
                '1145673394679975969',
                   '1145673398828154973',







// ان كنت تريد زود ايدي الروم 
            ];
            
            channelsToHide.forEach(channelId => {
                const channel = guild.channels.cache.get(channelId);
                if (channel && channel.type === 'GUILD_TEXT') {
                    channel.permissionOverwrites.create(guild.roles.everyone, {
                        VIEW_CHANNEL: false
                    })
                    .then(() => {
                        console.log(`Hid channel ${channel.name}`);
                    })
                    .catch(error => {
                        console.error(`Error hiding channel ${channel.name}: ${error}`);
                    });
                }
            });
            
            console.log('تم قفل الرومات');

          
            const logChannel = guild.channels.cache.get(LOG_CHANNEL_ID);
            if (logChannel && logChannel.type === 'GUILD_TEXT') {
                logChannel.send('تم قفل الرومات @here');
            }
        } else {
            console.log('ليس لديك الصلاحيات لاستخدام هذا الأمر.');
        }
    }
});

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === '+open') {
        if (message.author.id === '1051525624042356806' && message.guild.id === GUILD_ID) {
            const guild = client.guilds.cache.get(GUILD_ID);
            if (!guild) {
                console.log(`Guild with ID ${GUILD_ID} not found.`);
                return;
            }
            
            const channelsToModify = [
                      '1145673388543709204',
                '1145673386828243034',
                '1145673385012117594',
                '1145673383405695037',  
                '1145673393249714227',
                '1145673397456601198',
                '1145673396210896896',
                '1145673394679975969',
                   '1145673398828154973',


                    
// ان كنت تريد زود ايدي الروم 
            ];
            
            channelsToModify.forEach(channelId => {
                const channel = guild.channels.cache.get(channelId);
                if (channel && channel.type === 'GUILD_TEXT') {
                    channel.permissionOverwrites.edit(guild.roles.everyone, {
                        VIEW_CHANNEL: null
                    })
                    .then(() => {
                        console.log(`Restored visibility for channel ${channel.name}`);
                    })
                    .catch(error => {
                        console.error(`Error restoring visibility for channel ${channel.name}: ${error}`);
                    });
                }
            });
            
            console.log('تم إظهار القنوات مرة أخرى');
            
           
            const logChannel = guild.channels.cache.get(LOG_CHANNEL_ID);
            if (logChannel && logChannel.type === 'GUILD_TEXT') {
                logChannel.send('تم فتح الرومات @here');
            }
        } else {
            console.log('ليس لديك الصلاحيات لاستخدام هذا الأمر.');
        }
    }
});
        
//////////////////////
client.on('messageCreate', message => {
  if (message.channel.id === '1145673422022643812' && !message.author.bot) {
    const embed = new MessageEmbed()
      .setTitle(`suggestion by: ${message.author.username}`)
      .setDescription(`**${message.content}**`)
      .setURL(`https://discordapp.com/users/${message.author.id}`)
      .setColor('Black');
    message.channel.send({ embeds: [embed] }).then(sentEmbed => {
      sentEmbed.react('👍');
      sentEmbed.react('👎');
    });
  }
});
//////////////////////////////////

/////////////////////////////
client.on("messageCreate", async message => {
if (message.author.bot) return;
if (!message.channel.guild) return;
if (message.content.startsWith(prefix + 'say')) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
  return message.reply("** 😕 You don't have permissions **"); 
}
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
}
let args = message.content.split(' ').slice(2).join(' ')
let argss = message.content.split(' ')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(argss[1])
        let attach = message.attachments.first()
        if (!channel) return message.channel.send('** 😕 Please mention channel or id **');
        if (!args) return message.channel.send('** ❌ Please select a message **');
        message.delete()
      if (!attach) {
        channel.send({content: `${args}`});
} else {
        channel.send({content: `${args}`, files: [attach]});
}
    }
});
//////////////////////
client.on("messageCreate", async (message) =>{
  if(message.content === "السلام عليكم") {
    message.reply("**وعليكم السلام ورحمة الله وبركاته منور 🤗**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "هلا") {
    message.reply("**يا هلا وغلى**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "باك") {
    message.reply("**ولكم باك 😎**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "برب") {
    message.reply("**تيت لا تطول 😉**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "وينكم") {
    message.reply("**يمكن مشغولين استنى شوي 😅**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "البوت") {
    message.reply("**ماله البوت؟ 🙄**")}
})
/////////////////////////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "kick") && message.member.hasPermission("KICK_MEMBERS")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member.kick("تم طردك من الخادم").then(() => {
          message.channel.send(`تم طرد ${user.tag} من الخادم بنجاح.`);
        }).catch(error => {
          message.channel.send("حدث خطأ أثناء محاولة طرد العضو.");
          console.error(error);
        });
      } else {
        message.channel.send("لم يتم العثور على العضو المذكور في الخادم.");
      }
    } else {
      message.channel.send("يجب عليك ذكر عضو صحيح لطرده.");
    }
  }
});
////////////////////////

//////////////////////////////////
client.on("messageCreate", async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.startsWith(prefix + 'embed')) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
    }
    if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
      return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
    }
    let args = message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('**❌ | Error : يرجى وضع النص أولاً .**')
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setDescription(`${args}`)
      .setColor("RANDOM")
    let attach = message.attachments.first();
    if (attach) {
      embed.setImage(attach.proxyURL)
    }
    message.channel.send({ embeds: [embed] });
  }
})
/////////////////////////////
       
//unban
client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'unban')) {
      
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let args = message.content.split(' ')
    let id = args[1];
    if(!id)  return message.reply(`** 😕 Please mention or id **`);
    if(isNaN(id)) {
       return message.reply(`** 😕 Please mention or id **`);
    } else {
message.guild.members.unban(id).then(mmm => {
        message.reply(`✅ ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
      }
    }
})


//lock
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'lock')) {
                    const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: false
                }).then(() => {
                        message.reply({ content: `:lock: **${message.channel.name} has been looked.** `, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        }
});

//unlock 
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'unlock')) {
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: true
                }).then(() => {
                        message.reply({ content: `:unlock: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
                })
    }
});

//clear
client.on('messageCreate', async message => {
    const Arguments = message.content.trim().split(/ +/g)
    const command = Arguments[0].slice(prefix.length).toLowerCase()
    const num_to_delete = Arguments[1]
    const ParsedAmount = parseInt(num_to_delete)
    if(command === "clear") {
        if(message.author.bot) return
        if(ParsedAmount === 0) return null
        if(!ParsedAmount) return message.reply({content: "Provide A Valid Number !!"})
        if(!message.member.permissions.missing('MANAGE_MESSAGES')) return message.reply({content: "Missing Permissions: \`Mange_Messages\`"})
        if(ParsedAmount > 100) return message.reply({content: "You Can't Delete Over Than 100 Messages !!"})
        message.channel.bulkDelete(ParsedAmount)
        const msg = await message.channel.send({content: `Successfully Deleted \`${ParsedAmount}\` Messages`})
        setTimeout(() => msg.delete(), 5000)
    }

})

///////////////////////////////////
client.on('messageCreate',async message=>{
    const args = message.content.slice(0).trim().split(/ +/);
    if(args[0] != "!hide") return
   if (args[1]) return
   if (!message.member.permissions.has("MANAGE_CHANNELS")) return
   message.channel.permissionOverwrites.edit(message.channel.guild.roles.everyone, {VIEW_CHANNEL: false}).then(message.channel.send(`** تم اخفاء الروم** <#${message.channel.id}> :lock:`))
})

////////////////////////////////
client.on('messageCreate',async message=>{
    const args = message.content.slice(0).trim().split(/ +/);
    if(args[0] != "!show") return
   if (args[1]) return
   if (!message.member.permissions.has("MANAGE_CHANNELS")) return
   message.channel.permissionOverwrites.edit(message.channel.guild.roles.everyone, {VIEW_CHANNEL: true}).then(message.channel.send(`**تم اظهار الروم** <#${message.channel.id}> :lock:`))
})

////////////////////////////////
client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "setnick")) {
      if (!message.member.permissions.has("MANAGE NICKNAMES")) return message.reply({ content: "You Dont Have Permission" })
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username === args[1])
      if (!member) return message.reply({ content: `Type User Example: ${prefix}setnick @user` })
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if (!nick) {
        g.setNickname(member.username)
      }
      g.setNickname(nick)
      const l = g.nickname || member.username
      let embed = new Discord.MessageEmbed()
        .setAuthor({name: message.author.tag,iconURL: 
         message.author.avatarURL({dynamic:true})})
        .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
        .setTitle("New NickName:")
        .addField(`User Nick Change`, `${member}`, true)
        .addField(`Befor:`, `**${l}**`, true)
        .addField(`After:`, `**${nick}**`, true)


        .setFooter({ text: message.author.tag , iconURL: 
         message.author.displayAvatarURL({dynamic:true})})
        .setTimestamp()
      message.channel.send({ embeds: [embed] })
    }
})  
//////////////////////////
client.on('messageCreate', async message => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "role") {
    if (!args[1]) return await message.channel.send({content: `**${prefix}role <user> <role>**`});
    
    let member = message.guild.members.cache.get(args[0]) || 
    message.mentions.members.first(); 
    let role = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => message.content.split(" ").slice(1).join(" ").toLowerCase().includes(r.name.toLowerCase())) || message.mentions.roles.first()

    if (!member) return await message.channel.send({content: `**I can't find this member.**`});
     if (!role) return await message.channel.send({content: `**I can't find this role.**`});

    if (member.roles.cache.has(role.id)) {
      await member.roles.remove(role.id);
      await message.channel.send({content: `**Done Removed**`});
    }else{
      await member.roles.add(role.id);
      await message.channel.send({content: `**Done Added**`});
    }
  }
})
/////////*/*/////////*///////
client.on("messageCreate" , async message => {
  if(message.content.startsWith(prefix + "timeout")) {
  if(message.member.permissions.has("TIMEOYT_MEMBERS")) {
    let args = message.content.split(" ")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
    if(!member) return message.reply("**Mention the user or him ID to shut him up !**")
    if(member.user.bot) return message.reply("**You can't mute a bot 🙄**");
    if(member.user == message.author) return message.reply("**You can't mute yourself 🙄**")
    if(!args[2]) return message.reply("**Please Specify the timer ❌**");
    if(!args[2].endsWith("s")) {
    if(!args[2].endsWith("m")) {
    if(!args[2].endsWith("h")) {
    if(!args[2].endsWith("d")) {
    if(!args[2].endsWith("w")) {
    return message.reply(`**Please Provide me a valid timer \`s / m / h / d / w\` ❌**`);
    }}}}}
    if(isNaN(args[2][0])) return message.reply("**That is not a number ❌ !**");
    let embed = new Discord.MessageEmbed()
    .setAuthor({ name: member.user.tag , iconURL: member.user.displayAvatarURL({dynamic:true})})
    .setDescription(`> **You are muted in** \`${message.guild.name}\` **for a ${args[2]}**\n> **Muted By : **${message.author}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter({ text: message.author.tag , iconURL: message.author.displayAvatarURL({dynamic:true})})
 
   await member.timeout(ms(args[2]) , "صدقني انا لو اعرف هقلك")
   await message.reply(`**Done muted** \`${member.user.username}\` **for a ${args[2]}**`)
   await member.user.send({embeds:[embed]})
  }}
});
//////////******//////////****
client.on('message', (message) => {
  const channelId = '1147524062650839090'; // قم بتعيين معرف القناة المراد تشغيل الكود فيها

  if (message.channel.id === channelId) {
    const encodedWords = {
حساب: '7ــساب',
      
      دسكورد: 'ديسكــ9رد',
ديسكورد: 'ديسكــ9رد',
نيترو: 'نيتر9',
شوب: 'شـ9 ب',
بيع: 'بيـ3',
شراء: 'شـrـراء',
نصاب: 'نـsـاب',
سعر: 'سـ3ـر',
      توكن: 'توkن',
دولار: 'د9لار',
توكنات: 'تـ9كنات',
سيرفر: 'سيـrفر',
كريدت: 'كريdت',
      
 متوفر: 'مت9فر',
       موقع: 'م9قع',
             للبيع: 'للبيـــ3',
             متجر: 'مـــتـ...ر',
             تشتري: 'تشــ.ري',
                 here: '',
                       everyone: '',



      // قم بإضافة المزيد من الكلمات وتشفيرها هنا
    };

    const content = message.content;
    let encodedContent = content;

    // تحويل الكلمات إلى الصيغة المشفرة
    Object.keys(encodedWords).forEach((word) => {
      const encodedWord = encodedWords[word];
      encodedContent = encodedContent.replace(new RegExp(word, 'gi'), encodedWord);
    });

    // التأكد من ألا يتم تشفير الكلمة إذا كانت الرسالة تحتوي على كلمة مشفرة بالفعل
    if (encodedContent !== content) {
      // إزالة المشفرة للكلمات من الأكواد أو المراجع
      encodedContent = encodedContent.replace(/`/g, '');

      // إرسال الرسالة المشفرة
      message.reply(encodedContent);
    }
  }
});
 var owner1 = ["1051525624042356806"];///ايدي اليستعمل البوت

client.on("message", message => {
  if (['1147524062650839090'].includes(message.channel.id)) {
    if(!owner1.includes(message.author.id)) return setTimeout(function(){ 
    message.delete();
}, 30000);
  } else { return; }
})
client.login('MTI0OTY4ODQ1MzA0MjQwOTQ5Mg.G6gkkq.FPyftYvA8GAIfIDjokoVzuCxphu75T_7Qvk_R0').catch((error) => {
console.warn("\033[31m Token Invalid")
})
