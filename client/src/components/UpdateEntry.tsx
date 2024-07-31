import { useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
    <div className="md:col-span-1 bg-background rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4">Update Entry</h2>
      <Input
        type="text"
        value={oldItem}
        onChange={(e) => setOldItem(e.target.value)}
        placeholder="Old item"
        className="border p-2 rounded-lg w-full mb-2"
      />
      <Input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
        className="border p-2 rounded-lg w-full mb-2"
      />
      <Button
        onClick={updateItem}
        className="bg-green-500 text-white p-2 rounded-lg w-full">
        Update
      </Button>
    </div>
  );
};

export default UpdateEntry;
