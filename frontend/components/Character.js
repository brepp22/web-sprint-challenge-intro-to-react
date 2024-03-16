import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  
  const { character , planet } = props
  const [showPlanet , setShowPlanet] = useState(false)

  const togglePlanet = () => {
    setShowPlanet(!showPlanet)
  }

  
  return (
  
    <div className = 'character-card' onClick = {togglePlanet}> 
<h3 className = 'character-name' >
    {character.name}
  </h3>
  { showPlanet && (( 
  <p>Planet: <span className='character-planet'>{planet.name}</span> 
  </p> 
  
  ))}
 
  </div>
  )
}
export default Character
