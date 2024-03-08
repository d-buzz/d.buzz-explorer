import PropTypes from "prop-types"
import {useEffect} from "react"

const PageTitle = ({title}) => {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = 'Dbuzz - Explorer'
    }
  }, [title])

  return null
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
