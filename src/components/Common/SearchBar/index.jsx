import {IoSearch} from "react-icons/io5"
import {TextInput} from "flowbite-react"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    const inputLength = search.length

    if (!isNaN(search) && parseInt(search) >= 1) {
      console.log('block', inputLength)
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

  return (
    <TextInput
      className={'flex-grow'}
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
