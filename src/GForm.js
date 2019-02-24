import React from 'react'
import { Form, Segment } from "semantic-ui-react";


class GForm extends React.Component{
  state = { 
    name: '',
    department: "",
  }

  options = [
    { key: '1', text: 'Produce', value: 'produce' },
    { key: '2', text: 'Dairy/Eggs', value: 'dairy' },
    { key: '3', text: 'Meat', value: 'meat' },
    { key: '4', text: 'Breads', value: 'breads' },
    { key: '5', text: 'Other', value: 'other' },

  ]

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name, this.state.department)
    this.setState({name:'', department:""})
  }
  render() {
    const { name, department } = this.state
    return (
      <Segment>
        <Form>
          <Form.Group widths="equal">
          <Form.Input
          value={name}
          name="name"
          onChange={this.handleChange} 
          required 
          placeholder="Add An Item" />
          <Form.Select
          options={this.options}
          value={department}
          name="department"
          onChange={this.handleChange} 
          required 
          placeholder="Department" />
          </Form.Group>
          <Form.Button onClick={this.handleSubmit} color="green">Submit</Form.Button>
        </Form>
      </Segment>
    )
  }
}




export default GForm