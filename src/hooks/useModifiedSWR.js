
// Purpose: HANDLES API REQUESTS

import axios from 'axios'
import useSWR from 'swr'
import { baseURL } from '../api/_api'

export function useModifiedSWR(url) {
  const APIClient = axios.create({ baseURL })

  const fetcher = url => APIClient.get(url).then(res => res.data)
  const { data, error, isValidating } = useSWR(url ? url : null, fetcher)

  if (error) {
    console.log(error)
  }

  return {
    isValidating,
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
