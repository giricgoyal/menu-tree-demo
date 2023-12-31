import * as React from 'react'
import Navbar from './components/navbar'
import Router from './router'
import './styles.scss'

export default function App(): React.ReactElement {
    return (
        <div className="app">
            <Navbar />
            <div className="app__page">
                <Router />
            </div>
        </div>
    )
}
