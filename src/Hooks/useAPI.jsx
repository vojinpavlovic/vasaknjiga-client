import { useEffect, useState } from "react";
import fetchAPI from "Helpers/fetchAPI";

const useAPI = ({endpoint, method, credentials, body}) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(()=> {
        fetchAPI({
            endpoint: endpoint,
            method: method,
            credentials: credentials,
            body: body
        })
    },[])
    
    return { data, loading }
}

export default useAPI