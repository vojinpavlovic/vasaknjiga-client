import { useNavigate } from "react-router"

import useQuery from "Hooks/useQuery"
import Layout from "Components/SimpleLayout"
import Button from "Components/Button"
import { useEffect, useState } from "react"
import Spinner from "Components/Spinner"

const VerifyVerification = () => {
    const {email, code} = useQuery()
    
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    if (!email || !code) return <Show success={false} back={goBack}/>

    return <Show success={false} back={goBack}/>
}

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

export default VerifyVerification