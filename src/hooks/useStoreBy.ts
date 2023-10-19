/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'

interface IRootState {
  [key: string]: {
    [key: string]: any
  };
}

export const useStoreBy = (store: string) => {
  return useSelector((state: IRootState) => state[store]);
}