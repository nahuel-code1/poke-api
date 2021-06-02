import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useRouteMatch } from 'react-router-dom';

export default function CardsPokeByType({data}) {
    let { url } = useRouteMatch();
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
            <div>
            {dataTypes &&  
                    <div>
                        <img src={dataTypes.sprites.front_default} alt={dataTypes.name} />
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
                    </div>
            }     
        </div>
              

    //         {/* <Switch>
    //             <Route path="/pokedex/name/:id" component={CardWithMoreStats}  />
    //         </Switch> */}
      
    //     {/* <div className="button-section bg d-flex"> */}
    //         {/* <button className="button-options">
    //             <Link to={`${url}/${id}`}>Stats</Link>
    //         </button> */}

    //         {/* <button className="button-options">
    //             <Link to={`${url}/${id}/encounters`}> Encounters </Link>
    //         </button>

    //         <button className="button-options">
    //             <Link to="/pokedex"> Reset </Link>
    //         </button> */}
    //     </div>

    // </div>
    )
}