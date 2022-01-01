import React from 'react'
import Home from './components/Home'
import About from './components/About'
import PageNotFound from './components/PageNotFound'
import MyNavbar from './components/MyNavbar'
import Contact from './components/Contact'
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom' // NOTE: Switch is replace with Routes in react-router-dom v6

const App = () => {

  return (
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
  )
}

export default App
