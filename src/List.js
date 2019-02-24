import React from 'react'
import Grocery from './Grocery'
import { Header, Segment, Grid } from "semantic-ui-react";


const renderitems = (items, department, groceryClick) => {
  return(items.map( item => { 
    if(item.department === department) {
      return(<Grocery key={item.id} {...item} groceryClick={groceryClick}/>)
    }
    else{
      return(null)
    }
  }))

}


const List = ({items, groceryClick}) => (
  <>
    <Header as="h1">Grocery List</Header>
    <Grid columns="3">

      <Grid.Column>
        <Segment>
          <Header>
            Produce
          </Header>
          {renderitems(items, "produce", groceryClick)}
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Header>
            Dairy/Eggs
          </Header>
          {renderitems(items, "dairy", groceryClick)}
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Header>
            Meat
          </Header>
          {renderitems(items, "meat", groceryClick)}
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Header>
            Breads
          </Header>
          {renderitems(items, "breads", groceryClick)}
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Header>
            Other
          </Header>
          {renderitems(items, "other", groceryClick)}
        </Segment>
      </Grid.Column>

    </Grid>
  </>
)


export default List;