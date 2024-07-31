import axios from "axios";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const AddEntry = () => {
  const [item, setItem] = useState("");
  const { toast } = useToast();

  const addItem = () => {
    axios
      .post("https://web3brige-test-backend.vercel.app/add", { userName: item })
      .then((response) => {
        toast({
          title: "Success",
          description: response.data.message,
          variant: "success" as "default" | "destructive" | null | undefined,
        });
        setItem("");
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
    <div className="bg-background rounded-lg shadow-lg p-4">
      <div>
        <h3 className="text-lg font-bold mb-4">Add New Entry</h3>
        <Input
          type="text"
          placeholder="Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full mb-4"
        />
        <Button className="bg-gray-700 text-white w-full" onClick={addItem}>
          Add Entry
        </Button>
      </div>
    </div>
  );
};

export default AddEntry;
