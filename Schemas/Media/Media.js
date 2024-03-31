import mongoose from "mongoose";
import bcrypt from "bcrypt";

const mediaModel = new mongoose.Schema({
  imageUrl: {
    file_public_id: { type: String },
    file_secure_url: { type: String },
  },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
  saves: { type: Number, default: 0 },
  mediaType: { type: String, required: true },
  width: { type: String },
  height: { type: String },
  tags: [{ type: String, required: true }],
  description: {
    type: String,
    required: true,
  },
  aiGenerated: { type: Boolean, required: true },
  comments: [
    {
      text: { type: String },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "userschema" },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "userschema" },
  createdAt: { type: Date, default: Date.now },
});

const Media =
  mongoose.models.mediaSchema || mongoose.model("mediaSchema", mediaModel);

export default Media;
