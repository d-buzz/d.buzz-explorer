import React from 'react'

const HivePowerInfo = () => {
  return (
    <div className="well well-xs" style={{ paddingLeft: '0.8em', paddingRight: '0.8em' }}>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Vote Weight</h5>
      <p className="lead text-center" style={{ marginBottom: '0' }}>
        11 HP
      </p>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Voting Power</h5>
      <div className="progress" style={{ marginBottom: '0', background: 'linear-gradient(to bottom, #cef 0%, #dff 100%)' }}>
        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '95.4%' }}>
          95.40%
        </div>
      </div>

      <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
        10.6M / 11M
      </div>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Downvote Power</h5>
      <div className="progress" style={{ marginBottom: '0', background: 'linear-gradient(to bottom, #cef 0%, #dff 100%)' }}>
        <div className="progress-bar progress-bar-striped progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '100.0%' }}>
          100.00%
        </div>
      </div>

      <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
        2.8M
      </div>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Resource Credits</h5>
      <div className="progress" style={{ marginBottom: '0', background: 'linear-gradient(to bottom, #fd9 0%, #fec 100%)' }}>
        <div className="progress-bar progress-bar-striped progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '11.21%' }}>
        </div>
        <span style={{ paddingLeft: '0.25em', color: '#444', fontSize: '12px' }}>11.21%</span>
      </div>

      <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
        1.6M / 14M
      </div>
      <br />

      <div className="row">
        <div className="col col-xs-6">
          <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Reputation</h5>
          <p className="lead text-center" style={{ marginBottom: '0' }}>
            41.7
          </p>
          <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
            9 posts
          </div>
        </div>

        <div className="col col-xs-6">
          <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Age</h5>
          <p className="lead text-center" style={{ marginBottom: '0' }}>
            96 days
          </p>
          <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
            November 2023
          </div>
        </div>
      </div>

      <p className="text-center text-muted" style={{ opacity: '0.5', marginTop: '1.5em' }}>
        view on:
        <a href="https://hive.blog/@iamjco" className="keychainify-checked">hive.blog</a>
        | <a href="https://peakd.com/@iamjco" className="keychainify-checked">peakd</a>
        | <a href="https://ecency.com/@iamjco" className="keychainify-checked">ecency</a>
      </p>
    </div>
  )
}

export default HivePowerInfo
