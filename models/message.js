module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
      content: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      senderId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Users', // 'Users' refers to table name
              key: 'id',       // 'id' refers to column name in Users table
          }
      },
      receiverId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Users', // 'Users' refers to table name
              key: 'id',       // 'id' refers to column name in Users table
          }
      }
      // more fields as needed
  });

  return Message;
};