import { Router } from "express";
import { methods as productControllers } from "../controllers/product.controller";


const router = Router();

// http://127.0.0.1:3000/api-restful-ag/books

router.get("/", productControllers.getBooks);  //GET http://localhost:5000/api-restfull/products/
router.get("/:id",productControllers.getBook);
router.post("/",productControllers.createBook);
router.put("/:id", productControllers.updateBook);
router.delete("/:id", productControllers.deleteBook);

export default router;