import AddEntry from "./components/AddEntry";
import Search from "./components/Search";
import UpdateEntry from "./components/UpdateEntry";

const App = () => {
  return (
    <div>
      <h1>Basic Search Platform</h1>
      <AddEntry />
      <UpdateEntry />
      <Search />
    </div>
  );
};

export default App;
