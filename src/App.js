import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <div className="App">
        <PersonCard lastName={"Doe"} firstName={"Jane"}
          PersonCard age={45}
          PersonCard hairColor={"Black"} />
        <PersonCard lastName={"Smith"} firstName={"John"}
          PersonCard age={88}
          PersonCard hairColor={"Brown"} />
        <PersonCard lastName={"Fillmore"} firstName={"Millard"}
          PersonCard age={50}
          PersonCard hairColor={"Brown"} />
        <PersonCard lastName={"Smith"} firstName={"Maria"}
          PersonCard age={62}
          PersonCard hairColor={"Brown"} />
      </div>
    </>
  );
}

export default App;
