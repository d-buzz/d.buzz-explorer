import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"


const handleGetAccountHistory = async (username) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_account_history',
      params: [username, -1, 100],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetAccountHistory:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useAccountHistory = (username) => {
  const [loading, setLoading] = useState(true)
  const [accountHistory, setAccountHistory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {result} = await handleGetAccountHistory(username)
        const sorted = result.sort((a, b) => b[0] - a[0])

        setAccountHistory(sorted)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  return {
    accountHistory,
    loading,
  }
}

export default useAccountHistory
