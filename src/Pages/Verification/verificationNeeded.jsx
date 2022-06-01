import Layout from "Components/SimpleLayout"
import Button from "Components/Button"

const VerificationNeeded = () => {
    return (
        <Layout 
        logo
        title="Vas nalog nije verifikovan"
        subtitle="Pri registraciji vaseg naloga ste dobili vas verifikacioni kod. 
            Proverite vas inbox ili spam i kliknite na link. 
            Ako ste se tek registrovali sacekajte 5 minuta ako ne stigne onda"
        >
            <Button style="text">Posaljite ponovo</Button>
        </Layout>
    )
}

export default VerificationNeeded