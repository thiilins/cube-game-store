const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const acessLevel = require("../middlewares/acessLevel");
const AdminController = require("../controllers/AdminController");
const OrderController = require("../controllers/OrderController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");

// router.use(isLogin);
// router.use(acessLevel);
/**
 *
 *  EXIBIR PAGINAS (VIEWS)
 *
 */
//DASHBOARD
router.get("/", AdminController.dashboardPage);
// USUARIOS
router.get("/usuarios", UserController.listUserPage);
router.get("/usuarios/criar", UserController.createUserPage);
router.get("/usuarios/editar/:id", UserController.editUserPage);
router.get("/usuarios/:id", UserController.viewUserPage);

//PRODUTO
router.get("/produtos", ProductController.listProductPage);
router.get("/produtos/criar", ProductController.createProductPage);
router.get("/produtos/editar/:id", ProductController.editProductPage);
router.get("/produtos/:id", ProductController.viewProductPage);

// CATEGORIA
router.get("/categorias", CategoryController.listCategoryPage);
router.get("/categorias/criar", CategoryController.createCategoryPage);
router.get("/categorias/editar/:id", CategoryController.editCategoryPage);
router.get("/categorias/:id", CategoryController.viewCategoryPage);

// PEDIDO
router.get("/pedidos", OrderController.listOrderPage);
router.get("/pedidos/criar", OrderController.createOrderPage);
router.get("/pedidos/editar/:id", OrderController.editOrderPage);
router.get("/pedidos/:id", OrderController.viewOrderPage);

/**
 *
 *  AÇÕES(EDITAR/EXCLUIR/CRIAR)
 *
 */
//USUARIO
router.post("/usuario/", UserController.createUser);
router.put("/usuario/:id", UserController.editUser);
router.delete("/usuario/:id", UserController.deleteUser);
//PRODUTO
router.post("/produto/", ProductController.createProduct);
router.put("/produto/:id", ProductController.editProduct);
router.delete("/produto/:id", ProductController.deleteProduct);
//CATEGORIA
router.post("/categoria/", CategoryController.createCategory);
router.put("/categoria/:id", CategoryController.editCategory);
router.delete("/categoria/:id", CategoryController.deleteCategory);
//PEDIDO
router.post("/pedido/", OrderController.createOrder);
router.put("/pedido/:id", OrderController.editOrder);
router.delete("/pedido/:id", OrderController.deleteOrder);

module.exports = router;
