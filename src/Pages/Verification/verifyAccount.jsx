import { useNavigate } from "react-router"


import useAPI from 'Hooks/useAPI'
import useQuery from "Hooks/useQuery"

import Layout from "Components/SimpleLayout"
import Button from "Components/Button"
import Spinner from "Components/Spinner"

const VerifyAccount = () => {
    const {email, code} = useQuery()
    
    const {data, loading} = useAPI({
        endpoint: `account/verifyAccount?email=${email}&code=${code}`, 
        credentials: true
    })
    
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate('/')
    }
    
    if (loading) return <Spinner/>

    if (!data.success) return <Show success={false} back={goBack}/>
    
    return <Show success={true} back={goBack}/>
}

/*
    Show component based on if success or failed from Locales
*/
const Show = ({success, back}) => {
    const setTitle = success ? Locales['success'].title : Locales['failed'].title
    const setSubtitle = success ? Locales['success'].subtitle : Locales['failed'].subtitle

    return (
        <Layout logo title={setTitle} subtitle={setSubtitle}>
            <Button onClick={back} style="text">Vratite se na pocetnu</Button>
        </Layout>
    )
}

const Locales = {
    success: {
        title: "Vas nalog je uspesno verifikovan",
        subtitle: "Dobrodosli u Vasoj Knjizi. :)"
    },
    failed: {
        title: "Greska!",
        subtitle: "Desila se greska! kod nije validan ili je nalog vec verifikovan"
    }
}

export default VerifyAccount