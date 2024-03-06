import * as React from "react"
import {Link, useParams} from "react-router-dom"
import useContent from "../../../hooks/useContent.js"
import './style.css'
import {formatDateTime, timeAgo, usernameWithoutAt} from "../../../utils/helper.js"
import AdvanceTab from "./AdvanceTab/index.jsx"
import PageTitle from "../../Common/PageTitle/index.jsx"

const Content = () => {
  const {username, permlink} = useParams()

  const {
    content,
    category,
    title,
    body,
    activeVotes,
    activeVotesNameOnly,
    propertyKeys,
    isReply,
    parentAuthor,
    parentPermlink,
    created,
    pendingPayoutValue,
    loading: contentLoading
  } = useContent(usernameWithoutAt(username), permlink)

  if (contentLoading) {
    return <div className="container">
      <div className='row'>
        Loading...
      </div>
    </div>
  }

  return (
    <div className="container">
      <PageTitle title={`${title} | Dbuzz - Explorer`} />
      <div className='row'>
        <div className='col-md-3 col-md-push-9'></div>
        <div className='col-md-9 col-md-pull-3' style={{overflow: 'hidden', height: '100%'}}>
          <h3 style={{fontWeight: '400'}}>{title}</h3>
          <div style={{fontSize: '110%'}}>
            {`View this thread on: `}
            <a href={`https://d.buzz/${username}/${permlink}`} className="keychainify-checked">
              d.buzz
            </a>
            {` | `}
            <a href={`https://hive.blog/${category}/${username}/${permlink}`} className="keychainify-checked">
              hive.blog
            </a>
            {` | `}
            <a
              href={`https://peakd.com/${category}/${username}/${permlink}`} className="keychainify-checked">
              peakd.com
            </a>
            {` | `}
            <a href={`https://ecency.com/${category}/${username}/${permlink}`} className="keychainify-checked">
              ecency.com
            </a>
          </div>

          {isReply && (
            <>
              <hr/>
              <p style={{fontStyle: 'italic', border: '1px solid #CCC', padding: '12px', background: '#F8F8F8'}}>
                {`Viewing a response to: `}
                <Link to={`/@${parentAuthor}/${parentPermlink}`} className="keychainify-checked">
                  {`@${parentAuthor}/${parentPermlink}`}
                </Link>
              </p>
            </>
          )}

          <div
            className="well well-sm post"
            style={{background: '#F8F8F8', padding: 0, marginBottom: 0, marginTop: '16px'}}>
            <div className="post-head-bar">
              <div className="post-head">
                <span className="post-category">
                  <span className="glyphicon glyphicon-tag"></span>{category}
                </span>
                ·
                <Link style={{fontWeight: 500}} to={`/${username}`} className="keychainify-checked">
                  {username}
                </Link>
                ·
                <time title={formatDateTime(created)}>{timeAgo(created)}</time>
              </div>
              <span className="post-payout">{pendingPayoutValue}</span>
            </div>
            <div style={{margin: 0, background: '#FFF', overflow: 'hidden'}}>
              {!isReply && (
                <strong className="post-title">
                  {title}
                </strong>
              )}
              <div className="md">
                <div className="md-inner">
                  <pre style={{
                    display: 'block',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    background: 'white',
                    border: 'none',
                    margin: 0,
                    padding: '0 0 0.5em'
                  }}>
                    {body}
                  </pre>
                </div>
              </div>
              <div className="post-votes">
                {`👍 `}
                {activeVotesNameOnly().map((name, index) => {
                  return <React.Fragment key={index}>
                    <Link key={index} className="account keychainify-checked" to={`/@${name}`}>{name}</Link>
                    {`, `}
                  </React.Fragment>
                })}
              </div>
            </div>

            <AdvanceTab activeVotes={activeVotes} propertyKeys={propertyKeys} content={content}/>

            {/*<RepliesContent/>*/}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
