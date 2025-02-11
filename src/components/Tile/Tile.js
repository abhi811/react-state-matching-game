import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const color = (props.selected === true || props.matched === true) ? { backgroundColor: props.color } : null;
  return (
    <div className='Tile' style={color} onClick={() => props.handleTileClicked(props.id, props.color)}>
      {(props.selected === true || props.matched === true) ? <props.svg /> : null }
    </div>
  )
}

export default Tile
