const request = require("request");
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
var SteamCommunity = require('steamcommunity');
var steamID3 = SteamCommunity.SteamID;
var colors = require('colors');
var readline = require('readline');
var cheerio = require('cheerio');
var got = require('got');
let community = new SteamCommunity();
reqOptions = require('./req-options');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Hey there! I'm LV's Steam tool coded on Nodejs".yellow)
  rl.question("Tell me the SteamID3 of the user that you want to get information about!\n", function(steamidvalue) {
    if (!steamidvalue) return console.log("Please, enter a SteamID3!\n".red);
    
var sid = new steamID3(steamidvalue);
console.log("\nSteamID3".bold);
console.log(steamidvalue);
console.log("SteamID64".bold);
console.log(sid.toString());
console.log("Steam Privacy".bold);
if (sid.universe = "1") {
console.log("public profile")
} else {
console.log("private profile")
}
console.log("Permanent Profile link".bold);
console.log("http://steamcommunity.com/profiles/"+sid.toString());
console.log("User's Inventory".bold);
console.log("http://steamcommunity.com/profiles/"+sid.toString()+"/inventory");
console.log("User's Screenshots".bold);
console.log("http://steamcommunity.com/profiles/"+sid.toString()+"/screenshots");

const acustomurl = 'https://steamid.io/lookup/'+sid.toString()
request(acustomurl, reqOptions, function(error, response, body) {
  if(response.statusCode !== 200 || error){
  }

  const $ = cheerio.load(response.body);
  let arr = [];

  $('section[id="content"]').each(function(index, element){
    arr.push({
      customurl : $(element).find('dd[class="value short"] a[target="_blank"]').text()
    })
  })
  console.log("Custom Url".bold);
  console.log("http://steamcommunity.com/id/"+arr[0]['customurl']);
})

const accountlevel = 'https://steamid.uk/profile/'+sid.toString()
request(accountlevel, reqOptions, function(error, response, body) {

  if(response.statusCode !== 200 || error){
  }

  const $ = cheerio.load(response.body);
  let arr = [];

  $('div[class="right"]').each(function(index, element){
    arr.push({
      accountleveld : $(element).find('span[class="label label-success pull-right"]').text()
    })
  })
  console.log("Account Level".bold);
  console.log(arr[0]['accountleveld']);
})

const accountusername = 'http://steamcommunity.com/profiles/'+sid.toString()
request(accountusername, reqOptions, function(error, response, body) {

  if(response.statusCode !== 200 || error){
  }

  const $ = cheerio.load(response.body);
  let arr = [];

  $('div[class="persona_name"]').each(function(index, element){
    arr.push({
      accountussername : $(element).find('span[class="actual_persona_name"]').text()
    })
  })
  console.log("Account Username".bold);
  console.log(arr[0]['accountussername']);
})

const accountfavgroup = 'http://steamcommunity.com/profiles/'+sid.toString()
request(accountfavgroup, reqOptions, function(error, response, body) {

  if(response.statusCode !== 200 || error){
  }

  const $ = cheerio.load(response.body);
  let arr = [];

  $('div[class="favoritegroup_namerow ellipsis"]').each(function(index, element){
    arr.push({
      favgroup : $(element).find('a[class="favoritegroup_name whiteLink"]').text()
    })
  })
  console.log("Favourite Group".bold);
  console.log(arr[0]['favgroup']);
})
        rl.close();
    });

    sleep(60000).then(() => {
    });