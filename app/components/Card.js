
import react, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {
    const [cardselected, setCardselected] = useState([]);
    const [productname, setProductname] = useState("");

    function gotoproductpage() {
        Router.push('/[productname]',`/${props.title}`);

    }
    useEffect(() => {
        console.log(cardselected)
        //   localStorage.setItem("cardselected",cardselected);

    }, [cardselected]);


    return (

        <div className={styles.cardcontainer}>

                <h2>{props.title}</h2>
            <Image width='100%'
            height='100%'
            src={props.img}
            alt='' />
            <p>{props.desc}</p>
            <h3>{props.price} €</h3>
            <button onClick={() => setCardselected([props.title, props.img, props.price, props.desc])}>Buy</button>
            {/* <button onClick={() =>  link}>Buy</button> */}
            <button
            onClick={() => {
                gotoproductpage(),
                localStorage.setItem("cardselected", JSON.stringify(props) )
            }}
            
            >
                <a>Valid link</a>
            </button>

            
        </div>
    )


}