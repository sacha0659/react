import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import styles from '../../styles/App.module.css'
import { useEffect, useState } from 'react'
import stylescard from '../../styles/Card.module.css'
export default function Home() {
    const [products,setProducts] = useState();
    useEffect(()=>{
        setProducts(JSON.parse(localStorage.getItem('cardselected')))
    })
  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
      
          <Navbar/>
          
{products &&

<div className={stylescard.cardcontainer}>

                <h2>{products.title}</h2>
            <Image width='100%'
            height='100%'
            src={products.img}
            alt='' />
            <p>{products.desc}</p>
            <h3>{products.price} €</h3>
           
           

            
        </div>
}

        
      </main>

     
    </div>
  )
}
