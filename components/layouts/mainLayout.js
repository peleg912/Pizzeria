import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';


const mainLayout = (props)=> {
    return(
        <>
          <Head>
              <title>Pizzeria</title>
              
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Overlock:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
              <link rel="stylesheet" href="/static/css/styles.css"/>
          </Head>

          <div className="mainLayout_container">
              <Header/>
          </div>

          <div className="main_container">
              {props.children}
          </div>
        </>
    )
}


export default mainLayout;
