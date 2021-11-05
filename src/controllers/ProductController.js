const ProductController = {
  createProductPage(req, res) {
    try {
      //return res.status(200).json({produto: "teste"})
       return res.render("admin/dashboard", {
         file: "products/create",
         page: "Adicionar Produto"
       });
    } catch (error) {
      console.log(error);
    }
  },
  listProductPage(req, res) {
    try {//puxar produtos e categorias
      return res.render("admin/dashboard", {
        file: "products/list",
        page: "Produtos",
      });
    } catch (error) {
      console.log(error);
    }
  },
  viewProductPage(req, res) {//puxar 
    try {
      return res.render("admin/dashboard", {
        file: "products/view",
        page: "",
      });
    } catch (error) {
      console.log(error);
    }
  },
  editProductPage(req, res) {
    try {
      return res.render("admin/dashboard", {
        file: "products/edit",
        page: "Editando:",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createProduct(req, res) {
    try {
      const { nome, SKU, fabricante_id, preco_regular, preco_promocional, descricao_curta, descricao, altura_embalagem, largura_embalagem, comprimento_embalagem, peso_embalagem, altura_produto, largura_produto, peso_produto, comprimento_produto, imagem_destacada, estoque, vendas, ativo, createdAt, updatedAt } = req.body;
      const newProduct = await Product.create({ nome, SKU, fabricante_id, preco_regular, preco_promocional, descricao_curta, descricao, altura_embalagem, largura_embalagem, comprimento_embalagem, peso_embalagem, altura_produto, largura_produto, peso_produto, comprimento_produto, imagem_destacada, estoque, vendas, ativo, createdAt, updatedAt });
      return res.render("admin/dashboard", {
        file: "products/list",
        page: "Produtos",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editProduct(req, res) {
    try {
      const { nome, SKU, fabricante_id, preco_regular, preco_promocional, descricao_curta, descricao, altura_embalagem, largura_embalagem, comprimento_embalagem, peso_embalagem, altura_produto, largura_produto, peso_produto, comprimento_produto, imagem_destacada, estoque, vendas, ativo, createdAt, updatedAt } = req.body;
      const newProduct = await Product.updated({ nome, SKU, fabricante_id, preco_regular, preco_promocional, descricao_curta, descricao, altura_embalagem, largura_embalagem, comprimento_embalagem, peso_embalagem, altura_produto, largura_produto, peso_produto, comprimento_produto, imagem_destacada, estoque, vendas, ativo, createdAt, updatedAt });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteProduct(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = ProductController;
