import { useState } from "react";
import axios from "axios";

const UpdateEntry = () => {
  const [oldItem, setOldItem] = useState("");
  const [newItem, setNewItem] = useState("");

  const updateItem = () => {
    axios
      .put("https://web3brige-test-backend.vercel.app/update", {
        oldItem,
        newItem,
      })
      .then((response) => alert(response.data.message))
      .catch((error) =>
        console.error("There was an error updating the item!", error)
      );
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-2xl mb-2">Update Entry</h2>
      <input
        type="text"
        value={oldItem}
        onChange={(e) => setOldItem(e.target.value)}
        placeholder="Old item"
        className="border p-2 rounded-lg w-full mb-2"
      />
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
        className="border p-2 rounded-lg w-full mb-2"
      />
      <button
        onClick={updateItem}
        className="bg-green-500 text-white p-2 rounded-lg w-full">
        Update
      </button>
    </div>
  );
};

export default UpdateEntry;
