import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUserToken, getUserToken, setUserToken, validateUser } from '../../services';
import { IAPIResponse, ILoginRequest } from '../../shared/models';
import "./Login.scss";

const Login = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState<any>(getUserToken());
    
    const onSubmit = (values: ILoginRequest) => {
        setToken("test token value");
        setTimeout(() => {
            navigate("/profile");
        }, 0);
        validateUser(values).then((res : IAPIResponse<{token : string}>) => {
            // setUserToken(res.data.token);
            setToken("test token value")
            navigate("/profile");
        });
    };

    useEffect(() => {
        token && setUserToken(token);
        !token && clearUserToken();
    }, [token])

    return (
        <>
            <section className="login-container">
                <div className="login-head">
                    <h2>Login</h2>
                </div>
                <hr/>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </>
    )
}

export default Login