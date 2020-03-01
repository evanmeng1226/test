import React,{useState,useEffect} from 'react';
import { Link } from 'gatsby';

export default () => {

    const [message,setMessage]=useState({});

    useEffect(()=>{
        const fetchData=async ()=>{
            await new Promise((resolve)=>setTimeout(resolve,1000));
            console.log("aaa");
            setMessage({message:"abc"});
        }
        fetchData();
    },[message]);

    return(
        <div>
            <div>{message.message}</div>
            <button onClick={()=>{
                setMessage("AAAAAAAAAAAAAAAAAa");
            }}>Click</button>
            <Link to="/about">About</Link>
        </div>
    )
}
