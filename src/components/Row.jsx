import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";

function Row({title,fetchUrl}){
  const [allMovies, setAllMovies] = useState()
    
    const fetchData = async ()=>{
        const {data} = await tmdbAxiosInstance.get(fetchUrl)
        // console.log(data.results);
        setAllMovies(data.results)
    }

    console.log(allMovies);

    useEffect(()=>{
        fetchData()
    },[])


    return (
        <div>
            <h1> {title} </h1>

        </div>
    )
}



export default Row