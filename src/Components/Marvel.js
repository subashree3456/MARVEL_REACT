import { useParams } from "react-router-dom";
import axios from "axios";
import {useState} from 'react';

const Marvel = () => {
    const {id}=useParams();
    const [item,setItem]=useState();
    const fetch=async()=>{
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    //   console.log(res.data.data.results[0]);  
        setItem(res.data.data.results[0])   
    }
    fetch();
    return ( 
        <>
       {
        (!item) ? "" : (
            <div className="box-content">
                <div className="right-box">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                </div>
                <div className="left-box">
                    <h1>{item.name}</h1> 
                    <h4>{item.description}</h4>
                </div>
            </div>
        )
       }
        </>
     );
}
 
export default  Marvel;