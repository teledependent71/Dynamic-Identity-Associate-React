import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Sick Outlying Trout</title>
        <meta property="og:title" content="Sick Outlying Trout" />
      </Helmet>
    </div>
  )
}

export default Home
