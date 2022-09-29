import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InfoCard from '../styles/InfoCard.module.css'

const Home: NextPage = () => {

  const [data, setData] = React.useState(null);

  const getData = async() => {
        fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/436121").then((res) => res.json()).then((data) => {
          setData(data);
          console.log(data);
        })
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Junior Engineer Code Test - Entera</title>
        <meta name="description" content="This HTML page renders art provided from the endpoint instructed by the assignment while displaying information pertaining to the title of the art and the name of the artist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { !data && <h1>Loading...</h1> }
        { data && (<div className={InfoCard.card}>
          <img  src={`${data.primaryImage}`}></img>
          <h3>{data.title}</h3>
          <h4>By {data.artistDisplayName}</h4>
        </div>)}
      </main>
    </div>
  )
}

export default Home
