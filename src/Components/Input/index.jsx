import { InputStyles, ContainerStyles, InputActionStyle, ErrorTextStyles } from "./styles"

const Input = ({ register, type, placeholder, onChange, actionText, actionClick, error }) => {
    return (
        <div className={ContainerStyles}>
            {actionText &&
                <button className={InputActionStyle} onClick={actionClick}>
                    {actionText}
                </button>
            }
            <input 
                {...register} 
                type={type} 
                className={InputStyles} 
                placeholder={placeholder} 
                onChange={onChange}
            />
            <p className={ErrorTextStyles}>{error}</p>
        </div>
    )
}


export default Input