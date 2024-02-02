import express from "express";
import multer from "multer";
import galleryController from "../controllers/gallerycollection.js";
const routes = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}`;
    cb(null,uniqueSuffix+ "-" + file.originalname );
  },
});

const upload = multer({ storage: storage });

routes.post("/image", upload.single("image"), galleryController.uploadImage);

routes.post("/category", galleryController.addCategory);
routes.get("/category", galleryController.getAllCategory);
routes.get("/all/image", galleryController.getAllImage);
routes.get("/single/image", galleryController.getSingleImage);
export default routes;
