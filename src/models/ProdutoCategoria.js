module.exports = (connection, DataTypes) => {
  const ProdutoCategoria = connection.define(
    "ProdutoCategoria",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      produto_id: {
        type: DataTypes.INTEGER,
      },
      categoria_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "produto_has_categoria",
      timestamps: true,
    }
  );

  return ProdutoCategoria;
};
