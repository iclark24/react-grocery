import React from 'react'

const Grocery = ({ id, name, complete, groceryClick}) => (
  <h3 class="item"
    style={complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
    onClick={ () => groceryClick(id) }
  >
  { name }
  </h3>
)

const styles = {
  grocery: {cursor: "pointer", color:"red"},
  complete: {color:"green", textDecoration: "line-through", opacity:".3"}
}

export default Grocery