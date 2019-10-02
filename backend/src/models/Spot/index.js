const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String
    },
    company: {
      type: String
    },
    price: {
      type: Number
    },
    techs: {
      type: [String]
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: { virtuals: true }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3500/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
