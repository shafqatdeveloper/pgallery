import mongoose from "mongoose";
import bcrypt from "bcrypt";

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default:
      "https://res.cloudinary.com/daxuxn2ec/image/upload/v1688890416/PngItem_1300321_e7rn7n.png",
  },
  passwordResetToken: String,
  passwordResetExpires: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

user.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

user.methods.comparePass = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

const User = mongoose.models.userschema || mongoose.model("userschema", user);

export default User;
