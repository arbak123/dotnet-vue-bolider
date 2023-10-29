import React, { ChangeEvent, useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ConflictError } from '../errors/http_errors'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import * as UserApi from '../network/UserApi'
type RegisterType = {
    username: string,
    email: string,
    password: string
}
const SignUp = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [errorText, setErrorText] = useState<string>("")
    const [signupstate, setSignUpState] = useState<RegisterType>({
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpState({
            ...signupstate,
            [name]: value
        })
    }
    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        let errors: RegisterType = { username: '', email: '', password: '' }
        //username validation
        if (!signupstate.username) {
            errors.username = 'username is required';
        }
        //email validation
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!signupstate.email || !emailRegex.test(signupstate.email)) {
            errors.email = 'Email id is not valid';
        }
        //password validation
        if (!signupstate.password) {
            errors.password = 'Password is required'
        }
        setErrors(errors)
        if (Object.values(errors).every((err) => err.length === 0)) {
            try {
                const newUser = await UserApi.signUp(signupstate)
                setUser(newUser);

                navigate('/dashboard')      //navigate to dashboard for registering successfully   
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
    return (
        <Form onSubmit={handleSignup} className='mt-2 p-4 text-white d-flex flex-column gap-2'>
            <Form.Group controlId="signupName">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" value={signupstate.username} onChange={handleChange} type="text" placeholder="Enter your name" />
                <span className="text-danger">{errors.username}</span>
            </Form.Group>
            <Form.Group controlId="signupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" value={signupstate.email} onChange={handleChange} type="email" placeholder="Enter email" />
                <span className="text-danger">{errors.email}</span>
            </Form.Group>
            <Form.Group controlId="signupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" value={signupstate.password} onChange={handleChange} type="password" placeholder="Password" />
                <span className="text-danger">{errors.password}</span>
            </Form.Group>
            <Button variant="success" type="submit" className='mt-4 w-100 '>
                Signup
            </Button>
        </Form>
    )
}

export default SignUp