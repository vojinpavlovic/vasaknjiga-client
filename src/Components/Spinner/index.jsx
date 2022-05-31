import { DotPulse as Loading } from '@uiball/loaders'

const Spinner = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Loading size={50} color="#413ef7" />
        </div>
    )
}

export default Spinner