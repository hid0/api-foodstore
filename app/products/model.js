const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, "Nama makanan minimal 3 karakter"],
      maxlength: [255, "Nama makanan maksimal 255 karakter"],
      required: [true, "Nama Produk harus diisi!!!"],
    },
    description: {
      type: String,
      maxlength: [1000, "Deskripsi maksimal 1000 karakter"],
    },
    price: {
      type: Number,
      default: 0,
    },
    image_url: String,
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
