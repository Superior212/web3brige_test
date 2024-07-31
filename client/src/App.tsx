import AddEntry from "./components/AddEntry";
import Search from "./components/Search";

import UpdateEntry from "./components/UpdateEntry";

const App = () => {
  return (
    <div className="flex flex-col h-[30vh]">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Database Application</h1>
      </header>
      <div className="flex-1 grid grid-cols-1 my-20 md:grid-cols-3 gap-4 p-4">
        <Search />
        <AddEntry />
        <UpdateEntry />
      </div>
    </div>
  );
};

export default App;
