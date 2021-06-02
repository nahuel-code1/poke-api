import React, { useEffect, useState } from 'react'
import "/Users/nahue/OneDrive/Escritorio/React #5App/poke-api/src/components/styles/main.css";
import axios from "axios";
import {useForm} from "react-hook-form";
import CardsPokeByType from "./cards";
import { Link } from 'react-router-dom';

export default function GetPokeByType () {
    // -----------------------------------------------------------------------------------------------------
    //                              useState Section

    let [pokeType, setPokeType] = useState("");
    let [pokeData, setPokeData] = useState([]);

    // -----------------------------------------------------------------------------------------------------
    //                              useEffect Section

    useEffect( () => {
        if (pokeType) {
        const getPokeTypeData = async () => {
                let response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType.toLowerCase()}`);
                setPokeData(response.data.pokemon);
            }
            getPokeTypeData();
        }
    }, [pokeType])

    // -----------------------------------------------------------------------------------------------------
    //                              useForm Section

    let {handleSubmit, register} = useForm();

    const handleGetType = (data) => {
        setPokeType(data.type);
    }
   
    // -----------------------------------------------------------------------------------------------------

    return (
        <div className="contenedor">
        <div className="container-search">
            <div className="container-search-screen">
                <div className="container-search-screen_1">
                <div>
                <h5 className="text-center">You can view many Pokemons searching by type</h5>
                <form onSubmit={handleSubmit(handleGetType)}>
                <select {...register("type", {required: true})} className="form-control" >
                    <option>normal</option>
                    <option>fighting</option>
                    <option>flying</option>
                    <option>poison</option>
                    <option>ground</option>
                    <option>rock</option>
                    <option>bug</option>
                    <option>ghost</option>
                    <option>steel</option>
                    <option>fire</option>
                    <option>water</option>
                    <option>grass</option>
                    <option>electric</option>
                    <option>psychic</option>
                    <option>ice</option>
                    <option>dragon</option>
                    <option>dark</option>
                    <option>fairy</option>
                    <option>unknow</option>
                    <option>shadow</option>
                </select>
                <button className="button-options" type="submit">Search</button>
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
            <div className="container-screen_1 d-flex justify-content-center align-items-center">
                <div style={{height:"100%"}} className="container-screen_2">
                    {pokeData && pokeData.map((element, index)=> (
                    <CardsPokeByType key={element.pokemon.name + index} data={element.pokemon.url}/>
                    ))}      
                </div>
            </div>  
        </div>
    </div>                
    )
}
