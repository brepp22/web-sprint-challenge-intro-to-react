import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [people, setPeople] = useState([])
  const [homeworld, setPlanet] = useState([])
 
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state



  useEffect(() => {
    const getData = async () => {
      try {
        const [peopleResponse, planetResponse] = 
        await Promise.all([axios.get(urlPeople),
        axios.get(urlPlanets)
      ])
        setPeople(peopleResponse.data)
        setPlanet(planetResponse.data)
        console.log(planetResponse.data, peopleResponse.data)
    } catch (error) {
      console.error(err.message)
    }
  }

  getData()


}, []);

  return (
    <div>
      
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      

      {people.map((character, index) => (
      <div className='character-card' key={character.id}>
        <Character key={character.id} character={character} homeworld ={homeworld.find(hw => hw.id === character.homeworld)} />
      </div>
    ))}
        
       
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      </div>
  )
  
  }


export default App
 
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
