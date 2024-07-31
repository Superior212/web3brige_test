import { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import { Input } from "./ui/input";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    axios
      .get(`https://web3brige-test-backend.vercel.app/search?q=${query}`)
      .then((response) => setResults(response.data))
      .catch((error) => console.error("There was an error searching!", error));
  };

  return (
    <div className="md:col-span-1 bg-background rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4">Search</h2>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-4"
      />
      <button
        onClick={search}
        className="bg-purple-500 text-white p-2 rounded-lg w-full mb-2">
        Search
      </button>
      {results.length > 0 && <SearchResults results={results} />}
    </div>
  );
};

export default Search;
