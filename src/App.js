import React from 'react'
import "./App.css"

import { Navbar } from "./components"
import { Header } from "./containers"

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
        </div>
    )
}

export default App
