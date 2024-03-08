import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"


const handleGetAccountReputation = async (username) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_account_reputations',
      params: [username, 1],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetAccountReputation:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useAccountReputation = (username) => {
  const [loading, setLoading] = useState(true)
  const [accountReputation, setAccountReputation] = useState(null)
  const [reputation, setReputation] = useState(null)
  const [account, setAccount] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {result} = await handleGetAccountReputation(username)
        const { account, reputation } = result[0] || {}

        setReputation(reputation)
        setAccount(account)
        setAccountReputation(result[0] || {})
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  return {
    accountReputation,
    accountName: account,
    reputation,
    loading,
  }
}

export default useAccountReputation
