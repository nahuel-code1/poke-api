import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function MainLogin() {
    const [name, setName] = useState("");
    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setName(data.name)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input 
                type="text"
                {...register("name", {required: true})}
                />

                    <button type="submit"> 
                    Register
                    </button>
            </form>

            { name &&
                <Link to="/pokedex" replace>
                    Login
                </Link>
            }
        
        </div>
    )
}
