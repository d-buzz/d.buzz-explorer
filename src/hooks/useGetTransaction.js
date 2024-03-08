import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"

const handleGetTransaction = async (trxId) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_transaction',
      params: [trxId],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetTransaction:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useGetTransaction = (trxId) => {
  const [loading, setLoading] = useState(true)
  const [transaction, setTransaction] = useState({})

  const [refBlockNum, setRefBlockNum] = useState(0)
  const [refBlockPrefix, setRefBlockPrefix] = useState(0)
  const [expiration, setExpiration] = useState("")
  const [operations, setOperations] = useState([])
  const [extensions, setExtensions] = useState([])
  const [signatures, setSignatures] = useState([])
  const [transactionId, setTransactionId] = useState("")
  const [blockNum, setBlockNum] = useState(0)
  const [transactionNum, setTransactionNum] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {result} = await handleGetTransaction(trxId)
        const {
          ref_block_num,
          ref_block_prefix,
          expiration,
          operations,
          extensions,
          signatures,
          transaction_id,
          block_num,
          transaction_num,
        } = await result || {}

        setRefBlockNum(ref_block_num)
        setRefBlockPrefix(ref_block_prefix)
        setExpiration(expiration)
        setOperations(operations)
        setExtensions(extensions)
        setSignatures(signatures)
        setTransactionId(transaction_id)
        setBlockNum(block_num)
        setTransactionNum(transaction_num)

        setTransaction(result || {})
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [trxId])

  return {
    transaction,
    refBlockNum,
    refBlockPrefix,
    expiration,
    operations,
    extensions,
    signatures,
    transactionId,
    blockNum,
    transactionNum,
    loading,
  }
}

export default useGetTransaction
