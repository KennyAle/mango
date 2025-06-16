import { Router } from "express";
import { ProductService } from "../../../application/service/product.service";
import productRepository from "../../../infrastructure/repositories/product.repository";
import { createProductController } from "../controllers/product.controller";

const productRouter = Router()

const productService = new ProductService(productRepository);
const productController = createProductController(productService);

productRouter.get('/', productController.getAllProducts) // ok
productRouter.post('/', productController.addProduct) // ok
productRouter.put('/:productId', productController.editProduct) // ok
productRouter.delete('/:productId', productController.deleteProduct) // ok
productRouter.get('/category/:categoryId', productController.getProductsByCategoryId) // ok http://localhost:3000/product/category/5
productRouter.get('/search/:productName', productController.getProductByName) // ok http://localhost:3000/product/search/Calvin Klein CK One
productRouter.get('/:productId', productController.getProductById) // ok http://localhost:3000/product/1

export default productRouter

