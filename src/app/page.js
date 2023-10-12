"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React,{useState} from 'react';
export default function Home() {
const [count,setCount]=useState(0);
const [one,setOne]=useState(100);
const minus=()=>{
  setInterval(setOne(one-1),10000);
  
}


 decrease=()=>{
setCount(count-1);
}
const increase=()=>{
  setCount(count+1);
}
  return (
   <>
   <h1>hello world</h1>
   <button onClick={decrease}>Click me to decrease</button>
   
   <button onClick={increase}>Click me to increase</button>
   <p>{count}</p>
  
  <p>{minus}{one}</p>
   </>
  )
}
