import React, { useEffect, useState } from 'react';
import "/Users/nahue/OneDrive/Escritorio/React #5App/poke-api/src/components/styles/main.css";
import axios from "axios";
import CardPokeName from "./cards";
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

export default function SearchPokeByName () {
    // -----------------------------------------------------------
    //                  UseState section

    const [pokemonUrl, setPokemonUrl] = useState("");
    const [data, setData] = useState("");

    // ------------------------------------------------------------

    // -----------------------------------------------------------
    //                  useForm Section

    let { handleSubmit, register, reset } = useForm();  

    const handleInputName = (data) => {
        setPokemonUrl(data.pokeName);
        reset(
            {pokeName:""}
        );
    }

    // ------------------------------------------------------------

    // -----------------------------------------------------------
    //                  useEffect Section

    useEffect(() => {
        if (pokemonUrl) {
            const consumePokeByName = async () => {
                let response = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonUrl.toLowerCase()}`);
                setData(response.data);
            };

            consumePokeByName();
        }
    }, [pokemonUrl])

    // ------------------------------------------------------------

    return (
        <div>
        <div>
            <div>
                <div>
                <div>
               <h5>You can view a Pokemon searching by name or Id</h5>
                <form onSubmit={handleSubmit(handleInputName)}>
                    <input
                    className="form-control"
                    {...register("pokeName", {required: true})}
                    />
                    <div className="d-flex justify-content-center">
                        <button className="button-options" type="submit">                       
                            Search
                        </button>
                    </div>
                </form>
               </div>
                
                </div>
            </div>
        </div>

        <div>
            {data && <CardPokeName data={data}/>}
        </div>
    </div>    
    )
}
