import * as React from 'react'
import Navbar from './components/navbar'
import './styles.scss'
import Home from 'src/modules/home'

export default function App(): React.ReactElement {
    return (
        <div className="app">
            <Navbar />
            <div className="app__page">
                <Home />
            </div>
        </div>
    )
}
