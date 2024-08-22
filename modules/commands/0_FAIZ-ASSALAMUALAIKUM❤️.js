const fs = require("fs");
module.exports.config = {
  name: "Assalamu alaikkum",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("asalamu alaikum") ||
     react.includes("assalamu alaikkum") || react.includes("Assalamu alaikkum") || react.includes("ASALAMU ALAIKUM") ||
react.includes("Assalamualaikum") ||
react.includes("Assalamu Alaikum")) {
    var msg = {
        body: `♥ W'aleykum Assalam Wa'rahmatullahi Wa'barakatuh ❤️`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }