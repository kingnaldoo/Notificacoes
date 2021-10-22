import { Button, Card, Divider, Form, Input, Layout, Row } from 'antd';
import { MaskedInput } from 'antd-mask-input';
const { Content } = Layout;


export default function Login() {
    return(
        <Layout>
            <Content>
                <Row 
                    justify='space-around'
                    align='middle'
                    style={{ background: '#fff', height: 'calc(100vh - 150px)' }}
                >
                    <Card style={{ width: '25vw', padding: 15 }}>
                        <div>
                            <h2 style={{ color: '#2d4040', fontWeight: 'bold', paddingTop: 45 }}>Faça login para continuar</h2>
                            <p>Preencha as informações abaixo para entrar no sistema</p>
                        </div>

                        <Divider />

                        <Form>
                            <Form.Item name='cpf' rules={[
                                { required: true, message: 'Por favor, insira seu CPF' },
                                {
                                    type: 'string',
                                    max: 14,
                                    message: 'Por favor, insira um CPF válido'
                                }
                            ]}>
                                <MaskedInput 
                                    size='large' 
                                    mask='111.111.111-11'
                                    allowClear
                                    type="string"
                                    placeholder='Insira seu CPF'

                                ></MaskedInput>
                            </Form.Item>

                            <Form.Item name='password' rules={[
                                {
                                    required: true,
                                    message: 'Insira sua senha'
                                },
                                {
                                    type: 'string',
                                    min: 4,
                                    message: 'Por favor, insira uma senha maior'
                                }
                            ]}>
                                <Input.Password size='large' placeholder='Insira sua senha' type='password'></Input.Password>
                            </Form.Item>
                                
                            <Form.Item >
                                <Button type='primary' htmlType='submit'>Entrar</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Row>
            </Content>
        </Layout>
    );
}