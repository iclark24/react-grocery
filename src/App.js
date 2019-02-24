import React, { Component } from 'react';
import List from './List'
import GForm from './GForm'
import './App.css';
import { Container, } from "semantic-ui-react";

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

  addItem = (name, department) => {
    const { groceries } = this.state
    const grocery = {name, department, id: this.getUniqId() , complete: false }
    this.setState({ groceries: [grocery, ...groceries] })
    }

  render() {
    const{ groceries } = this.state

    return (
      <Container style={{ paddingTop:"25px"}} textAlign="center">
        <GForm addItem={this.addItem}/>
        <List items={groceries} groceryClick={this.handleClick} />
      </Container>
    );
  }
}

export default App;
