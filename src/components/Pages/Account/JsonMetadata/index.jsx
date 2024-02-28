
const JsonMetadata = () => {
  return (
    <div className="well well-xs">
      <span className="lead">JSON Metadata</span><br />
      <code style={{ wordWrap: 'break-word', fontSize: '70%', display: 'block' }}>
        {`{"beneficiaries":[{"name":"dbuzz","weight":300,"label":"referrer"},{"name":"dbuzz","weight":100,"label":"creator"},{"name":"dbuzz","weight":100,"label":"provider"}]}`}
      </code>
    </div>
  )
}

export default JsonMetadata
