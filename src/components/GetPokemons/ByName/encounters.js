import axios from 'axios';
import "./moreStats.css"
import React, { useEffect, useState } from 'react';

export default function Encounters ({urlEncounter}) {

    let [locations, setLocations] = useState([]);
    let [ pokeLength, setPokeLength ] = useState(0);
    let [initialPoke, setInitialPoke] = useState(0);
    let [ultimatePoke, setUltimatePoke] = useState(4);


    useEffect(() => {
        if (urlEncounter) {
            const getDataEncounter = async () => {
                let response = await axios.get(`${urlEncounter}`);
                setLocations(response.data.slice(initialPoke,ultimatePoke));
                setPokeLength(response.data.length);
            }
            getDataEncounter();
        }
    }, [urlEncounter, initialPoke, ultimatePoke])

    const AllLocations = () => {
        return locations.map((element, index) => {
            return (
                <div key={element.location_area.name + index} className="gf d-flex justify-content-center align-items-center">
                    <p className="border-stat">
                        {element.location_area.name}
                    </p>
                </div>
            )
        })
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="abilities-container">
                <div className="bg4">
                    <p>Locations:</p>
                </div>

                <AllLocations />

                <div className="d-flex justify-content-around">
                <button className="btn btn-outline-danger" onClick={()=>{
                if (initialPoke >= 4 ) {
                setInitialPoke(initialPoke - 4);
                setUltimatePoke(ultimatePoke - 4);
                }
            }}>
                Previous
            </button>
            <button className="btn btn-outline-danger" onClick={()=>{
                  if (initialPoke < pokeLength) {
                    setInitialPoke(initialPoke + 4);
                    setUltimatePoke(ultimatePoke + 4);
                  }
            }}>
                Next
            </button>
                </div>
                
            </div>            
        </div>
    )
}
