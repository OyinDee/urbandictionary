import React, {useEffect, useState} from 'react'
import book from '../dico.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Home() {
    const [word,setWord]=useState('')
    const [def,setDefs]=useState([])
    
    const navigate=useNavigate()
    const letussearch=()=>{

        const options = {
          method: 'GET',
          url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
          params: {term: `${word}`},
          headers: {
            'X-RapidAPI-Key': '99099c3478mshbd6991a3cedb38fp1a091fjsn2ada40cce73b',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data.list);
            setDefs(response.data.list);
            navigate('/word',  { state:{defs:response.data.list} })
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <>
        <div className="h-screen bg-sky-700 dark:bg-blue-900">
                <div className="h-fit bg-sky-700 dark:bg-blue-900">
                        <div className="lg:flex lg:justify-center md:flex md:justify-center">
                            <img src={book} alt="" className="pt-60 lg:pt-36 lg:w-84"/><br/>
                        </div>
                        
                        <h2 className="text-3xl text-center font-bold overline text-yellow-500">DeeDico</h2>
                        <div className="lg:flex lg:justify-center md:flex md:justify-center w-full items-center mt-4 flex justify-center">
                        <input type="text" name="" id="" className=" h-fit p-2 rounded border-0 shadow-lg self-center"   onChange={(e)=>{setWord(e.target.value)}}/>
                                <button className="bg-yellow-500 h-fit p-2 rounded border-0 shadow-lg self-center" onClick={letussearch}>Search up</button> 
                        </div>
                </div>
        </div>
        </>
    )
}
