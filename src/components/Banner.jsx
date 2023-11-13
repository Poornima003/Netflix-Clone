import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Banner({fetchUrl}) {
        const [movie,SetMovie] =useState({})
        const base_url = "https://image.tmdb.org/t/p/original/";

        const fetchData = async ()=>{
            const {data} = await tmdbAxiosInstance.get(fetchUrl)
            console.log(data.results[Math.floor(Math.random()*data.results.length)]);
            SetMovie(data.results[Math.floor(Math.random()*data.results.length)])
        }

        console.log(movie);

useEffect(()=>{
    fetchData()
},[])

  return (
    <div>Banner</div>
  )
}

export default Banner