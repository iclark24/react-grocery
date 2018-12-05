import React, { Component } from 'react';
import List from './List'
import GForm from './GForm'
import './App.css';


class App extends Component {
  state = { groceries: []  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  handleClick = (id) => {
    const {groceries} = this.state
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  addItem = (name) => {
    const { groceries } = this.state
    const grocery = {name, id: this.getUniqId() , complete: false }
    this.setState({ groceries: [grocery, ...groceries] })
    }

  render() {
    const{ groceries } = this.state

    return (
      <div class="App">
        <GForm addItem={this.addItem}/>
        <List name="Grocery List" items={groceries} groceryClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
