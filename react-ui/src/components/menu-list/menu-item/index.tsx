import React from 'react'
import MenuList from 'src/components/menu-list'
import './styles.scss'

const iconMap = {
    default: '•',
    open: '▼',
    closed: '▶',
}

export default function MenuItem(props) {
    const { label, children } = props
    const [isExpanded, setIsExpanded] = React.useState(false)

    const getIcon = React.useCallback(() => {
        if (!children?.length) {
            return iconMap.default
        }

        return isExpanded ? iconMap.open : iconMap.closed
    }, [children, isExpanded])

    const handleIconClick = React.useCallback(() => {
        setIsExpanded(!isExpanded)
    }, [isExpanded])

    const classIcon = React.useMemo(() => {
        const classNames = ['menu-item__head__icon']
        if (children?.length) {
            classNames.push('menu-item__head__icon--cursor')
        }
        return classNames.join(' ')
    }, [children])

    return (
        <div className="menu-item">
            <div className="menu-item__head">
                <span className={classIcon} onClick={handleIconClick}>
                    {getIcon()}
                </span>
                <span className="menu-item__head__label">{label}</span>
            </div>
            {isExpanded && children?.length && <MenuList data={children} />}
        </div>
    )
}
