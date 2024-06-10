import { User } from "../Model";

const SearchResults = ({ results }: { results: User[] }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {Array.isArray(results) ? (
          results.map((result) => <li key={result._id}>{result.userName}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
