import React from 'react'
import { useState } from "react";
import "./Bollywood.scss";

export default function Newsb() {
  const[news,setdata]=useState([]);
 
  const fetchdata=()=>{
    
     fetch("https://inshortsapi.vercel.app/news?category=bollywood")
     .then((response)=>response.json())
     .then((res)=>{
         setdata(res.data);
     });
 }
 fetchdata();
 return (
    <>z
     <div className=" col1 md-3  my-3">
      {news.map((value)=>(
            <div className="card">
              <div className='card__body'>
              <img  className='card__image' src={value.imageUrl}/>
                <h2 className='card__title'>{value.title.slice(0,20)}...</h2>
                <p className='card__description'>{value.content.slice(0,70)}.....</p>
                </div>
                 <a href={value.readMoreUrl} target="_blank"> <button  className='card__btn' >Read more</button> </a>
              </div>
                
      ))}
  </div>
      

  
      </>
  );
}
