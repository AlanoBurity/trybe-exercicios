import React from "react";
import Pokemon from "./Pokemon";
import './Data';
import pokemons from "./Data";

class Pokedex extends React.Component {
    render(){
        return(
            <div>
               <img className="dexImg" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex"/>
               <section>
                {
                 pokemons.map((pokemon) => (<Pokemon 
                    name={ pokemon.name }
                    type={ pokemon.type}
                    image={ pokemon.image }
                 />) )
                   
                }
               </section>
            </div>
        );
    }
}

export default Pokedex;