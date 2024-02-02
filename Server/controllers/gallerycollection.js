import { galleryModle, cetorgryModel } from "../model/gallerymodel.js";
class galleryController {
  static uploadImage = async (req, res) => {
    try {
      const { category } = req.body;
      if (category) {
        const addImage = await galleryModle({
          name: req.file.filename,
          category: category,
        });
        const result = addImage.save();
        if (result) {
          return res.status(200).json({ message: "Image add Sucessfully" });
        } else {
          res.status(400).json({ message: "Image Not add Sucessfully" });
        }
      } else {
        res.status(400).json({ message: "all field is required" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  static addCategory = async (req, res) => {
    try {
      const { name } = req.body;
      if (name) {
        const doc = await cetorgryModel({
          name: name,
        });
        const result = await doc.save();
        if (result) {
          return res.status(200).json({ message: "Category add sucessfully" });
        } else {
          res.status(500).json({ message: "Category not add sucessfully" });
        }
      } else {
        res.status(400).json({ message: "Category not be empty" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  static getAllCategory = async (req, res) => {
    try {
      const getCategory = await cetorgryModel.find();
      if (getCategory) {
        return res.status(200).json(getCategory);
      } else {
        return res.status(400).json({ message: "category not find" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static getAllImage = async (req, res) => {
    try {
      const getImage = await galleryModle.find();
      if (getImage) {
        return res.status(200).json(getImage);
      } else {
        return res.status(400).json({ message: "Image not find" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static getSingleImage = async (req, res) => {
    try {
      const { category } = req.query;
      if (category) {
        const getImgByCategory = await galleryModle.find({ category:category });
        console.log(getImgByCategory)
        return res.status(200).json(getImgByCategory);
      } else {
        return res.status(400).json({ message: "Image not find" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default galleryController;
