import React, { useState , useEffect } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  
  const { character , homeworld } = props
  const [showPlanet , setShowPlanet] = useState(false)

  const togglePlanet = () => {
    setShowPlanet(!showPlanet)
  }

  
  return (
  <div>
<h3 className = 'character-name' onClick = {togglePlanet}>
    {character.name}
  </h3>
  { showPlanet && (( 
  <p>Planet: <span className = 'character-planet'> {homeworld.name} </span>
  
  </p>
  ))}
  </div>
  
  )
}
export default Character
