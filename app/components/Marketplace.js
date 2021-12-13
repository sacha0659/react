
import react, { useEffect, useState } from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from './Card';

export default function Marketplace() {
    const [user,setUser] = useState(null);
   
    return (

        <div className={styles.marketcontainer}>
            <h3>NET Marketplace</h3>
        <div className={styles.cardcontainer}>
           

           <Card title="titre" img='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_1280.jpg' desc='description' price='30'/>
           <Card title="titre" img='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_1280.jpg' desc='description' price='30'/>
           <Card title="titre" img='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_1280.jpg' desc='description' price='30'/>
           <Card title="titre" img='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_1280.jpg' desc='description' price='30'/>

        </div>
        </div>


    )
}