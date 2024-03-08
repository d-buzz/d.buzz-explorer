import {useParams} from "react-router-dom"
import {usernameWithoutAt} from "../../../utils/helper.js"

const Owner = () => {
  const { username } = useParams()

  return <div className="container">
    <div className="well">
      <h3 style={{marginTop: '0'}}>
        Owner key history for {usernameWithoutAt(username)}
      </h3>
      No history.
    </div>
  </div>
}

export default Owner
