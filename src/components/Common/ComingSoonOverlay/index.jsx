
const ComingSoonOverlay = () => {

  return <div
    style={{
      position: 'absolute',
      top: '50%',  // Center vertically
      left: '50%',
      transform: 'translate(-50%, -50%)',  // Center horizontally and vertically
      backgroundColor: 'rgba(98, 164, 66, 0.5)',
      width: '100%',
      height: '100%',  // Keep this at 100% if you want the background to cover the entire screen
      textAlign: 'center',
      zIndex: '1000',
    }}
  >
    <h2 style={{margin: '0', color: '#fff', textShadow: '1px 1px #000'}}>Work in-progress</h2>
    {/* You can add more details or styling here */}
  </div>
}

export default ComingSoonOverlay
