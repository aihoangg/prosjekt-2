const { model, Schema } = require("mongoose");
const postSchema = new Schema({
  id: String,
  name: String,
  image: String,
});

module.exports = model("Post", postSchema);
