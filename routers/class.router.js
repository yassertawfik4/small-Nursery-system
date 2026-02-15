import { Router } from "express";
import {
  getAllClasses,
  createClass,
  getClassById,
  updateClass,
  deleteClass,
  getClassChildren,
  getClassTeacher,
} from "../controllers/class.controller.js";

const router = Router();

router.get("/", getAllClasses);
router.post("/", createClass);
router.get("/:id", getClassById);
router.put("/:id", updateClass);
router.delete("/:id", deleteClass);
router.get("/:id/classchildren", getClassChildren);
router.get("/:id/classteacher", getClassTeacher);

export default router;
