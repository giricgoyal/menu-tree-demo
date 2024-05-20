import React from 'react'
import MenuItem from 'src/components/menu-list/menu-item'
import './styles.scss'

export default function MenuList(props) {
    const { data } = props
    return (
        <div className="menu-list">
            {data.map((datum) => {
                return <MenuItem key={datum.name} label={datum.name} children={datum.children} />
            })}
        </div>
    )
}
