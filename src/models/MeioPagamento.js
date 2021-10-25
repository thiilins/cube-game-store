module.exports = (connection, DataTypes) => {
  const MeioPagamento = connection.define(
    "MeioPagamento",
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
      tableName: "meios_de_pagamento",
      timestamps: true,
    }
  );
  MeioPagamento.associate = (models) => {
    MeioPagamento.hasMany(models.Pedido, {
      foreignKey: "meio_pagamento_id",
      as: "pedidos",
      onDelete: "cascade",
    });
  };
  return MeioPagamento;
};
