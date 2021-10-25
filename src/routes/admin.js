const express = require("express");
const router = express.Router();
const isLogin = require("../middlewares/auth");
const AdminController = require("../controllers/AdminController");
const OrderController = require("../controllers/OrderController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");

router.use(isLogin);
/**
 *
 *  EXIBIR PAGINAS (VIEWS)
 *
 */
//DASHBOARD
router.get("/", AdminController.dashboardPage);
// USUARIOS
router.get("/usuarios", UserController.listUserPage);
router.get("/usuario/:id", UserController.viewUserPage);
router.get("/usuario/:id/editar", UserController.EditUserPage);
router.get("/usuarios/criar", UserController.CreateUserPage);
//PRODUTO
router.get("/produtos", ProductController.listProductPage);
router.get("/produto/:id", ProductController.viewProductPage);
router.get("/produto/:id/editar", ProductController.EditProductPage);
router.get("/produto/criar", ProductController.CreateProductPage);
// CATEGORIA
router.get("/categorias", CategoryController.listCategoryPage);
router.get("/categoria/:id", CategoryController.viewCategoryPage);
router.get("/categoria/:id/editar", CategoryController.EditCategoryPage);
router.get("/categoria/criar", CategoryController.CreateCategoryPage);
// PEDIDO
router.get("/pedidos", OrderController.listOrderPage);
router.get("/pedido/:id", OrderController.viewOrderPage);
router.get("/pedido/:id/editar", OrderController.EditOrderPage);
router.get("/pedido/criar", OrderController.CreateOrderPage);
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
