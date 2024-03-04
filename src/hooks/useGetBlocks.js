import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"

const handleGetBlock = async (headBlockNumber) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_block',
      params: [headBlockNumber],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetBlock:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useGetBlocks = (headBlockNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [blocks, setBlocks] = useState({})
  const [previousBlockId, setPreviousBlockId] = useState(null)
  const [timestamp, setTimestamp] = useState(null)
  const [witness, setWitness] = useState(null)
  const [transactionMerkleRoot, setTransactionMerkleRoot] = useState(null)
  const [witnessSignature, setWitnessSignature] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [blockId, setBlockId] = useState(null)
  const [signingKey, setSigningKey] = useState(null)
  const [transactionIds, setTransactionIds] = useState([])
  const [extensions, setExtensions] = useState([])

  const count = transactionIds.length

  useEffect(() => {
    if (headBlockNumber) {
      const fetchData = async () => {
        try {
          const {result} = await handleGetBlock(headBlockNumber)

          if (!result) {
            setError(`Error fetching blocks: ${headBlockNumber} is not exist`)
            throw new Error(`Error fetching blocks: ${headBlockNumber} is not exist`)
          }

          setBlocks(result)
          const {
            previous,
            extensions,
            timestamp,
            witness,
            transaction_merkle_root,
            witness_signature,
            transactions,
            block_id,
            signing_key,
            transaction_ids,
          } = await result

          setPreviousBlockId(previous)
          setExtensions(extensions)
          setTimestamp(timestamp)
          setWitness(witness)
          setTransactionMerkleRoot(transaction_merkle_root)
          setWitnessSignature(witness_signature)
          setTransactions(transactions)
          setBlockId(block_id)
          setSigningKey(signing_key)
          setTransactionIds(transaction_ids)

          setLoading(false)
        } catch (error) {
          console.error('Error fetching blocks:', error)
          setLoading(false)
        }
      }

      fetchData() // Invoke the fetchData function
    }
  }, [headBlockNumber])

  return {
    blocks,
    previousBlockId,
    timestamp,
    witness,
    extensions,
    transactionMerkleRoot,
    witnessSignature,
    transactions,
    blockId,
    signingKey,
    transactionIds,
    loading,
    count,
    error,
  }
}

export default useGetBlocks
