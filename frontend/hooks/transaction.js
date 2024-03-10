import { fetcher, creator, updater } from "../requests";
import { transactionsURL } from "../urls";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const useCreateTransaction = () => {
  const { trigger, isMutating } = useSWRMutation(transactionsURL, creator);
  return {
    transactionCreator: trigger,
    transactionCreating: isMutating,
  };
};

export const useTransactions = () => {
  const {data : transactions, error, isLoading} = useSWR(transactionsURL, fetcher)
  return {
    transactions,
    error,
    isLoading
  }
}

export const useUpdateTransaction = () => {
  const { trigger, isMutating } = useSWRMutation(transactionsURL, updater);
  return {
    transactionUpdater: trigger,
    transactionUpdating: isMutating,
  };
}
