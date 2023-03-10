const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Please provide a description for this service!"],
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide price!"],
      min: [0, "Price can't be negative"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);

// {"_id":{"$oid":"63e3e9af49061a4a82a9e2ef"},"name":"Bungee Jump","price":"99","imgURL":"https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg","desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"}

// {"_id":{"$oid":"63e3e9ff49061a4a82a9e2f0"},"name":"Kayaking","price":"777","imgURL":"https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg","desc":"asgdhasgdjasgdkjasgdas"}

// {"_id":{"$oid":"63e3eac649061a4a82a9e2f2"},"name":"Traveling","price":"84","imgURL":"https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg","desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>\n<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!"}
