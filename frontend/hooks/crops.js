import { fetcher } from '../requests'
import { cropURL } from '../urls'
import useSWR from 'swr'


export const useCrops = () =>
{
    const {data, error, isLoading} = useSWR(cropURL, fetcher)
    return {
        crops : data,
        error,
        isLoading
    }
}