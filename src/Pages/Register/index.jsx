import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router';
import { useDispatch } from 'react-redux';

/* My Libs */
import { Inputs, Locales, RegisterErrors } from './config';
import * as StyleSheet from './styles';
import Input from 'Components/Input';
import Button from 'Components/Button';
import Layout from 'Components/SimpleLayout';

//API
import TryRegister  from 'API/register'
import { getUser } from 'Features/user/userSlice';


const Register = () => {
    document.title = `Vasa Knjiga - Registracija`
    
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    
    const [disabledBtn, setDisabledBtn] = useState(false)

    const {getValues, register, handleSubmit, setError, formState: { errors } } = useForm()
    
    const firstname = register('firstname', Inputs.firstname.options);
    
    const lastname = register('lastname', Inputs.lastname.options);
    
    const email = register('email', Inputs.email.options);
    
    const password = register('password', Inputs.password.options);
    
    const confirmPassword = register('confirmPassword', Inputs.confirmPassword.options);
    
    const onSubmit = async data => {
        const { firstname, lastname, email, confirmPassword, password } = getValues();

        if (password !== confirmPassword) {
            return setError('confirmPassword', Inputs.confirmPassword.errors.notMatch)
        }

        setDisabledBtn(true)

        const result = await TryRegister(firstname, lastname, email, password, confirmPassword)
        
        if (result.success) {
            return dispatch(getUser())
        }
        
        if (!result.success) {
            setDisabledBtn(false)
            if (RegisterErrors[result.msg]) {
                return setError("confirmPassword", RegisterErrors[result.msg])
            }

            /* In case there is no registered error, we will notify user to report it*/
            console.log(result)
            return setError("confirmPassword", RegisterErrors["not-found"])
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

    const goLogin = () => {
        navigate('/auth/login')
    }
    
    return (
        <Layout logo title={Locales.title}>
            <form className={StyleSheet.Form} onSubmit={handleSubmit(onSubmit, onError)}>
                <Input 
                    register={firstname}
                    placeholder={Inputs.firstname.placeholder}
                    error={errors.firstname && errors.firstname.message}
                />
                <Input 
                    register={lastname}
                    placeholder={Inputs.lastname.placeholder}
                    error={errors.lastname && errors.lastname.message}
                />
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
                />
                <Input 
                    register={confirmPassword}
                    type="password"
                    placeholder={Inputs.confirmPassword.placeholder}
                    error={errors.confirmPassword && errors.confirmPassword.message}
                />
                <Button disabled={disabledBtn} style={!disabledBtn ? "primary" : "disabled"} size="sm" type="submit">
                    {!disabledBtn ? "Napravite Nalog" : "Nalog se pravi.."}
                </Button>
            </form>

            <p className={StyleSheet.LoginParagraph}>
                {Locales.login}
                <span className={StyleSheet.LoginSpan}>
                    <Button onClick={goLogin} style="text" size="none">{Locales.loginBtn}</Button>
                </span>
            </p>
        </Layout>
    );
}

export default Register