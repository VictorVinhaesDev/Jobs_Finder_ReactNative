import { useState, useEffect } from "react"
import axios from "axios"


const useFetch = (endpoint, query) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    //mudamos a url, passamos para template string e alteramos antes estava assim "https://jsearch.p.rapidapi.com/search"
    //no header, a rapid api key a gente passa como .env para n ficar exposto


    //a query, nós mudamos, ela é a busca do que a API vai devolver, exemplo quando a pessoa escrever trabalho de cozinhas, ela busca trabalhos que tem haver com cozinha
    //query é tipo os names dos inputs pode ser qualquer nome
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '57d2e54810mshc076ae3d3484217p1d3770jsn8c1b8e35d9e6',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert("error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);


    //ele falou q ta dando um erro e n vai direito dai vem essa função para usar o fetch denovo
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    return { data, isLoading, error, refetch }
}
export default useFetch