import React from 'react';
import './StarWars.css'

const CardInfo = (props) => {
    console.log(props);
    return(
      <div className="card_container">  
         <h2>Name:{props.info_passed.name}</h2>
         <ul>
             <li>Height: {props.info_passed.height}</li>
             <li>Mass:{props.info_passed.mass}</li>
             <li>Hair Color:{props.info_passed.hair_color}</li>
             <li>Skin Color:{props.info_passed.skin_color}</li>
             <li>Eye Color:{props.info_passed.eye_color}</li>
             <li>Birth's Year: {props.info_passed.birth_year}</li>
             <li>Gender: {props.info_passed.gender}</li> 
         </ul>    
      </div>
    )
}

export default CardInfo;