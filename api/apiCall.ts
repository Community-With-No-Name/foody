import axios from "axios"

export const getRequest = async (url: string) => {
    const response = await axios.get(url)
    return response.data
  }