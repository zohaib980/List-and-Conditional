import React, { Component } from "react";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "Zohaib", age: 24 },
      {id: 2, name: "Yasir", age: 23 },
      {id: 3, name: "Ayaz", age: 22 },
    ],
    otherState: "some other value",
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons });
  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  };

  render() {
    let persons = null;

    if ( this.state.showPersons) {
      persons = (
        <div>
        { this.state.persons.map((person, index) => {
          return <Person
            click = { () => this.deletePersonsHandler(index)}
            name={person.name}
            age={person.age} 
            key= {person.id}
            changed= {(event) => this.nameChangedHandler(event, person)}
            />
        })}
      </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className="btn" onClick={this.togglePersonsHandler}>Switch Name</button>
         {persons}
      </div>
    );
    {
      /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); */
    }
  }
}

export default App;
