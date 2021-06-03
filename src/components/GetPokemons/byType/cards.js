import React, { useEffect, useState } from 'react';
import axios from "axios";
import MoreStatsByType from "../byType/moreStats";
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

export default function CardsPokeByType({data}) {
    // let { url } = useRouteMatch();
    
    let [ dataTypes, setDataTypes ] = useState("");

    useEffect(()=> {
        if (data) {
            const getDataTypes = async () => {
                let response = await axios.get(`${data}`);
                setDataTypes(response.data);
            }
            getDataTypes();
        }
    }, [data])
    
    return (   
            <div className="poke-card">
                {dataTypes &&  
                    <div className="total">
                        <div className="img-type">
                            <img src={dataTypes.sprites.front_default} alt={dataTypes.name} />
                        </div>
                        
                        <div className="basic-stat">
                            <p>
                            {dataTypes.name}
                            </p>
                            <p>
                                HP: {dataTypes.stats[0].base_stat}
                            </p>
                            <p>
                                Attack: {dataTypes.stats[1].base_stat}
                            </p>
                            <p>
                                Defense: {dataTypes.stats[2].base_stat}
                            </p>
                            <p>
                                Speed: {dataTypes.stats[3].base_stat}
                            </p>
                            
                            <button>
                                <Link to={`/pokedex/type/${dataTypes.id}`}>Stats</Link>
                            </button>
                        </div>
       
                    </div> 
                }     
            </div>
    )
}