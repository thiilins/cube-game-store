module.exports = (connection, DataTypes) => {
  const Status = connection.define(
    "Status",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(256),
      },
    },
    {
      tableName: "status",
      timestamps: true,
    }
  );
  Status.associate = (models) => {
    Status.hasMany(models.Pedido, {
      foreignKey: "status_id",
      as: "pedidos",
      onDelete: "cascade",
    });
  };
  return Status;
};
