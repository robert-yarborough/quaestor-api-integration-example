import axios from "axios"
import getTEAccessToken from "../security/external/getTEAccessToken"

const teGetAPICall = async (url) => {
  let accessToken = await getTEAccessToken()
  const config = { headers: { Authorization: accessToken } }
  try {
      const { data } = await axios.get(url, config)
      return data
  } catch (error) {
      if (error.response.data.errors[0] === '1.1.1.11') {
          try {
              config.headers.Authorization = accessToken
              const { data } = await axios.get(url, config)
              return data
          } catch (error) {
              throw error
          }
      } else {
          throw error
      }
  }
  
}

export default teGetAPICall
