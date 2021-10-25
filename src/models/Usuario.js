module.exports = (connection, DataTypes) => {
  const Usuario = connection.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(200),
      },
      sobrenome: {
        type: DataTypes.STRING(200),
      },
      nome_social: {
        type: DataTypes.STRING(200),
      },
      avatar: {
        type: DataTypes.STRING(200),
      },
      email: {
        type: DataTypes.STRING(200),
      },
      senha: {
        type: DataTypes.STRING(256),
      },
      tipo_usuario: {
        type: DataTypes.BOOLEAN,
      },
      cpf: {
        type: DataTypes.INTEGER,
      },
      nascimento: {
        type: DataTypes.DATEONLY,
      },
      quant_pedidos: {
        type: DataTypes.INTEGER,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "usuarios",
      timestamps: true,
    }
  );
  Usuario.associate = (models) => {
    Usuario.hasMany(models.Endereco, {
      foreignKey: "usuario_id",
      as: "enderecos",
      onDelete: "cascade",
    });
    Usuario.hasMany(models.Telefone, {
      foreignKey: "usuario_id",
      as: "telefones",
      onDelete: "cascade",
    });
    Usuario.hasMany(models.Pedido, {
      foreignKey: "usuario_id",
      as: "pedidos",
      onDelete: "cascade",
    });
    Usuario.hasMany(models.ItemPedido, {
      foreignKey: "usuario_id",
      as: "itens_comprados",
      onDelete: "cascade",
    });
  };
  return Usuario;
};
