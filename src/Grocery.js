import React from 'react'
import { Icon, Segment, Header, Grid } from "semantic-ui-react";


const Grocery = ({ id, name, complete, groceryClick}) => (
  <Segment style={{cursor: "pointer"}} color={complete ? block.complete : block.grocery }>

    <Header className="item" onClick={ () => groceryClick(id) }>
      <Grid columns="2">
        <Grid.Column width="1">
          <Icon size="large"
            name={complete ? icon.complete : icon.grocery }
            color={complete ? block.complete : block.grocery }
            />
        </Grid.Column>
        <Grid.Column width="14" textAlign="center">
          { name }
        </Grid.Column>
      </Grid>
    </Header>
  </Segment>
)

const icon = {
  grocery: "circle outline",
  complete: "check circle outline"
}

const block = {
  grocery: "red",
  complete: "green"
}

export default Grocery