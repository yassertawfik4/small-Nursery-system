import Child from "../models/child.model.js";

export const getAllChildren = async (req, res, next) => {
  try {
    let children = await Child.find();
    return res.status(200).json(children);
  } catch (error) {
    next(error);
  }
};

export const createChildren = async (req, res, next) => {
  try {
    let { _id, fullname, age, level, address } = req.body;

    let newChild = await Child.create({
      _id,
      fullname,
      age,
      level,
      address,
    });
    return res.status(201).json({
      message: "child created successfully",
      newChild,
    });
  } catch (error) {
    next(error);
  }
};

export const getChildById = async (req, res, next) => {
  try {
    let id = req.params.id;
    let _child = await Child.findById(id);
    return res.status(200).json(_child);
  } catch (error) {
    next(error);
  }
};

export const updateChild = async (req, res, next) => {
  try {
    let id = req.params.id;
    let update_child = await Child.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    return res.status(200).json(update_child);
  } catch (error) {
    next(error);
  }
};

export const deleteChild = async (req, res, next) => {
  try {
    let delete_Child = await Child.deleteOne({ _id: req.params.id });
    if (!delete_Child) {
      return console.log("User not found");
    }
    return res.status(200).json({ success: true, msg: delete_Child });
  } catch (error) {
    next(error);
  }
};
