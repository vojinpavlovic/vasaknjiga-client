const { useMemo } = require("react")
const { useLocation } = require("react-router")

/*
    useQuery for simple search params that has key=value format
*/
const useQuery = () => {
    const { search } = useLocation()
    
    /*
        Formating URLSearchParams object to string, split params with & and map it to find key, val pair
        Memoize it to cache same inputs
    */
    
    return useMemo(() => 
        Object.fromEntries(new URLSearchParams(search).toString().split('&').map(pair => pair.split('=')))
    ,[search])
}

export default useQuery