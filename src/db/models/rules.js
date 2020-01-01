'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rules = sequelize.define('Rules', {
    description: DataTypes.STRING
  }, {});
  Rules.associate = function(models) {
    Rule.belongsTo(models.Topic, {
      foreignKey: "topicId",
      onDelete: "CASCADE"
    })
};
  return Rules;
};