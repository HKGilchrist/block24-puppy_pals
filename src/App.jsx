import {useState} from 'react'
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [puppy, setPuppy] = useState(null)

  function handleClick(puppyID) {
    const featuredPup = puppies.find((pup)=> pup.id ===  puppyID)
    setPuppy(featuredPup)
    console.log(featuredPup)
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{handleClick(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
      
        );
      })}
      { puppy && 
         <div>
         <h2>{puppy.name}</h2>
         <ul>
           <li>Age: {puppy.age}</li>
           <li>Email: {puppy.email}</li>
         </ul>
       </div>
      } 
    </div>
  );
}

export default App
