const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:joao123@todolist.jxksbdj.mongodb.net/?retryWrites=true&w=majority",
    )
    .then(() => {
      console.log("MongoDB Atlas CONECTADO");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
