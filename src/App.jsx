import { useState } from "react";
import people from "./data.js";

import Person from "./Person.jsx";

const App = () => {
  const [list, setList] = useState(people);

  const clearList = () => {
    setList([]);
  };

  return (
    <main>
      <div className="container">
        <h3>{list.length} birthdays today</h3>
        <div className="list">
          {list.map((person) => {
            return <Person key={person.id} {...person} />;
          })}
        </div>
        <button
          type="button"
          className="btn"
          onClick={clearList}
          style={{ width: "100%" }}
        >
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
