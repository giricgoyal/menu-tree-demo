import * as React from 'react'
import MenuList from 'src/components/menu-list'
import { fetchData } from 'src/data'

export default function Home(): React.ReactElement {
    const [data, setData] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    const getData = async () => {
        try {
            setLoading(true)
            const data = await fetchData()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {isLoading && 'loading'}
            {!isLoading && <MenuList data={data} />}
        </>
    )
}
