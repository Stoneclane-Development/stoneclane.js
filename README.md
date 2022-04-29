![npm install](https://nodei.co/npm/stoneclane.js.png?mini=false)<br/>
[Do you need my help? Visit our Discord server.](https://stoneclane.xyz/discord)

# Installation
```console
npm i stoneclane.js --save
yarn add stoneclane.js
```


# Usage
```js
const Stoneclane = require('./stoneclane.index');
const dbl = new Stoneclane("Stoneclane Bot Token");
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
```

# Detailed

### Define Module
```js
const Stoneclane = require('./stoneclane.index');
const dbl = new Stoneclane("Stoneclane Bot Token");
```

### Let's add an event to see if it works.
```js
dbl.on("ready", (bot) => {
    console.log(`Bot named ${bot.username} successfully finded on Stoneclane.`)
})
// => Bot named GiveAways successfully finded on Stoneclane.
```

### Let's update bot data
```js
dbl.on("ready", (bot) => {
    console.log(`Bot named ${bot.username} successfully finded on Stoneclane.`)
    let guildCount = 1234;
    let shardCount = 5;
    dbl.stats(guildCount, shardCount, () => console.log("Stats updated on Stoneclane."));
})
// => Bot named GiveAways successfully finded on Stoneclane.
// => Stats updated on Stoneclane.
```

### Let's check if a user has voted.
```js
dbl.on("ready", (bot) => {
    console.log(`Bot named ${bot.username} successfully finded on Stoneclane.`)
    dbl.checkVote("909486686986178610").then(value => console.log("Vote Control: "+ value))
    /*
        let guildCount = 1234;
        let shardCount = 5;
        dbl.stats(guildCount, shardCount, () => console.log("Stats updated on Stoneclane."));
    */
})
// => Bot named GiveAways successfully finded on Stoneclane.
// => Vote Control: false
```

### Let's check if there is a user who voted for our bot instantly.
```js
dbl.on("vote", ({ user }) => {
    console.log(`${user.username} voted.`)
})
// => JanjyTapYT voted.
```
```js
// WITH BOT
dbl.on("vote", ({ user, bot }) => {
    console.log(`${user.username} voted ${bot.username}`)
})
// => JanjyTapYT voted GiveAways.
```

---
<h6 align="center">Developed with ❤️ by Stoneclane Development</h6>
