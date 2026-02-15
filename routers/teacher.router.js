import { Router } from "express";

import {
  getAllTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controller.js";

const router = Router();

router.get("/", getAllTeachers);
router.get("/:id", getTeacherById);
router.post("/", createTeacher);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);
export default router;
