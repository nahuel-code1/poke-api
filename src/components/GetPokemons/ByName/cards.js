import React from 'react';
import "/Users/nahue/OneDrive/Escritorio/React #5App/poke-api/src/components/styles/main.css";
import CardWithMoreStats from "../ByName/moreStats"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

export default function CardPokeName ({data}) {

    let { url } = useRouteMatch();

    let {name, types, stats, sprites, id} = data;

   const PokemonType = () => {
       return (
        <>
        <p>{types[0].type.name}</p>
        </>
       );
   } 

   const PokemonTypes = () => {
       return (
        <>
        {types.map((element, index) => {
            return (
                <>
                <p key={element.type.name + index} >{element.type.name}</p>
                </>
            );
        })}
        </>
       );
   }

    return (
                <div className="container-screen_1 d-flex flex-column">
                    <div className="container-screen_2 d-flex">
                        <div className="container-screen_3">
                            <div className="d-flex align-items-center flex-column">
                                <img src={sprites.front_default} alt={name} />
                                <h5>{name}</h5>
                            </div>

                            <div className="d-flex justify-content-around">
                                <div>
                                    <p>Type: </p>
                                    {types.length < 2 ? <PokemonType /> : <PokemonTypes />}
                                    <p>HP: {stats[0].base_stat}</p>
                                </div>
                            
                                <div>
                                    <p>Attack: {stats[1].base_stat}</p>
                                    <p>Defense: {stats[2].base_stat}</p>
                                    <p>Spd: {stats[5].base_stat}</p>
                                </div>
                            </div>
                        </div>

                        <Switch>
                            <Route path="/pokedex/name/:id" component={CardWithMoreStats}  />
                        </Switch>
                    </div>
                  
                    <div className="button-section bg d-flex">
                        <button className="button-options">
                            <Link to={`${url}/${id}`}>Stats</Link>
                        </button>

                        <button className="button-options">
                            <Link to={`${url}/${id}/encounters`}> Encounters </Link>
                        </button>

                        <button className="button-options">
                            <Link to="/pokedex"> Reset </Link>
                        </button>
                    </div>
  
                </div>
    );
}
