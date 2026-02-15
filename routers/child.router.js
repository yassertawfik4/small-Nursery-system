import { Router } from "express";
import {
  getAllChildren,
  createChildren,
  getChildById,
  deleteChild,
  updateChild,
} from "../controllers/child.controller.js";

const router = Router();

router.get("/", getAllChildren);
router.post("/", createChildren);
router.get("/:id", getChildById);
router.put("/:id", updateChild);
router.delete("/:id", deleteChild);
export default router;
