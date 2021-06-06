import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../ByName/moreStats.css"
import Encounters from "../ByName/encounters";
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

export default function MoreStatsByType () {
    let [moreStats, setMoreStats] = useState("");
    let [ moves, setMoves ] = useState([]);
    let [ initialPoke, setInitialPoke ] = useState(0);
    let [ ultimatePoke, setUltimatePoke ] = useState(4);
    let [ movesLength, setMovesLength ] = useState(5);
    
    let { path, url } = useRouteMatch();
    let { id } = useParams();

    useEffect(() => {
        const getMoreStats = async () => {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setMoreStats(response.data);
            setMoves(response.data.moves.slice(initialPoke, ultimatePoke));
            setMovesLength(response.data.moves.length);
        }
        getMoreStats();
    }, [id, initialPoke, ultimatePoke])
    

  const PokeStats = () => {
      let dataEncounters = moreStats.location_area_encounters;

    const AbilitesData = () => {
        return moreStats.abilities.map((element, index) => {
            return (
                <div key={element.ability.name + index} className="gf d-flex justify-content-center align-items-center">
                    <p className="border-stat">
                        {element.ability.name}
                    </p>
                </div>
            )
        })
    }

    const MovesData = () => {
        return moves.map((element, index) => {
            return (
                <div key={element.move.name + index} className="gf d-flex justify-content-center align-items-center">
                    <p className="border-stat">{element.move.name}</p>
                </div>
            );
        })
    }

    return (
        <div className="container-stats_1 bg">
        <div className="logo-container bg4 d-flex justify-content-between">
            <Link to="/pokedex/type">
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: "35px", color: "rgb(229, 57, 53)"}}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
            </Link>
            
            <div className="logo"></div>

            <Link to="/"> 
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: "35px", color: "rgb(229, 57, 53)"}}><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
            </Link>
        </div>

        <div className="d-flex justify-content-between">
            <div className="card-stat">
                <div className="bg4">
                    <p>
                        Order:
                    </p>
                </div>
                
                <div className="gf d-flex justify-content-center align-items-center">
                        <p className="border-stat">
                            #{moreStats.order}
                        </p>
                </div>
                
            </div>
           
            <div className="card-stat">
                <div className="bg4">
                    <p>
                        Weight:
                    </p>
                </div>
                
                    
                <div className="gf d-flex justify-content-center align-items-center">
                    <p className="border-stat">
                        {moreStats.weight}
                    </p>
                </div>
            </div>
            
            <div className="card-stat">
                <div className="bg4">
                    <p>
                        Height:
                    </p>
                </div>

                <div className="gf d-flex justify-content-center align-items-center">
                    <p className="border-stat">
                        0.{moreStats.height} m
                    </p>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center">
            <div className="abilities-container">
                <div className="bg4">
                    <p>Abilities:</p>
                </div>
            
                <AbilitesData />

            </div>
        </div>

        <div className="d-flex justify-content-center">
            <div className="abilities-container">
                <div className="bg4">
                    <p>Moves:</p>
                </div>
            
                <MovesData />
                <div className="d-flex justify-content-around">
                <button className="btn btn-outline-danger" onClick={() => {
                    if (initialPoke >= 4) {
                        setInitialPoke(initialPoke - 4);
                        setUltimatePoke(ultimatePoke - 4);
                    }
                }}>Previous</button>
                <button className="btn btn-outline-danger" onClick={() => {
                    if (initialPoke < movesLength) {
                        setInitialPoke(initialPoke + 4);
                        setUltimatePoke(ultimatePoke + 4);
                    }   
                }}>Next</button>
                </div>
            </div>
        </div>
        
        <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-light">
                <Link style={{color: "black"}} to={`${url}/encounters`}>Encounters</Link>
            </button>
        </div>
        
        

        <Switch>
            <Route path={`${path}/encounters`}>
                <Encounters urlEncounter={dataEncounters} />
            </Route>   
        </Switch> 
    </div>         
    
    )
  }  

    return (
        <div className="container-stats">
        { moreStats && <PokeStats /> }
        </div>
    )
}
