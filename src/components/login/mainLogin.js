import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";

export default function MainLogin() {
    const [name, setName] = useState("");
    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setName(data.name)
    }


    return (
        <div className="container-login">
            <form onSubmit={handleSubmit(submit)} className="form-contain"> 
                <div className="input-group mb-3">
                    <input 
                    placeholder="What is your name?"
                    className="form-control"
                    type="text"
                    {...register("name", {required: true})}
                    />
                    <button className="btn btn-outline-danger text-black" type="submit">Register</button> 
                </div>
            </form>

            { name &&
            <div className="form-contain d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-danger">
                    <Link to="/pokedex" replace>
                        Login
                    </Link>
                </button>
            </div>
            }
        
        </div>
    )
}
