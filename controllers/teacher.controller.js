import teacher from "../models/teacher.model.js";
// crud

// get allllll teachers

export const getAllTeachers = async (req, res, next) => {
  try {
    let teachers = await teacher.find();
    return res.status(200).json(teachers);
  } catch (error) {
    next(error);
  }
};

// create teacher
export const createTeacher = async (req, res, next) => {
  try {
    let { fullname, email, password, image } = req.body;
    let newteacher = await teacher.create({ fullname, email, password, image });
    return res.status(201).json({
      message: "teacher created successfully",
      newteacher,
    });
  } catch (error) {
    next(error);
  }
};

// get teaher by id
export const getTeacherById = async (req, res, next) => {
  try {
    let id = req.params.id;
    let _teacher = await teacher.findById(id);
    return res.status(200).json(_teacher);
  } catch (error) {
    next(error);
  }
};

// update teacheeeeeer
export const updateTeacher = async (req, res, next) => {
  try {
    let id = req.params.id;
    let update_teacher = await teacher.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    return res.status(200).json(update_teacher);
  } catch (error) {
    next(error);
  }
};

// delete teacher
export const deleteTeacher = async (req, res, next) => {
  try {
    let delete_teacher = await teacher.deleteOne({ _id: req.params.id });
    if (!delete_teacher) {
      return console.log("User not found");
    }
    return res.status(200).json({ success: true, msg: delete_teacher });
  } catch (error) {
    next(error);
  }
};
