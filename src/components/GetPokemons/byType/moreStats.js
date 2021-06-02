import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Route, Switch, useParams, useRouteMatch } from 'react-router';

export default function MoreStatsByType () {
    let [moreStats, setMoreStats] = useState("");
    
    let { path } = useRouteMatch();

    let { id } = useParams();

    useEffect(() => {
        const getMoreStats = async () => {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setMoreStats(response.data);
        }
        getMoreStats();
    }, [id])
    

  const PokeStats = () => {
      let dataEncounters = moreStats.location_area_encounters;

    const AbilitesData = () => {
        return moreStats.abilities.map((element, index) => {
            return (
                    <p key={element.ability.name + index}>
                        {element.ability.name}
                    </p>
            )
        })
    }

    return (
        <div className="container-moreStats d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <p>
                    #{moreStats.order}
                </p>
                <p>
                    Weight: {moreStats.weight}
                </p>
                <p>
                    Height: {moreStats.height} Mt
                </p>
                <p>Abilities: </p>
                <AbilitesData />
            </div>
            
           {/* <Switch>
                <Route path={`${path}/encounters`}>
                    <Encounters urlEncounter={dataEncounters} />
                </Route>   
            </Switch>  */}
        </div>         
    )
  }  

    return (
        <div>
        { moreStats && <PokeStats /> }
        </div>
    )
}
