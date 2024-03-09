import { fetcher, creator } from '../requests'
import { userURL } from '../urls'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'


export const useUsers = () =>
{
    const {data, error, isLoading} = useSWR(userURL, fetcher)
    return {
        users : data,
        error,
        isLoading
    }
}


export const useCreateUser = () => {
    const {trigger, isMutating} = useSWRMutation(userURL, creator)
    return {
        userCreator : trigger,
        userCreating : isMutating
    }
}