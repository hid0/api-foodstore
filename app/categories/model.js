const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = Schema({
  name: {
    type: String,
    minLength: [3, "char min 3"],
    maxLength: [20, "char max 20"],
    required: [true, "is required"],
  },
});

module.exports = model("Category", categorySchema);
