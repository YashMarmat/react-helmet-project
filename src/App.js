import React from 'react'
import Home from './components/Home'
import About from './components/About'
import {JssProvider} from 'react-jss'
import { create } from 'jss';
import PageNotFound from './components/PageNotFound'
import MyNavbar from './components/MyNavbar'
import Contact from './components/Contact'
import { Helmet } from 'react-helmet';
import preset from 'jss-preset-default';
import { BrowserRouter, Route, Routes } from 'react-router-dom' // NOTE: Switch is replace with Routes in react-router-dom v6

const createGenerateClassName = () => {
  let counter = 0
  return (rule, sheet) => `c${Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4)}-${rule.key}-${counter++}`
}

const jss = create(preset());
// Custom Material-UI class name generator for better debug and performance.
jss.options.createGenerateClassName = createGenerateClassName;


const App = () => {

  return (
    <JssProvider jss={jss}>
      <div>
        <BrowserRouter>
          <MyNavbar />
          <Helmet>
            <title>Master Page</title>
            <meta charSet="utf-8" />
            <meta name="description" content="A React.js application" />
          </Helmet>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </JssProvider>
  )
}

export default App
