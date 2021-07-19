import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SearchPokeByName from "./ByName/GetInfo";
import GetPokeByType from "./byType/getInfo";
import "../styles/main.css";

export function Main () {
    return (
    <div className="container-card">
       <div className="container_2 bg2">
            <div className="container_3">
                <div className="title">
                      <div className="logo">

                      </div>
                </div>
                <div className="btn-section">
                    <button className="button-options btn btn-danger">
                        <Link to="/pokedex/type" className="button-options__text">
                            Type
                        </Link>
                    </button>

                    <button className="button-options btn btn-danger">
                        <Link to="/pokedex/name" className="button-options__text">
                            Name
                        </Link>
                    </button>
                </div>    
                <Switch>
                    <Route path="/pokedex/name" component={SearchPokeByName}  />
                    <Route path="/pokedex/type" component={GetPokeByType} />
                </Switch>
            </div> 
        </div> 
    </div>        
    )
}