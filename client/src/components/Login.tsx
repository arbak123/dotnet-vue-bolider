import React, { ChangeEvent, useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import * as UserApi from '../network/UserApi'
import { ConflictError } from '../errors/http_errors';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
type LoginState = {
    email: string,
    password: string
}
const Login = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [errorText, setErrorText] = useState<string>("")

    const [loginState, setLoginState] = useState<LoginState>({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        //Form validation
        let errors: LoginState = { email: '', password: '' }

        //email validation
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!loginState.email || !emailRegex.test(loginState.email)) {
            errors.email = 'Email id is not valid';
        }
        //password validation
        if (!loginState.password) {
            errors.password = 'Password is required'
        }
        setErrors(errors)

        //If no errors, proceed to login
        if (Object.values(errors).every((err) => err.length === 0)) {
            try {
                const user = await UserApi.login(loginState)
                setUser(user);

                navigate('/dashboard')      //navigate to dashboard on successful login  
            } catch (error) {
                if (error instanceof ConflictError) {
                    setErrorText(error.message);
                } else {
                    alert(error);
                }
                console.error(error);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    }
    return (
        <Form onSubmit={handleLogin} className='mt-2 p-4 text-white d-flex flex-column gap-2'>
            <Form.Group controlId="loginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" value={loginState.email} type="email" placeholder="Enter email" onChange={handleChange} />
                <span className="text-danger">{errors.email}</span>
            </Form.Group>
            <Form.Group controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" value={loginState.password} type="password" placeholder="Password" onChange={handleChange} />
                <span className="text-danger">{errors.password}</span>
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-4 w-100'>
                Login
            </Button>
        </Form>
    )
}

export default Login