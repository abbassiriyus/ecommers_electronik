const { Client } = require("pg")

const pool = new Client({
    user: "postgres",
    host: "containers-us-west-209.railway.app",
    database: "railway",
    password: "iJk1pfnBpvi1jX6TMGiM",
    port: 7749
})
pool.connect(err => {
    if(err) {
        console.log("Connect Error");
    } else {
        console.log("Connect To PostgreSql");
    }
})

module.exports = pool