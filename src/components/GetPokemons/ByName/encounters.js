import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Encounters ({urlEncounter}) {

    let [locations, setLocations] = useState([]);


    useEffect(() => {
        if (urlEncounter) {
            const getDataEncounter = async () => {
                let response = await axios.get(`${urlEncounter}`);
                setLocations(response.data);
            }
            getDataEncounter();
        }
    }, [urlEncounter])

    const AllLocations = () => {
        return locations.map((element, index) => {
            return (
                <p key={element.location_area.name + index}>
                    {element.location_area.name}
                </p>
            )
        })
    }

    return (
        <div>
            <AllLocations />
        </div>
    )
}
