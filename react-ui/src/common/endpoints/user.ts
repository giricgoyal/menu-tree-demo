import { getData, getUrl } from '../api'
import { API_BASE_URL } from '../api/constants'

export const getUser = async (id: string) => {
    const url = getUrl(API_BASE_URL, 'user')
    const user = await getData(url, {
        id,
    })

    return user
}
