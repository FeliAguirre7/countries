const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isValidSeason(value) {
          const validSeasons = ["Summer", "Autumn", "Winter", "Spring"];
          if (!validSeasons.includes(value)) {
            throw new Error(
              "The season must be summer, autumn, winter, or spring"
            );
          }
        },
      },
    },

    duration: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 1,
      },
    },
  });
};
