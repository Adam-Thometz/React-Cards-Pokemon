import {useState, useEffect} from 'react'
import axios from "axios";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true)
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp)
  }

  return [isFacingUp, flipCard]
}

const useAxios = (baseUrl) => {
  const [data, setData] = useState([])

  const addResData = async (formatter = data => data, params = '') => {
    const res = await axios.get(`${baseUrl}/${params}`)
    setData(data => [...data, formatter(res.data)])
  }

  return [data, addResData]
}

export {useFlip, useAxios}