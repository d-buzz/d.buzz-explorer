import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"

const handleFindRcAccount = async (username) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'rc_api.find_rc_accounts',
      params: {'accounts': [username]},
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleFindRcAccount:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useFindRcAccount = (username) => {
  const [loading, setLoading] = useState(true)
  const [rcAccount, setRcAccount] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {result} = await handleFindRcAccount(username)
        const {rc_accounts} = await result

        setRcAccount(rc_accounts[0])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  return {
    rcAccount,
    loading,
  }
}

export default useFindRcAccount
