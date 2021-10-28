import React, { useState } from 'react';
import { Layout, Row, Card, Divider, Form, Input, Button, Alert, Spin } from 'antd'

import { CreditCardOutlined } from '@ant-design/icons'

import MaskedInput from 'antd-mask-input'
import axios from '../../utils/axios';
import { useRouter } from 'next/dist/client/router';

const { Content } = Layout

export default function Login() {
    const [messegeError, setMessageError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const login = ({ cpf, password }) => {
        const username = cpf.replace(/\D/g, "");
        setLoading(true)
        axios.get("/login", {
            params: {
                username: username,
                password: password
            },
        }).then(reponse => {
            localStorage.setItem("usuarioLogado", JSON.stringify(reponse.data));
            router.push("/dashboard")
            setLoading(false)
        }).catch(erro => {
            setMessageError("CPF ou senha inválida!");
            setLoading(false)
        })

    };

    return (
        <Layout>
            <Content>
                <Row justify="space-around"
                    align="middle"
                    style={{ height: "calc(100vh - 150px)" }}>
                    <Card style={{ width: "25vw", padding: 15 }}>
                        <Spin tip="Realizando Login..." spinning={loading} size="large">
                            <div>
                                <h2 style={{ color: '#2D4040', fontWeight: "bold", paddingTop: 45 }}>Faça Login para continuar</h2>
                                <p>Preencha as informações abaixo para entrar no sistema.</p>
                            </div>
                            <Divider />
                            <Form onFinish={login}>
                                {
                                    messegeError && (
                                        <div style={{ marginBottom: 25, color: "#F05152" }}>
                                            <Alert message={messegeError} type="error" showIcon closable />
                                        </div>
                                    )
                                }
                                <Form.Item name="cpf" rules={[
                                    { required: true, message: "Por favor, insira seu CPF!" },
                                    {
                                        type: "string",
                                        max: 14,
                                        min: 11,
                                        message: "Por favor, insira um CPF válido."
                                    }
                                ]}>
                                    <MaskedInput size="large"
                                        prefix={<CreditCardOutlined />}
                                        mask="111.111.111-11"
                                        allowClear
                                        type="string"
                                        placeholder="Insira seu CPF."
                                    />
                                </Form.Item>
                                <Form.Item name="password" rules={[
                                    {
                                        required: true,
                                        message: "Por favor, insira sua senha."
                                    },
                                    {
                                        type: "string",
                                        min: 4,
                                        message: "Por favor, insira uma senha maior do que 04 digitos."
                                    }
                                ]}>
                                    <Input.Password size="large" placeholder="Insira sua senha" type="password
                                " />
                                </Form.Item>
                                <Form.Item style={{ float: 'right' }}>
                                    <Button type="primary" htmlType="submit"> Entrar</Button>
                                </Form.Item>
                            </Form>
                        </Spin>
                    </Card>
                </Row>
            </Content>
        </Layout>
    )
}