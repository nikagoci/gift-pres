import axios from 'axios'
import { useState, useEffect } from "react"

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(url)
                const data = response.data;

                setData(data)
            } catch(err){
                setError(err)
            } finally{
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, error, isLoading}
}

export default useAxios;