import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface Props {
  people: {
    name: string;
    age: number;
    url: string;
    email?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Props["people"]>([]);

  const setThm = (): void => {
    let arr: Props["people"] = [];
    for (let x = 0; x < 1; x++) {
      arr.push({
        name: `Judy D. Nunez`,
        age: 25,
        url: `https://source.unsplash.com/50${x}x50${x}/?face`,
        email: `JudyDNunez@gmail.com`,
      });
    }
    setPeople(arr);
  };

  useEffect(() => {
    setThm();
  }, []);

  return (
    <div className="App">
      <h1>People Invited to the party</h1>
      {people.map((person, index): JSX.Element => {
        return <List key={index} person={person} />;
      })}
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
