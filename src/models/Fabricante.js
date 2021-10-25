module.exports = (connection, DataTypes) => {
  const Fabricante = connection.define(
    "Fabricante",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(200),
      },
      img_url: {
        type: DataTypes.STRING(200),
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "fabricantes",
      timestamps: true,
    }
  );
  Fabricante.associate = (models) => {
    Fabricante.hasMany(models.Produto, {
      foreignKey: "fabricante_id",
      as: "produtos",
      onDelete: "cascade",
    });
  };
  return Fabricante;
};
