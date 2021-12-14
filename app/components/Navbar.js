
import react, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [user,setUser] = useState(null);
    return (

        <div className={styles.navcontainer}>
            <p>Mensssu</p>
            <h3>NET Marketplace</h3>
            <a href='/toto'>test</a>
            <div>
                {user ? (
                    <button>
                        Logout
                    </button>
                ) : (
                    <button>
                        Login
                    </button>
                )}
            </div>

        </div>


    )
}