import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './modules/home'

export default function Router(): React.ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
