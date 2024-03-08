import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

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
      <Link className="account keychainify-checked" to={`/@${author}`}>{author}</Link>
      {
        parent_author && parent_permlink
          ? <>
            {` replied to `}
            <Link to={`/@${parent_author}/${parent_permlink}`} className="keychainify-checked">
              {`@${parent_author}/${parent_permlink}`}
            </Link>
          </>
          : <>
            {` replied to `}
            <Link to={`/@${author}/${permlink}`} className="keychainify-checked">
              {`@${author}/${permlink}`}
            </Link>
          </>
      }

    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
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
