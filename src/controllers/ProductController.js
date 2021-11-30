// Importar os models (produto/categoria)

const ProductController = {
  createProductPage(req, res) {
    try {
     // Categorias = categories
      return res.render("admin/dashboard", {
        file: "products/create",
        page: "Adicionar Produto",
        //categories
      });
    } catch (error) {
      console.log(error);
    }
  },
  listProductPage(req, res) {
    try {
      //produtos = product (include -- categorias)
      return res.render("admin/dashboard", {
        file: "products/list",
        page: "Produtos",
        //product
      });
    } catch (error) {
      console.log(error);
    }
  },
  viewProductPage(req, res) {
      //produto = product (include -- categorias)
      // id
    try {
      return res.render("admin/dashboard", {
        file: "products/view",
        page: "",
        //product
      });
    } catch (error) {
      console.log(error);
    }
  },
  editProductPage(req, res) {
    try {  //produto = product  (include -- categorias)
      // categorias = categories
      return res.render("admin/dashboard", {
        file: "products/edit",
        page: "Editando:",
        //product
        //categories
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createProduct(req, res) {
    try {
      const {
        nome,
        SKU,
        fabricante_id,
        preco_regular,
        preco_promocional,
        descricao_curta,
        descricao,
        altura_embalagem,
        largura_embalagem,
        comprimento_embalagem,
        peso_embalagem,
        altura_produto,
        largura_produto,
        peso_produto,
        comprimento_produto,
        estoque,
      } = req.body;
      let imagem_destacada = null;
      if (req.file && req.files != "undefined") {
        imagem_destacada = req.file.filename;
      }

      const newProduct = await Product.create({
        nome,
        SKU,
        fabricante_id,
        preco_regular,
        preco_promocional,
        descricao_curta,
        descricao,
        altura_embalagem,
        largura_embalagem,
        comprimento_embalagem,
        peso_embalagem,
        altura_produto,
        largura_produto,
        peso_produto,
        comprimento_produto,
        imagem_destacada,
        estoque,
        vendas: 0,
        ativo: 1,
      });
      return res.redirect("admin/produtos");
    } catch (error) {
      console.log(error);
    }
  },
  async editProduct(req, res) {
    try {
      // id
      const {
        nome,
        SKU,
        fabricante_id,
        preco_regular,
        preco_promocional,
        descricao_curta,
        descricao,
        altura_embalagem,
        largura_embalagem,
        comprimento_embalagem,
        peso_embalagem,
        altura_produto,
        largura_produto,
        peso_produto,
        comprimento_produto,
        estoque,
        ativo,
      } = req.body;
      let imagem_destacada = undefined;
      if (req.file && req.files != "undefined") {
        imagem_destacada = req.file.filename;
      }
      const newProduct = await Product.updated({
        nome,
        SKU,
        fabricante_id,
        preco_regular,
        preco_promocional,
        descricao_curta,
        descricao,
        altura_embalagem,
        largura_embalagem,
        comprimento_embalagem,
        peso_embalagem,
        altura_produto,
        largura_produto,
        peso_produto,
        comprimento_produto,
        imagem_destacada,
        estoque,
        ativo,
      }, {
        where: { id },
      });
       return res.redirect("admin/produtos");
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct(req, res) {
    try { 
      const {id} = req.params;
      const product = await Produto.findByPk(id);
      const {vendas} = produto;
      if(vendas >= 1){
      const disableProduct = await Produto.update({
        ativo: 0
      }, { where: { id } })
      return res.redirect('admin/produtos')
      }
      const destroyProduct = await Produto.destroy({
        where: { id },
      })
      return res.redirect('admin/produtos')
      
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = ProductController;

