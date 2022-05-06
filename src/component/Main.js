import React from 'react'
import Slider from "react-slick";
import { useState,useEffect } from 'react';

function Main() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500
  };
  const style={
    width:"50rem"
  }
  const [news,setdata]=useState([]);
  
  const fetchdata=()=>{
     
    fetch("https://inshortsapi.vercel.app/news?category=all")
    .then((res)=>res.json())
    .then((res)=>{
        setdata(res.data);
    });
  }
   
  useEffect(()=>{
    fetchdata();
    const interval=setInterval(()=>{
      fetchdata();
    },10000);
    return()=>clearInterval(interval)
  },[]);
  return (
    <div className='container'>
        <Slider {...settings}>
    {news.map((value)=>(
      <div class="card" style="width: 18rem; margin-top: 50rem;">
      <img src={value.imageUrl} class="card-img-top" alt="image" style={{height:"250px"}}/>
      <div class="card-body">
        <h5 class="card-title">{value.title}</h5>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href={value.readMoreUrl} target="_blank" class="btn btn-primary"  >Read More</a>
      </div>
    </div>       
    ))}
         </Slider>
      </div>
    
  )
}

export default Main
