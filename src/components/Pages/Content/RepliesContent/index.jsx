
const RepliesContent = () => {

  return <div style={{marginLeft: '5px', paddingLeft: '45px', borderLeft: '1px dotted #CCC', borderRadius: '20px'}}>
    <div className="well well-sm post"
      style={{background: '#F8F8F8', padding: '0', marginBottom: '0', marginTop: '5px'}}>
      <div className="post-head-bar">
        <div className="post-head">
          <a style={{fontWeight: '500'}} href="/@naitreart"
            className="keychainify-checked">@naitreart</a> ·{' '}
          <a style={{fontSize: '88%'}} href="/hive-142159/@naitreart/re-bnwphoto-s9tyow"
            className="keychainify-checked">
            <time className="timeago2"
              // title={formatDateTime()}
            >
              {/*{timeAgo()}*/}
            </time>
          </a>
        </div>
      </div>
      <div style={{margin: '0', background: '#FFF', overflow: 'hidden'}}>
        <div className="md">
          <div className="md-inner">
            <pre style={{
              display: 'block',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              background: 'white',
              border: 'none',
              margin: '0',
              padding: '0 0 0.5em'
            }}>
              qweq
            </pre>
          </div>
        </div>
        <div className="advanced" style={{padding: '0 5px', borderTop: '1px solid #DDD'}}>
          <a href="#" style={{padding: '0 2em 0 0', fontSize: '0.8em', color: '#666'}}
            onClick={() => ''} className="keychainify-checked">
            properties (22)
          </a>
          <div style={{margin: '5px', display: 'none'}}>
            <table className="table table-condensed hash3 ultra-condensed">
              <tbody>
                {/* ... (properties data) */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default RepliesContent
