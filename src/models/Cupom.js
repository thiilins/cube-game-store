module.exports = (connection, DataTypes) => {
  const Cupom = connection.define(
    "Cupom",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: DataTypes.STRING(256),
      },
      status: {
        type: DataTypes.STRING(200),
      },
      valor_desconto: {
        type: DataTypes.INTEGER,
      },
      tipo_desconto: {
        type: DataTypes.INTEGER,
      },
      data_inicial: {
        type: DataTypes.DATE,
      },
      data_final: {
        type: DataTypes.DATE,
      },
      limite_uso: {
        type: DataTypes.INTEGER,
      },
      quant_usos: {
        type: DataTypes.INTEGER,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "cupons",
      timestamps: true,
    }
  );

  Cupom.associate = (models) => {
    Cupom.hasMany(models.Pedido, {
      foreignKey: "cupom_id",
      as: "pedidos",
      onDelete: "cascade",
    });
  };
  return Cupom;
};
