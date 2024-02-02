import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
});


const cetorgryModel = mongoose.model("category", categorySchema);

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  }
});
const galleryModle = mongoose.model("gallery", gallerySchema);

export { cetorgryModel, galleryModle };
