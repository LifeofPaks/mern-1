import { useState } from "react";
import {useAuthContext} from "../hooks/useAuthContext"


export const useSignup = () =>{
    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)


    const signup = async (email, password) =>{
        setError(null)
        setIsLoading(true)

        const response = await fetch ("/api/user/signup", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem("user", JSON.stringify(json))
            dispatch({type:"LOGIN", payload:json})
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}

}
