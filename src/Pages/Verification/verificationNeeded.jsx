import { useState } from "react"

import Layout from "Components/SimpleLayout"
import Button from "Components/Button"

import SendVerification from "API/sendVerification"

const VerificationNeeded = () => {
    const [preTitle, setPreTitle] = useState('')
    
    const onSubmit = async e => {
        e.preventDefault()
        const result = await SendVerification()

        if (result.success) {
            return setPreTitle('Zahtev je poslat')
        }

        return setPreTitle('Zao nam je, desila se greska :(')
    }

    return (
        <Layout 
        logo
        pretitle={preTitle}
        title="Vas nalog nije verifikovan"
        subtitle="Pri registraciji vaseg naloga ste dobili vas verifikacioni kod. 
            Proverite vas inbox ili spam i kliknite na link. 
            Ako ste se tek registrovali sacekajte 5 minuta ako ne stigne onda"
        >
            <Button onClick={onSubmit} style="text">Posaljite ponovo</Button>
        </Layout>
    )
}

export default VerificationNeeded