const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Recipe = require("./Recipe");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  myRecipes: [
    {
      type: mongoose.Types.ObjectId,
      ref: Recipe,
    },
  ],
});

userSchema.virtual("rePassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Passwords don't match!");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
