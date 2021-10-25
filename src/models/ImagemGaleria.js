module.exports = (connection, DataTypes) => {
  const ImagemGaleria = connection.define(
    "ImagemGaleria",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      produto_id: {
        type: DataTypes.INTEGER,
      },
      img_url: {
        type: DataTypes.STRING(200),
      },
    },
    {
      tableName: "imagens_galeria",
      timestamps: true,
    }
  );
  ImagemGaleria.associate = (models) => {
    ImagemGaleria.belongsTo(models.Produto, {
      foreignKey: "produto_id",
      as: "produto",
      onDelete: "cascade",
    });
  };
  return ImagemGaleria;
};
