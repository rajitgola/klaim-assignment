import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import "./Login.scss"

const Login = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

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
                    onFinish={onFinish}>
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