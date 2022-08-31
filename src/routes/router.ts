import { Router } from "express";
import * as idController from "../controllers/idController"

const router:Router = Router();

router.get("/check/:id", idController.returnId);

export default router;