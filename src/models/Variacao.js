module.exports = (connection, DataTypes) => {
  const Variacao = connection.define(
    "Variacao",
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
      produto_id: {
        type: DataTypes.INTEGER,
      },
      altura: {
        type: DataTypes.FLOAT(10),
      },
      largura: {
        type: DataTypes.FLOAT(10),
      },
      comprimento: {
        type: DataTypes.FLOAT(10),
      },
      peso: {
        type: DataTypes.FLOAT(10),
      },
      preco_regular: {
        type: DataTypes.FLOAT(15),
      },
      preco_promocional: {
        type: DataTypes.FLOAT(15),
      },
      vendas: {
        type: DataTypes.INTEGER,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "variacoes",
      timestamps: true,
    }
  );
  Variacao.associate = (models) => {
    Variacao.belongsTo(models.Produto, {
      foreignKey: "produto_id",
      as: "produto",
      onDelete: "cascade",
    });
    Variacao.hasMany(models.ItemPedido, {
      foreignKey: "variacao_id",
      as: "vendidos",
      onDelete: "cascade",
    });
  };
  return Variacao;
};
