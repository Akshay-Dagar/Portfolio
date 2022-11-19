import React from "react";

import { About, Testimonials, Header, Footer, Skills, Work, Experience } from "./Containers";
import { Navbar } from './Components'
import './App.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Experience />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    )
}

export default App