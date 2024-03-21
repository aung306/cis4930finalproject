## CIS4930 Final Project
# Angela Ung & David Vallejo-Lozano

Predicting Outcome of Valorant Competitive Matches with Machine Learning

#Motivation
The ability to predict the outcome of a Valorant competitive match will help users better assess their time and communication skills with their teammates and be able to respond better to the matchup.
Since a single match could last between 20-50 minutes, this could save the users’ energy & mental health if they know the level of difficulty it would be to achieve a win.

#Objective
Give a percent chance of winning the competitive Valorant match given the statistics of both teams.

#Background
Valorant is a 5v5 first-person shooter available for PC.
The game consists of 7 different maps and 22 different agents as of February 2024, where one team attempts to plant a “spike” on one of the available sites, then guard it until a timer runs out, while the other attempts to prevent the attacking team from planting, or defuse the spike before the timer runs out.
Either team can also win by killing all five players on the enemy team.
The first team to 13 rounds wins, with a change of sides occurring 12 rounds in.
If the game ties at 12-12, overtime ensues, and a team must win by two rounds in order to claim victory, swapping sides every round.
Statistics for players are measured in Kills, Deaths, and Assists (KDA).
This statistic is computed as follows: (Kills + Assists) / Deaths.
This differs from KD (kills and deaths), which only takes kills per death into account.

#Implementation
1. Utilize linear regression to find the trends that correlate with higher win percentages in a competitive Valorant game in general by using Riot’s Developer Portal
2. Utilize HenrikDev’s library to collect information about the ten players in any given competitive lobby
3. Use cross-validation from the linear regression data and on the player data.
4. Determine the win rate for both teams.

#Research
Since utilizing Valorant’s API directly from the company requires an RSO (Authentication Key) and other constraints, we are using a library by HenrikDev that bypasses the authentication key and allows access to player statistics.
The library will perform the API calls and use linear regression to understand trends that correlate to winrate.