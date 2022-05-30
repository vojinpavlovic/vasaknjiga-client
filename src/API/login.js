import fetchAPI from "Helpers/fetchAPI";

const TryLogin = async (email, password) => {
    const result = await fetchAPI({
        endpoint: 'auth/login',
        method: 'POST',
        body: {email: email, password: password},
        credentials: true
    })
    
    return await result
}

export default TryLogin