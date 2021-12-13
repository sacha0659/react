
import react, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'

export default function Card(props) {
    const [cardselected,setCardselected] = useState([]);
    // useEffect(()=> {
    //   console.log(cardselected)
    //   localStorage.setItem("cardselected",cardselected);
        
    // },[cardselected]);
    return (

        <div className={styles.cardcontainer}>
            <h2>{props.title}</h2>
            <Image width='100%'
            height='100%'
            src={props.img}
            alt=''/>
            <p>{props.desc}</p>
            <h3>{props.price} €</h3>
            <button onClick={()=>setCardselected( [props.title,props.img,props.price,props.desc])}>Buy</button>
            {cardselected.map((item,i)=>{
                return(
                    
                    <li  key={i}>{item}</li>
                   
                    )
                })}
        </div>
    )
}