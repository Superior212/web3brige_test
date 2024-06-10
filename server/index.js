const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const getData = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

const saveData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

app.get("/search", (req, res) => {
  const query = req.query.q.toLowerCase();
  const data = getData();
  const results = data.filter((item) => item.toLowerCase().includes(query));
  res.json(results.length ? results : "No results found");
});

app.post("/add", (req, res) => {
  const newItem = req.body.item;
  const data = getData();
  data.push(newItem);
  saveData(data);
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
