import { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    axios
      .get(`http://localhost:8000/search?q=${query}`)
      .then((response) => setResults(response.data))
      .catch((error) => console.error("There was an error searching!", error));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-2xl mb-2">Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="border p-2 rounded-lg w-full mb-2"
      />
      <button
        onClick={search}
        className="bg-purple-500 text-white p-2 rounded-lg w-full mb-2">
        Search
      </button>
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
