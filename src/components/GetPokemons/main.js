import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SearchPokeByName from "./ByName/GetInfo";
import GetPokeByType from "./byType/getInfo";
import "../styles/main.css";

export function Main () {
    return (
        <div className="contenedor">
            <div className="container-search">
                <div className="container-search-screen">
                    <div className="container-search-screen_1">
                       
                    </div>
                </div>
               
                <div className="d-flex">
                    <button className="button-options">
                        <Link to="/pokedex/type">
                            Type
                        </Link>
                    </button>

                    <button className="button-options">
                        <Link to="/pokedex/name">
                            Name
                        </Link>
                    </button>
                </div>
            </div>

            <div className="estructure">
                <div className="estructure_1">

                </div>
                <div className="estructure_2">
                    
                </div>
            </div>

            <div className="container-screen">
              
            </div>
        </div>
    )
}
