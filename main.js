const axios = require('axios');

var reds = ["Phoenix", "Clove", "Reyna", "Skye", "Cypher"];
var blues = ["Clove", "Sova", "Reyna", "Neon", "Cypher"];
module.exports = reds;
module.exports = blues;
   

//this fetches the match data of the last game
async function fetchLastMatch(player, tag) {
    try {
        const response = await axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/' + player + '/' + tag);
        //we store the player data here
        const datas = response.data.data[0].players;
        //console.log(datas);
        const blue = response.data.data[0].players.blue;
        const red = response.data.data[0].players.red;

        var temp = 1000;
        let redteam = [];
        let blueteam = [];

        while(blue[temp - 1000] != null) {
            redteam.push(red[temp - 1000].character); //.puuid to get player id 
            blueteam.push(blue[temp - 1000].character); //.character to get character
            temp++;
        }
        
        blues = blueteam;
        reds = redteam;
        console.log("Let's analyze your last match.")
        console.log(blues);
        console.log(reds);
        //blue has the blue team stats and red has the red team stats
        //return map
        return response.data.data[0].metadata.map;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchPlayerData(player, tag) {
    try {
        const response1 = await axios.get('https://api.henrikdev.xyz/valorant/v1/account/' + player + '/' + tag);
        
        const datas = response1.data;
        const puuid = datas.data.puuid;
        console.log('Player ID:', puuid);

        const response2 = await axios.get('https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr/na/' + puuid);
        console.log('Current Rank: ', response2.data.data.current_data.currenttierpatched);
        console.log('Elo (MMR): ', response2.data.data.current_data.elo);
        console.log('Current Tier: ', response2.data.data.current_data.currenttier);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function MLStep(player, tag) {
    const map = await fetchLastMatch(player, tag);
    console.log(player, '#', tag, 'Your last match was: ', map);
}

function main() {
    console.log('CIS4930 Final Project by Angela and David');
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    let player, tag;
    rl.question('Enter player name: ', (playerId) => {
        player = playerId.trim();
        rl.question('Enter player tag: ', (tagId) => {
            tag = tagId;
            console.log('Welcome ', player, '#', tag);
            console.log('Here are your player stats: ');
            fetchPlayerData(player, tag);
            MLStep(player, tag);
            rl.close();
        });
    });
}

main();