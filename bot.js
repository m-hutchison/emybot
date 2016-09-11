var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();


// Server tokens
// Add tokens here to connect to different servers quickly


client.connect({
 token: 'ADD DISCORD TOKEN HERE'
})

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == 'Hello Emy_Bot') {
   e.message.channel.sendMessage('Hello'+ ' ' + e.message.author.username + ' ' + ':heart:');
   }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == '!introduction') {
   e.message.channel.sendMessage('Hello, I am a cute little bot called Emy_Bot.');
   e.message.channel.sendMessage('I was designed to help Emy and others learn about computers! :D');
   }
});

// Begin Networking tutorial here
// $network :: Introduction
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == '$network') {
   e.message.channel.sendMessage('Welcome to an introductory guide on Networking.');
   e.message.channel.sendMessage('Networks are common, both in real life and virtual. The definition of a network can be simply put as exchanging information.');
   e.message.channel.sendMessage('In this tutorial we are going to cover the basics of what makes a network and how to manage one.');
   }
});

// $network.1 :: Network basics
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == '$network.1') {
   e.message.channel.sendMessage('Starting off we need to discuss the different types of networks we can manage.');
   e.message.channel.sendMessage('There are four common types of networks, which are: **LAN, WAN, WLAN, and MAN**.');
   e.message.channel.sendMessage('LAN: A small network, limited to a single collection of machines and linked by interconnecting devices in a small geographical area.');
   e.message.channel.sendMessage('WAN: Internetworks that are geo-graphically dispersed and use third-party communication providers to provide connectivity between locations.');
   e.message.channel.sendMessage('WLAN: A small network, similar to a LAN yet utilises wireless technology.');
   e.message.channel.sendMessage('MAN: An internetwork confined to a geographical region, such as a city or county; uses third-party communication providers to provide connectivity between locations.');
   }
});

// $network.2 :: LANs
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == '$network.2') {
   e.message.channel.sendMessage('**LAN - Local Area Network**');
   e.message.channel.sendMessage('A LAN is a common network type that is used everyday, these are generally used for networks that have limited scope (such as home, schools, office buildings etc.)  ');
   e.message.channel.sendMessage('A basic LAN layout can look something like the following:');
   e.message.channel.sendMessage('http://www.geekzone.co.nz/imagessubs/blog5262d7f2e5972d89db8e99df97024ea7.jpg');
   }
});

// End Networking tutorial

// For shits and giggles
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == '$whoami') {
   e.message.channel.sendMessage('You are' + ' ' + e.message.author.username + ', ' + 'who is a pleb');
   }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == '$whoisthebest') {
   e.message.channel.sendMessage('rax is!');
   }
});
