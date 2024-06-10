import axios from "axios";
import { useState } from "react";

const AddEntry = () => {
  const [item, setItem] = useState("");

  const addItem = () => {
    axios
      .post("http://localhost:8000/add", { userName: item })
      .then((response) => alert(response.data.message))
      .catch((error) =>
        console.error("There was an error adding the item!", error)
      );
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-2xl mb-2">Add Entry</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add item"
        className="border p-2 rounded-lg w-full mb-2"
      />
      <button
        onClick={addItem}
        className="bg-blue-500 text-white p-2 rounded-lg w-full">
        Add
      </button>
    </div>
  );
};

export default AddEntry;
