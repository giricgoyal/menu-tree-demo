import axios from 'axios'
import { API_BASE_URL } from './constants'

export type API_DATA = {
    data?: Array<any>
    error?: {
        code: number
        message: string
    }
}

export type AXIOS_RESPONSE = {
    data?: API_DATA
}

type Params = {
    [key: string]: string
}

type Data = any

export const getUrl = (api: string, path: string): string => `${api}/${path}`

export const getData = async (url: string, params?: Params): Promise<API_DATA> => {
    const result = await axios.get(url, {
        params,
    })
    return result.data
}

export const postData = async (url: string, data?: Data): Promise<API_DATA> => {
    const result = await axios.post(url, data)
    return result.data
}

export const putData = async (url: string, data?: Data): Promise<API_DATA> => {
    const result = await axios.put(url, data)
    return result.data
}

export const deleteData = async (url: string, params?: Params): Promise<API_DATA> => {
    const result = await axios.delete(url, {
        params,
    })
    return result.data
}

export const patchData = async (url: string, data?: Data): Promise<API_DATA> => {
    const result = await axios.patch(url, data)
    return result.data
}
