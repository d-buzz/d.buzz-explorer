import {IoSearch} from "react-icons/io5"
import {TextInput} from "flowbite-react"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    const inputLength = search.length

    if (inputLength === 0) {
      return null
    }

    if (!isNaN(search) && parseInt(search) >= 1) {
      navigate(`/b/${search}`)
    } else if (inputLength === 40) {
      navigate(`/tx/${search}`)
    } else if (search.startsWith('@') || inputLength < 16) {
      const trimmedSearch = search.startsWith('@') ? search.slice(1) : search
      navigate(`/@${trimmedSearch}`)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  // <form id="search" action="/search" method="post" className="pull-right">
  //   <input name="query" size="25" type="text" placeholder="Account, transaction, or block."/>
  //   <button type="submit">
  //     <i className="glyphicon glyphicon-search"></i>
  //   </button>
  // </form>


  return (
    <TextInput
      className={'pull-right'}
      id="search"
      type="text"
      rightIcon={IoSearch}
      placeholder="Account, transaction or block"
      required
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

export default SearchBar
