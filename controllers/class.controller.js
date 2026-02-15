import Class from "../models/class.model.js";

// get all classes
export const getAllClasses = async (req, res, next) => {
  try {
    let classes = await Class.find();
    return res.status(200).json(classes);
  } catch (error) {
    next(error);
  }
};

// create class
export const createClass = async (req, res, next) => {
  try {
    let { _id, name, supervisor, children } = req.body;
    let newClass = await Class.create({ _id, name, supervisor, children });
    return res.status(201).json({
      message: "class created successfully",
      newClass,
    });
  } catch (error) {
    next(error);
  }
};

// get class by id
export const getClassById = async (req, res, next) => {
  try {
    let id = req.params.id;
    let _class = await Class.findById(id);
    return res.status(200).json(_class);
  } catch (error) {
    next(error);
  }
};

// update class
export const updateClass = async (req, res, next) => {
  try {
    let id = req.params.id;
    let update_class = await Class.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    return res.status(200).json(update_class);
  } catch (error) {
    next(error);
  }
};

// delete class
export const deleteClass = async (req, res, next) => {
  try {
    let id = req.params.id;
    let delete_class = await Class.findByIdAndDelete(id);
    return res.status(200).json(delete_class);
  } catch (error) {
    next(error);
  }
};

// get class children
export const getClassChildren = async (req, res, next) => {
  try {
    let id = req.params.id;
    let _class = await Class.findById(id).populate("children");
    return res.status(200).json(_class.children);
  } catch (error) {
    next(error);
  }
};

// get class teacher
export const getClassTeacher = async (req, res, next) => {
  try {
    let id = req.params.id;
    let _class = await Class.findById(id).populate("supervisor");
    return res.status(200).json(_class.supervisor);
  } catch (error) {
    next(error);
  }
};
