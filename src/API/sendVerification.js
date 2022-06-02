import fetchAPI from "Helpers/fetchAPI";

const SendVerification = async () => {
    const result = await fetchAPI({
        endpoint: 'account/newVerification',
        credentials: true
    })
    
    return await result
}

export default SendVerification