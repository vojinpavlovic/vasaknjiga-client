import * as StyleSheet from "./styles"

const Styles = {
    'primary': StyleSheet.Primary,
    'secondary': StyleSheet.Secondary,
    'disabled': StyleSheet.Disabled,
    'disabled-secondary': StyleSheet.DisabledSecondary,
    'text': StyleSheet.Text
}

const Sizes = {
    'none' : 'none',
    'sm' : StyleSheet.Small
}

const Button = ({style, size, onClick, children, disabled}) => {
    const setStyle = () => Styles[style] ? Styles[style] : Styles['primary']

    const setSize = () => Sizes[size] ? Sizes[size] : Sizes['sm']

    return (
        <button onClick={onClick} className={`${setStyle()} ${setSize()}`} disabled={disabled}>{children}</button>
    )
}

export default Button