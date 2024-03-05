import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"

const Comment = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    // body,
    // title,
    author,
    permlink,
    // json_metadata,
    parent_author,
    parent_permlink
  } = data

  return <div className="op op-lead" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <a className="account keychainify-checked" href={`/@${author}`}>{author}</a>
      {
        parent_author && parent_permlink
          ? <>
            {` replied to `}
            <a href={`/@${parent_author}/${parent_permlink}`} className="keychainify-checked">
              {`@${parent_author}/${parent_permlink}`}
            </a>
          </>
          : <>
            {` replied to `}
            <a href={`/@${author}/${permlink}`} className="keychainify-checked">
              {`@${author}/${permlink}`}
            </a>
          </>
      }

    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default Comment
