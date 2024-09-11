import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import './styles.scss';

const Login = () => {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState({
        isLoading: false,
        data: null,
        message: '',
        success: false,
        error: null
    });
    const onSubmit = async (values) => {
        try {
            setAuthenticated({
                ...authenticated,
                isLoading: true
            });
            const result = await axios.post('https://web82-social-app-backend.onrender.com/api/v1/users/sign-in', values);
            setAuthenticated({
                ...authenticated,
                success: true,
                ...result.data,
                data: result.data.data,
                isLoading: false
            });
        } catch (error) {
            setAuthenticated({
                ...authenticated,
                ...error.response.data,
                isLoading: false
            });
        }
    };
    return (
        <div className="container-form-login">
            <h1>Social app MindX Fullstack</h1>
            <Form
                onFinish={onSubmit}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập email và đúng định dạng!',
                            type: 'email'
                        },
                    ]}>
                    <Input placeholder="example@gmail.com" size="small" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password size="small" />
                </Form.Item>
                {authenticated.error &&
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 14,
                        }}
                    >
                        <p style={{ color: 'red' }}>{authenticated.message}</p>
                    </Form.Item>
                }

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <div className="btn">
                        <Button size="small" htmlType="submit" loading={authenticated.isLoading}>
                            Đăng nhập
                        </Button>
                        <Button
                            size="small"
                            className="btn-signup"
                            onClick={() => {
                                navigate('/auth/register');
                            }}
                        >
                            Đăng ký
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login