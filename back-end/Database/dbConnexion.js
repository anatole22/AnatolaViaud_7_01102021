const Sequelize = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', null, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('La connnexion s\'est établie correctement');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

module.exports = sequelize
global.sequelize = sequelize;