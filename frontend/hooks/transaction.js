import { fetcher, creator } from "../requests";
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
