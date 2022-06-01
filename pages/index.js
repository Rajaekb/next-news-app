import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../Components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div className='container'>
  <Toolbar/>
  <div className={styles.main}>
      <h1>A Global Insight</h1>
      <h3>Your Destination to the World News</h3>
    </div>
</div>
    
  )
}
