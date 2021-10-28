import React, { useState } from 'react';
import { Layout, Card, Row, Col, Form, Input, Button } from 'antd';

import axios from '../../utils/axios';

const { Content } = Layout;
const { TextArea } = Input;

import { UserOutlined, BankOutlined } from '@ant-design/icons'
import { useRouter } from 'next/dist/client/router';
export default function cadastrarOrgao() {
    const [nome, setNome] = useState("");
    const [sigla, setSigla] = useState("");
    const [descricao, setDescricao] = useState("");
    const router = useRouter();

    const cadastrar = () => {
        axios.post("/classes/Orgao", {
            nome,
            sigla,
            descricao
        }).then(reponse => {
            router.push("/dashboard");
        })
    }

    return (<Layout>
        <Content>
            <Row
                justify="space-around"
                align="middle"
                style={{
                    padding: 45,
                    height: "calc(100vh - 150px)"
                }}>
                <Card style={{ width: '50vw' }} title="Sistema de Comunicação Entre Órgãos" headStyle={{ fontWeight: 'bold', color: '#4B9F37', fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Col>
                        <div>
                            <p>Preencha as informações abaixo para cadastro no sistema.</p>
                        </div>
                    </Col>
                    <Form onFinish={cadastrar}>
                        <Form.Item name="nome">
                            <span style={{ fontWeight: 'bold' }}>Nome do órgão:</span>
                            <Input placeholder="Insira seu nome" value={nome} onChange={(input) => setNome(input.target.defaultValue) } size="large" allowClear prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item name="sigla">
                            <span style={{ fontWeight: 'bold' }}>Sigla Órgão:</span>
                            <Input placeholder="Insira sua sigla" value={sigla} size="large" onChange={(input) => setSigla(input.target.defaultValue) } allowClear prefix={<BankOutlined />} type="text" />
                        </Form.Item>
                        <Form.Item name="descricao">
                            <span style={{ fontWeight: 'bold' }}>Insira a descrição:</span>
                            <TextArea placeholder="Insira sua descrição" value={descricao} onChange={(input) => setDescricao(input.target.defaultValue) } allowClear showCount />
                        </Form.Item>
                        <Form.Item style={{ float: 'right' }}>
                            <Button htmlType="submit" type="primary">Cadastrar</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </Content>
    </Layout>)
}