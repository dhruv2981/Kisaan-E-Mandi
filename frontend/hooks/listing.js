import { fetcher, creator } from '../requests'
import { listingsURL } from '../urls'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'


export const useListingsAll = () =>
{
    const {data, error, isLoading} = useSWR(listingsURL, fetcher)
    return {
        listings : data,
        error,
        isLoading
    }
}
export const useListingsFarmer = (fid) => {
    const {data, error, isLoading} = useSWR(listingsURL + fid + "/", fetcher)
    return {
        listings : data,
        error,
        isLoading
    }
}


export const useCreateListing = () => {
    const {trigger, isMutating} = useSWRMutation(listingsURL, creator)
    return {
        listingCreator : trigger,
        listingCreating : isMutating
    }
}