const Sequelize = require('sequelize')

const conexao = new Sequelize({
  database: "d3ueh3i7lu09ot",
  username: "dptwbeacdseohi",
  password: "130ae8668587d7f7b7e06018b7dd4e96aed727a34ba1cae948dc19a41dbac52c",
  host: "ec2-54-159-35-35.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
});

// const conexao = new Sequelize("app", "root", "J6t2hybt26@", {
//   host: "localhost",
//   dialect: "mysql",
//   timezone: "-03:00"
// })

module.exports = conexao