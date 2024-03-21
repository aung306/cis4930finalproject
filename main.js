const axios = require('axios');


//this fetches the match data of the specific game
async function fetchAllPlayersinMatchData() {
    try {
        const response = await axios.get('https://api.henrikdev.xyz/valorant/v2/match/696848f3-f16f-45bf-af13-e2192f81a600');
        
        const datas = response.data;
        const players = datas.data.players
        //console.log('Data:', players);
        var temp = 1000;
        while(matches[temp - 1000] != null) {
            console.log('Player ', temp - 1000, players[temp - 1000].metadata.mode);
            temp++;
        }
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
            rl.close();
        });
    });
}
main();