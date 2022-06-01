import Layout from "Components/SimpleLayout"
import Button from "Components/Button";

const Suspended = () => {
    return (
        <Layout 
        logo
        title="Vas nalog je suspendovan"
        subtitle="Ako mislite da je doslo do greske."
        >
            <Button style="text">Kontaktiraj nas</Button>
        </Layout>
    );
}

export default Suspended
