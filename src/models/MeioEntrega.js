module.exports = (connection, DataTypes) => {
  const MeioEntrega = connection.define(
    "MeioEntrega",
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
      tableName: "meios_de_entrega",
      timestamps: true,
    }
  );
  MeioEntrega.associate = (models) => {
    MeioEntrega.hasMany(models.Pedido, {
      foreignKey: "meio_entrega_id",
      as: "pedidos",
      onDelete: "cascade",
    });
  };
  return MeioEntrega;
};
