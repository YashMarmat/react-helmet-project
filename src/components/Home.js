import React from 'react'
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Homepage</title>
                <meta name="description" content="homepage description here" />
            </Helmet>
          <h1>homepage</h1>  
        </div>
    )
}

export default Home
