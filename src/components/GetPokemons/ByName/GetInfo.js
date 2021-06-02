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
        <div className="contenedor">
        <div className="container-search">
            <div className="container-search-screen">
                <div className="container-search-screen_1">
                <div>
               <h5 className="text-center">You can view a Pokemon searching by name or Id</h5>
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

        <div className="container-screen d-flex justify-content-center align-items-center">
            {data && <CardPokeName data={data}/>}
        </div>
    </div>    
    )
}
