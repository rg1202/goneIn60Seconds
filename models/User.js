// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensure email uniqueness
            validate: {
                isEmail: true // Validate email format
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    return User;
    };