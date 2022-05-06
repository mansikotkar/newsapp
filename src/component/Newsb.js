import React from 'react'
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom'


export default function Newsb() {
  const {name}=useParams();
  const[news,setdata]=useState([]);
 
  const fetchdata=()=>{
    
     fetch("https://inshortsapi.vercel.app/news?category="+name)
     .then((response)=>response.json())
     .then((res)=>{
         setdata(res.data);
     });
 }
   useEffect(()=>{
     fetchdata();
     const interval=setInterval(()=>{
       fetchdata();
     },10000);
     return()=>clearInterval(interval);
   },[]);

 return (
    <>
  <div className="container my-3">
    <div className="row">
      {news.map((value)=>(
          <div className="col md-3 my-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={value.imageUrl} class="card-img-top" alt="..." style={{height:"250px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{value.title.slice(0,25)}..</h5>
                  <p className="card-text">{value.content.slice(0,85)}....</p>
                  <p className="card-text"><b>{value.author}</b></p>
                  <a href={value.readMoreUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
            </div>
      ))}

      </div>
  </div>
      </>
  );
}
