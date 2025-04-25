const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "lyricuser",
    password: "yourpassword",
    database: "lyrics"
});  

module.exports = pool;
