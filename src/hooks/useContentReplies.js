import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"

const handleGetContentReplies = async (username, permlink) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_content_replies',
      params: [username, permlink],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetContentReplies:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useContent = (username, permlink) => {
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState({})

  const [category, setCategory] = useState(null)
  const [title, setTitle] = useState(null)
  const [body, setBody] = useState(null)
  const [jsonMetadata, setJsonMetadata] = useState(null)
  const [created, setCreated] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(null)
  const [depth, setDepth] = useState(null)
  const [children, setChildren] = useState(null)
  const [lastPayout, setLastPayout] = useState(null)
  const [cashoutTime, setCashoutTime] = useState(null)
  const [totalPayoutValue, setTotalPayoutValue] = useState(null)
  const [curatorPayoutValue, setCuratorPayoutValue] = useState(null)
  const [pendingPayoutValue, setPendingPayoutValue] = useState(null)
  const [promoted, setPromoted] = useState(null)
  const [replies, setReplies] = useState([])
  const [bodyLength, setBodyLength] = useState(null)
  const [authorReputation, setAuthorReputation] = useState(null)
  const [parentAuthor, setParentAuthor] = useState(null)
  const [parentPermlink, setParentPermlink] = useState(null)
  const [url, setUrl] = useState(null)
  const [rootTitle, setRootTitle] = useState(null)
  const [beneficiaries, setBeneficiaries] = useState([])
  const [maxAcceptedPayout, setMaxAcceptedPayout] = useState(null)
  const [percentHbd, setPercentHbd] = useState(null)
  const [id, setId] = useState(null)
  const [authorRewards, setAuthorRewards] = useState(null)
  const [maxCashoutTime, setMaxCashoutTime] = useState(null)
  const [rewardWeight, setRewardWeight] = useState(null)
  const [rootAuthor, setRootAuthor] = useState(null)
  const [rootPermlink, setRootPermlink] = useState(null)
  const [allowReplies, setAllowReplies] = useState(null)
  const [allowVotes, setAllowVotes] = useState(null)
  const [allowCurationRewards, setAllowCurationRewards] = useState(null)
  const [rebloggedBy, setRebloggedBy] = useState([])
  const [netVotes, setNetVotes] = useState(null)
  const [childrenAbsRshares, setChildrenAbsRshares] = useState(null)
  const [totalPendingPayoutValue, setTotalPendingPayoutValue] = useState(null)
  const [totalVoteWeight, setTotalVoteWeight] = useState(null)
  const [voteRshares, setVoteRshares] = useState(null)
  const [netRshares, setNetRshares] = useState(null)
  const [absRshares, setAbsRshares] = useState(null)
  const [activeVotes, setActiveVotes] = useState([])

  const activeVotesNameOnly = () => activeVotes.map((vote) => vote.voter)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {result} = await handleGetContentReplies(username, permlink)

        const {
          category,
          title,
          body,
          json_metadata,
          created,
          last_update,
          depth,
          children,
          last_payout,
          cashout_time,
          total_payout_value,
          curator_payout_value,
          pending_payout_value,
          promoted,
          replies,
          body_length,
          author_reputation,
          parent_author,
          parent_permlink,
          url,
          root_title,
          beneficiaries,
          max_accepted_payout,
          percent_hbd,
          id,
          author_rewards,
          max_cashout_time,
          reward_weight,
          root_author,
          root_permlink,
          allow_replies,
          allow_votes,
          allow_curation_rewards,
          reblogged_by,
          net_votes,
          children_abs_rshares,
          total_pending_payout_value,
          total_vote_weight,
          vote_rshares,
          net_rshares,
          abs_rshares,
          active_votes,
        } = await result || {}

        setCategory(category)
        setTitle(title)
        setBody(body)
        setJsonMetadata(json_metadata)
        setCreated(created)
        setLastUpdate(last_update)
        setDepth(depth)
        setChildren(children)
        setLastPayout(last_payout)
        setCashoutTime(cashout_time)
        setTotalPayoutValue(total_payout_value)
        setCuratorPayoutValue(curator_payout_value)
        setPendingPayoutValue(pending_payout_value)
        setPromoted(promoted)
        setReplies(replies)
        setBodyLength(body_length)
        setAuthorReputation(author_reputation)
        setParentAuthor(parent_author)
        setParentPermlink(parent_permlink)
        setUrl(url)
        setRootTitle(root_title)
        setBeneficiaries(beneficiaries)
        setMaxAcceptedPayout(max_accepted_payout)
        setPercentHbd(percent_hbd)
        setId(id)
        setAuthorRewards(author_rewards)
        setMaxCashoutTime(max_cashout_time)
        setRewardWeight(reward_weight)
        setRootAuthor(root_author)
        setRootPermlink(root_permlink)
        setAllowReplies(allow_replies)
        setAllowVotes(allow_votes)
        setAllowCurationRewards(allow_curation_rewards)
        setRebloggedBy(reblogged_by)
        setNetVotes(net_votes)
        setChildrenAbsRshares(children_abs_rshares)
        setTotalPendingPayoutValue(total_pending_payout_value)
        setTotalVoteWeight(total_vote_weight)
        setVoteRshares(vote_rshares)
        setNetRshares(net_rshares)
        setAbsRshares(abs_rshares)

        const sortedVotes = active_votes.sort((a, b) => new Date(a.time) - new Date(b.time))
        setActiveVotes(sortedVotes)

        setContent(result || {})
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [username, permlink])

  return {
    content,
    loading,
    category,
    title,
    body,
    jsonMetadata,
    created,
    lastUpdate,
    depth,
    children,
    lastPayout,
    cashoutTime,
    totalPayoutValue,
    curatorPayoutValue,
    pendingPayoutValue,
    promoted,
    replies,
    bodyLength,
    authorReputation,
    parentAuthor,
    parentPermlink,
    url,
    rootTitle,
    beneficiaries,
    maxAcceptedPayout,
    percentHbd,
    id,
    authorRewards,
    maxCashoutTime,
    rewardWeight,
    rootAuthor,
    rootPermlink,
    allowReplies,
    allowVotes,
    allowCurationRewards,
    rebloggedBy,
    netVotes,
    childrenAbsRshares,
    totalPendingPayoutValue,
    totalVoteWeight,
    voteRshares,
    netRshares,
    absRshares,
    activeVotes,
    activeVotesNameOnly,
    propertyKeys,
  }
}

export default useContent
