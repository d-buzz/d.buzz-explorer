import {useEffect, useState} from "react"
import {useNavigate, Navigate} from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const [link, setLink] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const inputLength = search.length

    if (inputLength === 0) {
      return null
    }

    if (!isNaN(search) && parseInt(search) >= 1) {
      setLink(`/b/${search}`)
    } else if (inputLength === 40) {
      setLink(`/tx/${search}`)
    } else if (search.startsWith('@') || inputLength < 16) {
      const trimmedSearch = search.startsWith('@') ? search.slice(1) : search
      setLink(`/@${trimmedSearch}`)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event)
    }
  }

  useEffect(() => {
    if (link) {
      navigate(link, { replace: true })
    }
  }, [link, navigate])

  return (
    <form id="search" method="post" className="pull-right">
      <input
        name="query"
        size="25"
        type="text"
        placeholder="Account, transaction, or block."
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        <i className="glyphicon glyphicon-search"></i>
      </button>
    </form>
  )
}

export default SearchBar
