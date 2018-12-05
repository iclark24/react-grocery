import React from 'react'
import Grocery from './Grocery'

const List = ({items, name, groceryClick}) => (
  <div>
    <h1>{name}</h1>
      { items.map( item => <Grocery key={item.id} {...item} groceryClick={groceryClick}/>)}
  </div>
)












export default List;