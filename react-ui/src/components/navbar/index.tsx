import React, { ReactElement, useState, useEffect } from 'react'
import './styles.scss'

export default function Navbar(): ReactElement {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        })

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="navbar">
            <div>Atlassian</div>
            <div>{date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</div>
        </div>
    )
}
