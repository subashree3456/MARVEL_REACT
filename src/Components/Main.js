import React from 'react'
import Card from './Card'
import axios from "axios";
import {useState, useEffect} from "react";

function Main() {
    const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a");
     const [item,setItem]=useState();
useEffect(()=>{
    const fetch = async() =>{
        const res =await axios.get(url);
        // console.log(res.data);
        // console.log(res.data.data.results);
        setItem(res.data.data.results);
    }
    fetch();
},[url]);



  return (
    <>
    <div className="header">
        <div className="bg">
            <img src="./Images/bg.png" alt=""/>
        </div>
        <div className="search-bar">
            <img src="./Images/logo.jpg" alt="logo"/>
            <input type="search" placeholder="search here" className="search"/>
        </div>
    </div>
    <div className="content">
 
   {
    (!item)?<p>Not Found...</p> : <Card data={item}/>
   }
    </div>
    </>
    
  )
}

export default Main
