module.exports = (connection, DataTypes) => {
  const ItemPedido = connection.define(
    "ItemPedido",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pedido_id: {
        type: DataTypes.INTEGER,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
      },
      produto_id: {
        type: DataTypes.INTEGER,
      },
      variacao_id: {
        type: DataTypes.INTEGER,
      },
      valor_unitario: {
        type: DataTypes.FLOAT(10),
      },
      quantidade: {
        type: DataTypes.INTEGER,
      },
      desconto: {
        type: DataTypes.FLOAT(10),
      },
      valor_total: {
        type: DataTypes.FLOAT(10),
      },
    },
    {
      tableName: "itens_pedido",
      timestamps: true,
    }
  );

  ItemPedido.associate = (models) => {
    ItemPedido.belongsTo(models.Pedido, {
      foreignKey: "pedido_id",
      as: "pedido",
      onDelete: "cascade",
    });
    ItemPedido.belongsTo(models.Variacao, {
      foreignKey: "variacao_id",
      as: "variacao",
      onDelete: "cascade",
    });
    ItemPedido.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
      onDelete: "cascade",
    });
    ItemPedido.belongsTo(models.Produto, {
      foreignKey: "produto_id",
      as: "produto",
      onDelete: "cascade",
    });
  };
  return ItemPedido;
};
