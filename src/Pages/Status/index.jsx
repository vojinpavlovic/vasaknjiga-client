import Layout from "Components/SimpleLayout"

const Verification = () => {
    return (
        <Layout 
            logo
            title="Vas nalog nije verifikovan"
            subtitle="Pri registraciji vaseg naloga ste dobili vas verifikacioni kod. 
                Proverite vas inbox ili spam i kliknite na link. 
                Ako ste se tek registrovali sacekajte 5 minuta ako ne stigne onda"
            >
            <p>test</p>
        </Layout>
    )
}

const Suspended = () => {
    return (
        <Layout 
            logo
            title="Vas nalog je suspendovan"
            subtitle="Pri registraciji vaseg naloga ste dobili vas verifikacioni kod. 
                Proverite vas inbox ili spam i kliknite na link. 
                Ako ste se tek registrovali sacekajte 5 minuta ako ne stigne onda"
            >
            <p>test</p>
        </Layout>
    )
}

export { Verification, Suspended }