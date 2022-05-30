const baseURL = "http://sogolisica.com:5050/v1/"
const headers = {
    "Content-Type": 'application/json',
}

const fetchAPI = async ({endpoint, method, credentials, body}) => {
    var options = {}
    options['headers'] = headers
    options['method'] = method

    if (credentials) options['credentials'] = 'include'
    if (body) options['body'] = JSON.stringify(body)

    const result = await fetch(`${baseURL}${endpoint}`, options)
    .then(res => res.json())
    .catch(err => {
        return {success: false, msg: 'internal-error'}
    })

    return await result
}

export default fetchAPI