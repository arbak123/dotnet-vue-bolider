import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import bgImg from '../assets/auth-bg.jpg'
const Auth = () => {
    const [activeTab, setActiveTab] = useState<string>('login');

    const handleTabChange = (key: string | null) => {
        setActiveTab(key as string);
    };

    return (
        <Container className='p-2 d-flex align-items-center justify-content-center' style={{backgroundImage:`url(${bgImg})`,minWidth:'100vw',minHeight:'100vh',backgroundSize:'cover',backgroundPosition:'center'}}>
            <Row className="justify-content-center w-75 mt-5">
                <Col sm={4} className='p-4 rounded-4 bg-black '>
                    <Tabs id="auth-tabs" defaultActiveKey={activeTab} onSelect={handleTabChange} justify>
                        <Tab eventKey="login" title="Login">
                            <Login/>
                        </Tab>
                        <Tab eventKey="signup" title="Signup">
                           <SignUp/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth