import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

/* My Libs */
import * as StyleSheet from './styles'
import { Inputs, Locales, LoginErrors } from './config'
import Input from 'Components/Input'
import Button from 'Components/Button'
import Layout from 'Components/SimpleLayout'

/* API */
import TryLogin from 'API/login'
//import useUser from 'Hooks/useUser';
import { set } from 'Features/user/userSlice'

const Login = () => {
    document.title = `Vasa Knjiga - Prijava`
    
    const navigate = useNavigate()
    
    const [disabledBtn, setDisabledBtn] = useState(false)

    const dispatch = useDispatch()

    const { register, handleSubmit, setError, formState: { errors } } = useForm()
    
    const email = register('email', Inputs.email.options);
    
    const password = register('password', Inputs.password.options);
    
    const onSubmit = async data => {
        const {email, password} = data
        setDisabledBtn(true)
        
        const user = await TryLogin(email, password)

        if (user.success) {
            dispatch(set(user.result))
            return navigate('/')
        }
        if (!user.success) {
            setDisabledBtn(false)
            if (LoginErrors[user.msg]) {
                return setError("password", LoginErrors[user.msg])
            }
            
            /* In case there is no registered error, we will notify user to report it*/
            console.log(user)
            return setError("password", LoginErrors["not-found"])
        } 
    }

    const onError = data => {  
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const type = data[key].type
                setError(key, Inputs[key]['errors'][type])
            }
        }
    }

    const goRegister = () => {
        navigate('/auth/register')
    }

    const goPasswordReset = () => {
        navigate('/auth/password/reset')
    }

    return (
        <Layout logo title={Locales.title} subtitle={Locales.subtitle}>
            <form className={StyleSheet.Form} onSubmit={handleSubmit(onSubmit, onError)}>
                <Input 
                    register={email}
                    placeholder={Inputs.email.placeholder}
                    error={errors.email && errors.email.message}
                />
                <Input 
                    register={password}
                    type="password"
                    placeholder={Inputs.password.placeholder}
                    error={errors.password && errors.password.message}
                    actionText="Zaboravljena sifra?"
                    actionClick= {e => {
                        e.preventDefault() 
                        goPasswordReset()
                    }}
                />
                <Button disabled={disabledBtn} style={!disabledBtn ? "primary" : "disabled"} size="sm" type="submit">
                    {!disabledBtn ? "Prijavi se" : "Proveravamo podatke..."}
                </Button>            
            </form>

            <p className={StyleSheet.RegisterParagraph}>
                {Locales.register}
                <span className={StyleSheet.RegisterSpan}>
                    <Button onClick={goRegister} style="text" size="none">{Locales.registerBtn}</Button>
                </span>
            </p>
        </Layout>
    );
}

export default Login