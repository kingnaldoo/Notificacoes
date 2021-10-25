import { Layout, Card, Row, Col, Form, Input, Button } from 'antd';

const { Content } = Layout;

import { UserOutlined, BankOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function cadastrarOrgao() {
    return (
        <Layout>
            <Content>
                <Row
                    justify='space-around'
                    align='middle'
                    style={{
                        padding: 45,
                        height: 'calc(100vh - 150px)'
                    }}
                >
                    <Card title="Sistema de comunicação entre Órgãos">
                        <Col>
                            <div>
                                <p>
                                    Preencha as informações abaixo para cadastro no sistema
                                </p>
                            </div>
                        </Col>

                        <Form.Item 
                            name="nome" 
                            rules={[
                                { required: true, message: 'Por favor insira seu nome' },
                                {
                                    type: 'string',
                                    min: 4,
                                    message: 'Seu nome precisa ter mais de 4 caracteres'
                                }
                            ]}    
                        >
                            <span style={{ fontWeight: 'bold' }}>Nome:</span>
                            <Input placeholder='Insira seu nome' size='large' allowClear prefix={<UserOutlined />}/>
                        </Form.Item>

                        <Form.Item
                            name="sigla"
                            rules={[
                                { required: true, message: 'Por favor insira a sigla' },
                                {
                                    type: 'string',
                                    min: 4,
                                    message: 'Seu sigla precisa ter mais de 4 caracteres'
                                }
                            ]}
                        >
                            <span style={{ fontWeight: 'bold' }}>Sigla Orgão:</span>
                            <Input placeholder='Insira sua sigla' size='large' allowClear prefix={<BankOutlined />} />
                        </Form.Item>

                        <Form.Item 
                            name='descricao'
                            rules={[
                                { required: true, message: 'Por favor, insira uma descrição' },
                                {
                                    type: 'string',
                                    min: 4,
                                    message: 'Sua descrição precisa ter mais do que 04 caracteres'
                                }
                            ]}
                        >
                            <TextArea placeholder='Insira sua descrição' />
                        </Form.Item>

                        <Form.Item style={{ float: 'right' }}>
                            <Button htmlType='submit' type='primary'>Cadastrar</Button>
                        </Form.Item>
                    </Card>
                </Row>
            </Content>
        </Layout>
    );
}