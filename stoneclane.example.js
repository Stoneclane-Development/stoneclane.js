const Stoneclane = require('./stoneclane.index');
const dbl = new Stoneclane("BOT TOKEN");


dbl.on("ready", (bot) => {
    console.log(`Bot named ${bot.username} successfully finded on Stoneclane.`)
    dbl.checkVote("909486686986178610").then(value => console.log("Vote Control: "+ value))

    /*
        let guildCount = 1234;
        let shardCount = 5;
        dbl.stats(guildCount, shardCount, () => console.log("Stats updated on Stoneclane."));
    */
})


/*
    Get with Bot: 
    dbl.on("vote", ({ user, bot }) => {
        console.log(`${user.username} voted ${bot.username}`)
    })
*/
dbl.on("vote", ({ user }) => {
    console.log(`${user.username} voted.`)
})