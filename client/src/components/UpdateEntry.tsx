import { useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const UpdateEntry = () => {
  const [oldItem, setOldItem] = useState("");
  const [newItem, setNewItem] = useState("");

  const updateItem = () => {
    axios
      .put("https://web3brige-test-backend.vercel.app/update", {
        oldItem,
        newItem,
      })
      .then((response) => {
        toast({
          title: "Success",
          description: response.data.message,
          variant: "success" as "default" | "destructive" | null | undefined,
        });
        setOldItem("");
        setNewItem("");
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "There was an error adding the item!",
          variant: "error" as "default" | "destructive" | null | undefined,
        });
      });
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
