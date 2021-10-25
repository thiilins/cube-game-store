module.exports = (connection, DataTypes) => {
  const Telefone = connection.define(
    "Telefone",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
      },
      tipo_contato: {
        type: DataTypes.STRING(200),
      },
      telefone: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "telefones",
      timestamps: true,
    }
  );
  Telefone.associate = (models) => {
    Telefone.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
      onDelete: "cascade",
    });
  };
  return Telefone;
};
