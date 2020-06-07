import React from "react";

//component
import Form from "./component/Form";
import People from "./component/People";
import OrangBaru from "./component/NewestPerson";

function App() {
  const [people, setPeople] = React.useState([
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Prilly",
      lastName: "Latuconsina",
    },
  ]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPerson={addPerson} />
        <People people={people} />
        <OrangBaru orangBaru={people[people.length - 1]} />
      </div>
    </div>
  );
}

export default App;
