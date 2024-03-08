// /utils/api.js
// const BASE_URL = 'https://rpc.d.buzz/'
// const BASE_URL = 'https://api.hive.blog'
const BASE_URL = import.meta.env.VITE_RPC || 'https://api.hive.blog'


// Example function for making a GET request
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

// Example function for making a POST request
export const postData = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return await response.json()
  } catch (error) {
    console.error('Error posting data:', error)
    throw error
  }
}
