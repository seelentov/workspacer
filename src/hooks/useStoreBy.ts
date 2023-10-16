import { useSelector } from 'react-redux'

interface IRootState {
  [key: string]: {
    [key: string]: unknown
  };
}

export const useStoreBy = (store: string) => {
  return useSelector((state: IRootState) => state[store]);
}