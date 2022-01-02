import React from 'react'
import {Helmet} from "react-helmet";

const About = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Page</title>
                <meta name="description" content="about page description here" />
            </Helmet>

            <h1>
                about page
            </h1>
        </div>
    )
}

export default About
