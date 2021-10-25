module.exports = (connection, DataTypes) => {
  const Pedido = connection.define(
    "Pedido",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
      },
      status_id: {
        type: DataTypes.INTEGER,
      },
      data_pedido: {
        type: DataTypes.DATE,
      },
      quantidade_produtos: {
        type: DataTypes.INTEGER,
      },
      endereco_id: {
        type: DataTypes.INTEGER,
      },
      meio_pagamento_id: {
        type: DataTypes.INTEGER,
      },
      meio_entrega_id: {
        type: DataTypes.INTEGER,
      },
      valor_frete: {
        type: DataTypes.FLOAT(10),
      },
      valor_produtos: {
        type: DataTypes.FLOAT(10),
      },
      desconto: {
        type: DataTypes.FLOAT(10),
      },
      cupom_id: {
        type: DataTypes.INTEGER,
      },
      valor_total: {
        type: DataTypes.FLOAT(10),
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "pedidos",
      timestamps: true,
    }
  );
  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
      onDelete: "cascade",
    });

    Pedido.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
      onDelete: "cascade",
    });
    Pedido.belongsTo(models.Endereco, {
      foreignKey: "endereco_id",
      as: "endereco",
      onDelete: "cascade",
    });

    Pedido.belongsTo(models.MeioPagamento, {
      foreignKey: "meio_pagamento_id",
      as: "meio_pagamento",
      onDelete: "cascade",
    });

    Pedido.belongsTo(models.MeioEntrega, {
      foreignKey: "meio_entrega_id",
      as: "meio_entrega",
      onDelete: "cascade",
    });

    Pedido.belongsTo(models.Cupom, {
      foreignKey: "cupom_id",
      as: "cupom",
      onDelete: "cascade",
    });

    Pedido.hasMany(models.ItemPedido, {
      foreignKey: "pedido_id",
      as: "itens",
      onDelete: "cascade",
    });
  };
  return Pedido;
};
