import { useEffect, useState } from "react";
import fetchAPI from "Helpers/fetchAPI";

/*
    Hook for calling API on when component mounts
*/
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
        .then(res => {
            setLoading(false)
            return setData(res)
        })
        .catch(err => {
            setLoading(false)
            return setData({ success: false, msg: 'internal-error' })
        })
    },[])
    

    return { data, loading }
}

export default useAPI