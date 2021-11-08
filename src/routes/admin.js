const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const upload = require('../middlewares/upload')
const acessLevel = require("../middlewares/acessLevel");
const AdminController = require("../controllers/AdminController");
const OrderController = require("../controllers/OrderController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const ManufacturerController = require("../controllers/ManufacturerController");

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
router.get("/usuarios/:id", UserController.viewUserPage);
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

//FABRICANTES
router.get("/fabricantes", ManufacturerController.listManufacturerPage);
router.get("/fabricantes/criar", ManufacturerController.createManufacturerPage);
router.get(
  "/fabricantes/editar/:id",
  ManufacturerController.editManufacturerPage
);
router.get("/fabricantes/:id", ManufacturerController.viewManufacturerPage);

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
router.post("/produto/",upload.single('imagem_destacada'), ProductController.createProduct);
router.put("/produto/:id",upload.single('imagem_destacada'), ProductController.editProduct);
router.delete("/produto/:id", ProductController.deleteProduct);
//CATEGORIA
router.post("/categoria/", CategoryController.createCategory);
router.put("/categoria/:id", CategoryController.editCategory);
router.delete("/categoria/:id", CategoryController.deleteCategory);

//CATEGORIA
router.post("/fabricante/", ManufacturerController.createManufacturer);
router.put("/fabricante/:id", ManufacturerController.editManufacturer);
router.delete("/fabricante/:id", ManufacturerController.deleteManufacturer);
//PEDIDO
router.post("/pedido/", OrderController.createOrder);
router.put("/pedido/:id", OrderController.editOrder);
router.delete("/pedido/:id", OrderController.deleteOrder);

module.exports = router;
