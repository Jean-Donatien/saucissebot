const Discord = require("discord.js");
const client = new Discord.Client();
var messageRecu = 0;
var okQuest

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on("message", message => {
  messageRecu++;
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});

client.on('message', message => {
  if (message.content === 'stats') {
    message.channel.send("Nombre de message reçu: " + messageRecu + " (dans un ensemble de : " + client.guilds.size + " serveur(s))" )
  }
});

client.on('message', message => {
  if (message.content === 'roll') {
    message.reply(getRandomInt(100))
  } else if (message.content === "megaroll") {
   message.reply(getRandomInt(1000)) 
  }
});

client.on('message', message => {
  if (message.content === 'avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.on("message", message => {
  if (message.content === "profile") {
   message.channel.send({embed: {
     color: 3447003,
     description: "Bot: " + message.author.bot,
     author: {
       name: "Compte de '" + message.author.username + "'",
       icon_url: message.author.avatarURL
     },
     title: "Information de ce compte",
     /*url: "http://google.com",*/
     fields: [{
     name: "Créé le: ",
     value: message.author.createdAt
   },
   {
     name: "Status: " + message.author.presence.status,
     value: "Joue a: " + message.author.presence.game.name
   }]
   }})
  }
});

client.on('message', message => {
  if (message.content === 'question') {
    var a = getRandomInt(1);
    switch (a) {
      case 0:
        message.reply("Combien ma saucisse mesure-t-elle (en metre)")
          client.on("message", message => {
                 if (message.content === "50m") {
                  message.reply("Bravo") 
                 } else {
                 }
                 });
    }
  }
});

client.login('MzY0MDQ4NjkwNTcyMjk2MTk0.DeGNrw.5sX0_b_J7NV8zpugqlvjjgjf_H0');


/*"```Nom: " + message.author.username + "(Bot :" + message.author.bot + ") \nCréé le: " + message.author.createdAt + "  \n" + "Status: " + message.author.presence.status +
                 " (Entrain de jouer a: " + message.author.presence.game.name + ") ``` \n" + message.author.avatarURL*/
