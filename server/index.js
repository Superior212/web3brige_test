const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;
const URI = process.env.URI;
const mongoose = require('mongoose')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
})

const userModel = mongoose.model("User", userSchema)

const getData = () => {

  return JSON.parse(data);
};

const saveData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

app.get("/search", (req, res) => {
  const query = req.query.q.toLowerCase();
  // const data = getData();
  // const results = data.filter((item) => item.toLowerCase().includes(query));
  const data = userModel.find({ userName: query });
  res.json(results.length ? data : "No results found");
});

app.post("/add", (req, res) => {
  const newItem = req.body.item;
  userModel.save({ userName: newItem })
  console.log(newItem);
  res.json({ message: "Item added successfully" });
});

app.put("/update", (req, res) => {
  const { oldItem, newItem } = req.body;
  let data = getData();
  const index = data.indexOf(oldItem);
  if (index !== -1) {
    data[index] = newItem;
    saveData(data);
    res.json({ message: "Item updated successfully" });
  } else {
    res.json({ message: "Item not found" });
  }
});



mongoose.connect(URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`connected to database & Server is running on port: ${port}`);
    })
  })
  .catch((error) => {
    console.log(error);
  })