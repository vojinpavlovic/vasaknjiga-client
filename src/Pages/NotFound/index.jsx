import { useNavigate } from 'react-router'

import Button from 'Components/Button'
import Layout from 'Components/SimpleLayout'

const NotFound = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate('/')
    }

    return (
        <Layout logo title="404" subtitle="Ova stranica ne postoji">
            <Button onClick={back} style="text" size="sm">Vratite se na pocetak</Button>
        </Layout>
    );
}

export default NotFound