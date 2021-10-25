module.exports = (connection, DataTypes) => {
  const Produto = connection.define(
    "Produto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(200),
      },
      SKU: {
        type: DataTypes.STRING(200),
      },
      fabricante_id: {
        type: DataTypes.INTEGER,
      },
      preco_regular: {
        type: DataTypes.FLOAT(15),
      },
      preco_promocional: {
        type: DataTypes.FLOAT(15),
      },
      descricao_curta: {
        type: DataTypes.STRING(300),
      },
      descricao: {
        type: DataTypes.TEXT("long"),
      },
      altura_embalagem: {
        type: DataTypes.FLOAT(10),
      },
      largura_embalagem: {
        type: DataTypes.FLOAT(10),
      },
      comprimento_embalagem: {
        type: DataTypes.FLOAT(10),
      },
      peso_embalagem: {
        type: DataTypes.FLOAT(10),
      },
      altura_produto: {
        type: DataTypes.FLOAT(10),
      },
      largura_produto: {
        type: DataTypes.FLOAT(10),
      },
      comprimento_produto: {
        type: DataTypes.FLOAT(10),
      },
      peso_produto: {
        type: DataTypes.FLOAT(10),
      },
      imagem_destacada: {
        type: DataTypes.STRING(300),
      },
      estoque: {
        type: DataTypes.INTEGER,
      },
      vendas: {
        type: DataTypes.INTEGER,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "produtos",
      timestamps: true,
    }
  );
  Produto.associate = (models) => {
    Produto.belongsTo(models.Fabricante, {
      foreignKey: "fabricante_id",
      as: "fabricante",
      onDelete: "cascade",
    });
    Produto.hasMany(models.Variacao, {
      foreignKey: "produto_id",
      as: "variacoes",
      onDelete: "cascade",
    });
    Produto.hasMany(models.ImagemGaleria, {
      foreignKey: "produto_id",
      as: "imagens",
      onDelete: "cascade",
    });
    Produto.hasMany(models.ItemPedido, {
      foreignKey: "produto_id",
      as: "compras",
      onDelete: "cascade",
    });
    Produto.belongsToMany(models.Categoria, {
      foreignKey: "pedido_id",
      as: "categoria",
      through: models.ProdutoCategoria,
    });
  };
  return Produto;
};
