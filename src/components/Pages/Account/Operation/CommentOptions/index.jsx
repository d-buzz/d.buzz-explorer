import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"

const CommentOptions = ({transaction}) => {

  // {
  //   "author": "amartohamy",
  //   "permlink": "s9j6v6",
  //   "extensions": [
  //   [
  //     "comment_payout_beneficiaries",
  //     {
  //       "beneficiaries": [
  //         {
  //           "weight": 500,
  //           "account": "dbuzz"
  //         }
  //       ]
  //     }
  //   ]
  // ],
  //   "allow_votes": true,
  //   "percent_hbd": 10000,
  //   "max_accepted_payout": "1000000.000 HBD",
  //   "allow_curation_rewards": true
  // }
  const {
    op: [
      opType,
      {author, permlink, extensions, allow_votes, percent_hbd, max_accepted_payout, allow_curation_rewards}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <a className="account keychainify-checked" href={`/@${author}`}>
        {author}
      </a> comment options: {percent_hbd / 100}% HBD, allow votes: {allow_votes ? 'true' : 'false'}, allow curation rewards: {allow_curation_rewards ? 'true' : 'false'}
    </div>

    <div className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

CommentOptions.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default CommentOptions
