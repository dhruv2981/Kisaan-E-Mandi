import { fetcher, creator, updater } from "../requests";
import { transactionsURL, readOnlyURL } from "../urls";
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
  const { data, error, isLoading } = useSWR(readOnlyURL, fetcher);
  return {
    transactions: data,
    error,
    isLoading,
  };
};


export const useUpdateTransaction = () => {
  const { trigger, isMutating } = useSWRMutation(transactionsURL, updater);
  return {
    transactionUpdater: trigger,
    transactionUpdating: isMutating,
  };

};

