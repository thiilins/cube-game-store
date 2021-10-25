module.exports = (connection, DataTypes) => {
  const Categoria = connection.define(
    "Categoria",
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
    },
    {
      tableName: "categorias",
      timestamps: true,
    }
  );
  Categoria.associate = (models) => {
    Categoria.belongsToMany(models.Produto, {
      foreignKey: "categoria_id",
      as: "categoria",
      through: models.ProdutoCategoria,
    });
  };

  return Categoria;
};
