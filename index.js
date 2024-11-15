const sequelize = require('../config/database');
const User = require('./user');
const Task = require('./task');

// Define relações
Task.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Task, { foreignKey: 'userId' });

module.exports = { sequelize, User, Task };