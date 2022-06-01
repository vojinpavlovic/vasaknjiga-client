import fetchAPI from "Helpers/fetchAPI"

const TryRegister = async (firstname, lastname, email, password, confirmPassword) => {
    const result = await fetchAPI({
        endpoint: 'auth/register',
        method: 'POST',
        body: {
            firstname: firstname,
            lastname: lastname,
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        },
        credentials: true
    })

    return await result
}

export default TryRegister