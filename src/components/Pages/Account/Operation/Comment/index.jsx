import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"

const Comment = ({transaction}) => {

  // {
  //   "body": "Yes, I found my brain and found that link, a few tweaks in editor would be great. I see you still stan the Twatter. \n( I couldn't post from dBuzz, it reported an error This buzz couldn't be sent or something similar)",
  //   "title": "",
  //   "author": "aschatria",
  //   "permlink": "re-dbuzz-s9ixy1",
  //   "json_metadata": "{\"tags\":[\"hive-193084\"],\"app\":\"peakd/2024.1.1\"}",
  //   "parent_author": "dbuzz",
  //   "parent_permlink": "re-cafmec4capvz22v86pclel"
  // }
  const {
    op: [
      opType,
      {body, title, author, permlink, json_metadata, parent_author, parent_permlink}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-lead" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <a className="account keychainify-checked" href={`/@${author}`}>aschatria</a> replied to <a href={`/@${parent_author}/${parent_permlink}`} className="keychainify-checked">{`@${parent_author}/${parent_permlink}`}</a>
    </div>

    <div className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

Comment.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default Comment
