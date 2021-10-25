module.exports = (connection, DataTypes) => {
  const TipoEndereco = connection.define(
    "TipoEndereco",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_endereco: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: "tipos_de_endereco",
      timestamps: true,
    }
  );

  TipoEndereco.associate = (models) => {
    TipoEndereco.hasMany(models.Endereco, {
      foreignKey: "tipo_endereco_id",
      as: "enderecos",
      onDelete: "cascade",
    });
  };
  return TipoEndereco;
};
