const Discord = require("discord.js");
var fs = require("fs");
const config = require("./config.json");

const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if(jsfile.length <= 0){
        console.log("Wystąpił błąd bota! Folder ./commands/ jest pusty!");
    }

    jsfile.forEach((f) =>{
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name,props)
    })
})


client.on("ready",() => {
    console.log("Bot jest online!")
   client.user.setActivity("Anal z Jokerem",{type: "PLAYING"});
})

client.on("message", async message =>{
    if(message.content === "co?")return message.reply("Gówno!")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Ping")return message.reply("Pong!")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "PerfectBot")return message.reply("Pierdol się!")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "%server info")return message.reply("Właścicielem serwera jest Joker. Jest to serwer discord serwera MTA PerfectRPG. Zapraszamy do gry!")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Ten serwer to gówno")return message.reply("Pojebało cię? Jesteś do bana.")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Siema")return message.reply("Witaj!")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "siema")return message.reply("Witaj!")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "jebać PIS")return message.reply("+1")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "PIS")return message.reply("Prawo i Sprawiedliwość (PiS) – polska partia polityczna założona na kongresie 29 maja 2001 przez braci Lecha i Jarosława Kaczyńskich, zarejestrowana sądownie 13 czerwca 2001. Powstała na fali popularności uzyskanej przez Lecha Kaczyńskiego podczas sprawowania przez niego funkcji ministra sprawiedliwości i prokuratora generalnego w rządzie Akcji Wyborczej Solidarność.")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Co tam?")return message.reply("Zajebiście.")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Co robisz?")return message.reply("Rucham się.")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "...")return message.reply("...")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Jak się nazywasz?")return message.reply("Jestem PerfectBot. Bot najlepszego serwera MTA.")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Pa")return message.reply("Żegnaj przybyszu z północy.")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.on("message", async message =>{
    if(message.content === "Kochasz mnie?")return message.reply("Oczywiście, że tak!<3")  


    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

client.login(config.token);
