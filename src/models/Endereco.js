module.exports = (connection, DataTypes) => {
  const Endereco = connection.define(
    "Endereco",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_endereco_id: {
        type: DataTypes.INTEGER,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
      },
      cep: {
        type: DataTypes.INTEGER,
      },
      destinatario: {
        type: DataTypes.STRING(200),
      },
      rua: {
        type: DataTypes.STRING(200),
      },
      numero: {
        type: DataTypes.INTEGER,
      },
      cidade: {
        type: DataTypes.STRING(100),
      },
      uf: {
        type: DataTypes.STRING(2),
      },
      bairro: {
        type: DataTypes.STRING(200),
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "enderecos",
      timestamps: true,
    }
  );
  Endereco.associate = (models) => {
    Endereco.belongsTo(models.TipoEndereco, {
      foreignKey: "tipo_endereco_id",
      as: "tipo",
      onDelete: "cascade",
    });
    Endereco.hasMany(models.Pedido, {
      foreignKey: "endereco_id",
      as: "pedidos",
      onDelete: "cascade",
    });
    Endereco.belongsTo(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
      onDelete: "cascade",
    });
  };
  return Endereco;
};
