import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
          <Navbar/>
        
      </main>

     
    </div>
  )
}
