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

const saveData = async (userName) => {
  try {
    const user = new userModel({ userName });
    await user.save();
    console.log('Data saved successfully');
    return user;
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};


app.get("/search", async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();
    const data = await userModel.find({ userName: query });
    res.json(data.length ? data : "No results found");
  } catch (error) {
    res.status(500).json({ error: "Error searching items", message: error.message });
  }
});


app.post("/add", async (req, res) => {
  const newItem = req.body.userName;
  try {
    const savedUser = await saveData(newItem);
    res.json({ message: "Item added successfully", user: savedUser });
  } catch (error) {
    res.status(500).json({ error: "Error adding item", message: error.message });
  }
});


app.put("/update", async (req, res) => {
  const { oldItem, newItem } = req.body;
  try {

    const updatedUser = await userModel.findOneAndUpdate(
      { userName: oldItem },
      { userName: newItem },
      { new: true }
    );

    if (updatedUser) {
      res.json({ message: "Item updated successfully", user: updatedUser });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating item", message: error.message });
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