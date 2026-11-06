const mysql = require("mysql");
const { host, user, password, database } = require('./config')

const pool = mysql.createPool({
  host: process.env.DB_HOST || host,
  user: process.env.DB_USER || user,
  password: process.env.DB_PASSWORD || password,
  database: process.env.DB_NAME || database,
  connectionLimit: 10,
  charset: "utf8mb4",
  timezone: "Z",
});

// Обёртка над pool.query в виде Promise
function query(sql, params = []) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

// Обёртка для транзакций
function getConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) return reject(err);
      resolve({
        connection: conn,
        begin: () =>
          new Promise((res, rej) =>
            conn.beginTransaction((e) => (e ? rej(e) : res()))
          ),
        commit: () =>
          new Promise((res, rej) =>
            conn.commit((e) => (e ? rej(e) : res()))
          ),
        rollback: () =>
          new Promise((res, rej) =>
            conn.rollback((e) => (e ? rej(e) : res()))
          ),
        query: (sql, params = []) =>
          new Promise((res, rej) =>
            conn.query(sql, params, (e, r) => (e ? rej(e) : res(r)))
          ),
        release: () => conn.release(),
      });
    });
  });
}

module.exports = { pool, query, getConnection };