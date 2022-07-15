
import React, {useEffect, useState} from 'react'

import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'

export default function Each(props) {
    const navigate=useNavigate()
    const[definitions,setDef]=useState([]);
    const location = useLocation();
    const gobackhome=()=>{
        navigate('/')
    }
    useEffect(() => {
        return () => {
           setDef(location.state.defs)
        };
    });
    
    return (
        <>
        <div className="h-screen bg-sky-700 dark:bg-blue-900">
        <div className="h-fit bg-sky-700 dark:bg-blue-900 p-5">
        {definitions.map((val,i) =><div className="bg-white p-2 m-5 mt-0 text-center rounded-lg"> <div className="p-2" key={i}>{definitions[i].definition}</div><div className="p-2 m-2">By: {definitions[i].author}</div><div className="p-2 m-2">E.G: {definitions[i].example}</div></div>)}
        <div className="lg:flex lg:justify-center md:flex md:justify-center w-full items-center mt-4 flex justify-center">
                <button className="bg-yellow-500 w-60 h-fit p-2 rounded border-0 shadow-lg self-center capitalize" onClick={gobackhome}>Go back</button> 
        </div>
        </div>
</div>
        </>
    )
}
